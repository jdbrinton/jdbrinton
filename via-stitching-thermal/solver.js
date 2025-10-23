const minLayers = 2, maxLayers = 32;
const kCu = 401;
const kAir = 0.026;
let syncing = false;
const toMeters_mm = v => Math.max(parseFloat(v || '0'), 0) / 1000;
const toMeters_mil = v => Math.max(parseFloat(v || '0'), 0) * 25.4e-6;
const toMM = m => m * 1000;
const toMil = m => m / 25.4e-6;
const mmPerCuOz = 0.0348;
const toMeters_oz = v => Math.max(parseFloat(v || '0'), 0) * (mmPerCuOz / 1000);
const toOz = m => m / (mmPerCuOz / 1000);
function syncPair(fromEl, toEl, convForward, convBack) {
    if (syncing) return;
    syncing = true;
    const v = parseFloat(fromEl.value || '');
    if (!isNaN(v)) {
        const m = convForward(v);
        toEl.value = (convBack(m)).toPrecision(8).replace(/\.?0+$/, '');
    }
    syncing = false;
}
function pairWire(mmId, milId) {
    const mm = document.getElementById(mmId);
    const mil = document.getElementById(milId);
    syncPair(mm, mil, toMeters_mm, toMil);
    mm.addEventListener('input', () => { syncPair(mm, mil, toMeters_mm, toMil); compute(); });
    mil.addEventListener('input', () => { syncPair(mil, mm, toMeters_mil, toMM); compute(); });
}
function tripleWire(mmId, milId, ozId) {
    const mm = document.getElementById(mmId);
    const mil = document.getElementById(milId);
    const oz = document.getElementById(ozId);
    syncPair(mm, mil, toMeters_mm, toMil);
    syncPair(mm, oz, toMeters_mm, toOz);
    mm.addEventListener('input', () => { syncPair(mm, mil, toMeters_mm, toMil); syncPair(mm, oz, toMeters_mm, toOz); compute(); });
    mil.addEventListener('input', () => { syncPair(mil, mm, toMeters_mil, toMM); syncPair(mil, oz, toMeters_mil, toOz); compute(); });
    oz.addEventListener('input', () => { syncPair(oz, mm, toMeters_oz, toMM); syncPair(oz, mil, toMeters_oz, toMil); compute(); });
}
function layerRow(i, mmVal) {
    const row = document.createElement('div');
    row.id = 'layerRow_' + i;
    const label = document.createElement('span');
    label.textContent = 'Copper thickness L' + (i + 1) + ' ';
    const mm = document.createElement('input');
    mm.type = 'number'; mm.step = 'any'; mm.id = 'cu_' + i + '_mm'; mm.value = (mmVal).toString();
    const mmUnit = document.createTextNode(' mm ');
    const mil = document.createElement('input');
    mil.type = 'number'; mil.step = 'any'; mil.id = 'cu_' + i + '_mil';
    const milUnit = document.createTextNode(' mil ');
    const oz = document.createElement('input');
    oz.type = 'number'; oz.step = 'any'; oz.id = 'cu_' + i + '_oz';
    const ozUnit = document.createTextNode(' Cu Oz');
    row.appendChild(label);
    row.appendChild(mm); row.appendChild(mmUnit);
    row.appendChild(mil); row.appendChild(milUnit);
    row.appendChild(oz); row.appendChild(ozUnit);
    document.getElementById('layersContainer').appendChild(row);
    tripleWire(mm.id, mil.id, oz.id);
}
function initLayers(n, default_mm) {
    document.getElementById('layersContainer').innerHTML = '';
    for (let i = 0; i < n; i++) layerRow(i, default_mm);
}
function getLayerMeters() {
    const n = parseInt(document.getElementById('layerCount').textContent, 10);
    const arr = [];
    for (let i = 0; i < n; i++) {
        const mmEl = document.getElementById('cu_' + i + '_mm');
        const milEl = document.getElementById('cu_' + i + '_mil');
        const ozEl = document.getElementById('cu_' + i + '_oz');
        let m = toMeters_mm(mmEl.value);
        if (isNaN(m) || m === 0) m = toMeters_mil(milEl.value);
        if (isNaN(m) || m === 0) m = toMeters_oz(ozEl.value);
        arr.push(Math.max(m, 0));
    }
    return arr;
}
function compute() {
    const boardT_m = toMeters_mm(document.getElementById('boardT_mm').value) || toMeters_mil(document.getElementById('boardT_mil').value);
    const kDielectric = parseFloat(document.getElementById('kDielectric').value || '0');
    const viaDrill_m = toMeters_mm(document.getElementById('viaDrill_mm').value) || toMeters_mil(document.getElementById('viaDrill_mil').value);
    const viaPlatingEnabled = document.getElementById('viaPlatingEnabled').checked;
    const viaPlating_m = toMeters_mm(document.getElementById('viaPlating_mm').value) || toMeters_mil(document.getElementById('viaPlating_mil').value);
    const viaPitch_m = toMeters_mm(document.getElementById('viaPitch_mm').value) || toMeters_mil(document.getElementById('viaPitch_mil').value);
    const viaFillEnabled = document.getElementById('viaFillEnabled').checked;
    const kFill = parseFloat(document.getElementById('kFill').value || '0');
    const compW_m = toMeters_mm(document.getElementById('compW_mm').value) || toMeters_mil(document.getElementById('compW_mil').value);
    const compL_m = toMeters_mm(document.getElementById('compL_mm').value) || toMeters_mil(document.getElementById('compL_mil').value);
    const compQ = parseFloat(document.getElementById('compQ').value || '0');
    const cuLayers = getLayerMeters();
    const tCuTotal = cuLayers.reduce((a, b) => a + b, 0);
    const tDielectric = Math.max(boardT_m - tCuTotal, 0);
    const rSeries = tDielectric / Math.max(kDielectric, 1e-12) + tCuTotal / Math.max(kCu, 1e-12);
    const k1 = boardT_m / Math.max(rSeries, 1e-18);
    const rOuter = Math.max(viaDrill_m / 2, 0);
    const tPlate = viaPlatingEnabled ? Math.max(viaPlating_m, 0) : 0;
    const rInner = Math.max(rOuter - tPlate, 0);
    const aCell = Math.max(viaPitch_m * viaPitch_m, 1e-18);
    const aPlating = viaPlatingEnabled ? Math.max(Math.PI * (rOuter * rOuter - rInner * rInner), 0) : 0;
    const aFill = viaFillEnabled ? Math.PI * rInner * rInner : Math.PI * rOuter * rOuter;
    const f2 = Math.min(aPlating / aCell, 1);
    const f3 = Math.min(aFill / aCell, 1);
    const f1 = Math.max(1 - f2 - f3, 0);
    const k2 = kCu;
    const k3 = viaFillEnabled ? Math.max(kFill, 0) : kAir;
    const kEff = f1 * k1 + f2 * k2 + f3 * k3;
    const compArea = Math.max(compW_m * compL_m, 1e-18);
    const dT = compQ * boardT_m / Math.max(kEff * compArea, 1e-18);
    document.getElementById('dielectricThkDisp').textContent = toMM(tDielectric).toFixed(4) + ' mm (' + toMil(tDielectric).toFixed(2) + ' mil)';
    document.getElementById('k1Disp').textContent = k1.toFixed(3) + ' W/m·K';
    document.getElementById('k2Disp').textContent = k2.toFixed(1) + ' W/m·K';
    document.getElementById('k3Disp').textContent = k3.toFixed(3) + ' W/m·K';
    document.getElementById('f1Disp').textContent = (f1 * 100).toFixed(3) + '%';
    document.getElementById('f2Disp').textContent = (f2 * 100).toFixed(3) + '%';
    document.getElementById('f3Disp').textContent = (f3 * 100).toFixed(3) + '%';
    document.getElementById('kEffDisp').textContent = kEff.toFixed(3) + ' W/m·K';
    document.getElementById('deltaTDisp').textContent = dT.toFixed(3) + ' K';
}
function wireStaticPairs() {
    pairWire('boardT_mm', 'boardT_mil');
    pairWire('viaDrill_mm', 'viaDrill_mil');
    pairWire('viaPlating_mm', 'viaPlating_mil');
    pairWire('viaPitch_mm', 'viaPitch_mil');
    pairWire('compW_mm', 'compW_mil');
    pairWire('compL_mm', 'compL_mil');
}
document.getElementById('incLayers').addEventListener('click', () => {
    let n = parseInt(document.getElementById('layerCount').textContent, 10);
    if (n >= maxLayers) return;
    n += 1;
    document.getElementById('layerCount').textContent = n;
    layerRow(n - 1, 0.0348);
    compute();
});
document.getElementById('decLayers').addEventListener('click', () => {
    let n = parseInt(document.getElementById('layerCount').textContent, 10);
    if (n <= minLayers) return;
    n -= 1;
    document.getElementById('layerCount').textContent = n;
    const row = document.getElementById('layerRow_' + n);
    if (row) row.remove();
    compute();
});
['kDielectric', 'viaPlatingEnabled', 'viaFillEnabled', 'kFill', 'compQ'].forEach(id => {
    document.getElementById(id).addEventListener('input', compute);
});
initLayers(2, 0.0348);
wireStaticPairs();
syncPair(document.getElementById('boardT_mm'), document.getElementById('boardT_mil'), toMeters_mm, toMil);
syncPair(document.getElementById('viaDrill_mm'), document.getElementById('viaDrill_mil'), toMeters_mm, toMil);
syncPair(document.getElementById('viaPlating_mm'), document.getElementById('viaPlating_mil'), toMeters_mm, toMil);
syncPair(document.getElementById('viaPitch_mm'), document.getElementById('viaPitch_mil'), toMeters_mm, toMil);
syncPair(document.getElementById('compW_mm'), document.getElementById('compW_mil'), toMeters_mm, toMil);
syncPair(document.getElementById('compL_mm'), document.getElementById('compL_mil'), toMeters_mm, toMil);
compute();
