<script lang="ts">
	import Giscus from '$lib/components/Giscus.svelte';
</script>

<svelte:head>
	<title>Stern-Gerlach Simulation - Resources - Joel D. Brinton</title>
</svelte:head>

<div class="prose prose-gray max-w-none dark:prose-invert">
	<h1>Stern-Gerlach Numerical Simulation</h1>

	<p>
		A numerical solver for the
		<a href="https://en.wikipedia.org/wiki/Stern%E2%80%93Gerlach_experiment">Stern-Gerlach experiment</a>,
		simulating the quantum spin-dependent splitting of an electron wavepacket in an inhomogeneous
		magnetic field.
	</p>

	<figure>
		<img
			src="/assets/stern_gerlach_simulation.gif"
			alt="Animated simulation showing an electron wavepacket splitting into spin-up and spin-down components as it passes through an inhomogeneous magnetic field"
			class="w-full rounded-lg"
		/>
		<figcaption>
			Probability density of a spinor wavepacket propagating through an inhomogeneous magnetic
			field. The wavepacket splits into spin-up and spin-down components along the field gradient
			direction.
		</figcaption>
	</figure>

	<h2>Method</h2>

	<p>
		The simulation uses a split-operator Fourier method to evolve a two-component spinor
		wavefunction on a 200&times;200 spatial grid. A Gaussian wavepacket is initialized in an equal
		superposition of spin-up and spin-down states and propagated through a magnetic field with a
		strong gradient in the transverse direction.
	</p>

	<p>Key simulation parameters:</p>

	<ul>
		<li><strong>Grid:</strong> 200 &times; 200 points at 1 nm resolution</li>
		<li><strong>Time step:</strong> 0.4 fs (2800 total steps)</li>
		<li><strong>Base field:</strong> 1.5 T with a gradient of 8 &times; 10<sup>9</sup> T/m</li>
		<li><strong>Wavepacket spread:</strong> 5 nm (Gaussian &sigma;)</li>
	</ul>

	<p>
		At each time step, the potential energy operator (incorporating the Zeeman interaction via the
		Pauli &sigma;<sub>z</sub> matrix) is applied in position space, and the kinetic energy operator
		is applied in momentum space via FFT. The spin-dependent force from the magnetic field gradient
		causes the two spin components to separate spatially over time — the hallmark of the
		Stern-Gerlach effect.
	</p>

	<h2>Implementation</h2>

	<p>
		The solver is implemented in Python using <strong>PyTorch</strong> for tensor operations and
		<strong>Matplotlib</strong> for visualization. The simulation was generated through a dialog
		with OpenAI's o1 model. The original chat transcript is available
		<a href="/resources/stern-gerlach/o1-chat">here</a>. The code
		can be found on my GitHub repo below.
	</p>

	<div class="not-prose mt-6 flex flex-wrap gap-3">
		<a
			href="https://github.com/jdbrinton/stern-gerlach"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center gap-2 rounded-md bg-accent-600 px-4 py-2 text-sm font-medium text-white no-underline transition-colors hover:bg-accent-700"
		>
			<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
			jdbrinton/stern-gerlach: Stern-Gerlach Simulation
		</a>
	</div>
	<Giscus />
</div>
