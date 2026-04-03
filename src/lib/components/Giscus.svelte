<script lang="ts">
	let container: HTMLDivElement;

	function getTheme() {
		return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
	}

	function sendThemeToGiscus(theme: string) {
		const iframe = container?.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
		if (iframe?.contentWindow) {
			iframe.contentWindow.postMessage(
				{ giscus: { setConfig: { theme } } },
				'https://giscus.app'
			);
		}
	}

	function loadGiscus() {
		const script = document.createElement('script');
		script.src = 'https://giscus.app/client.js';
		script.setAttribute('data-repo', 'jdbrinton/jdbrinton');
		script.setAttribute('data-repo-id', 'R_kgDOHAz7mQ');
		script.setAttribute('data-category', 'General');
		script.setAttribute('data-category-id', 'DIC_kwDOHAz7mc4C58Vl');
		script.setAttribute('data-mapping', 'pathname');
		script.setAttribute('data-strict', '0');
		script.setAttribute('data-reactions-enabled', '1');
		script.setAttribute('data-emit-metadata', '0');
		script.setAttribute('data-input-position', 'top');
		script.setAttribute('data-theme', getTheme());
		script.setAttribute('data-lang', 'en');
		script.setAttribute('crossorigin', 'anonymous');
		script.async = true;
		container.appendChild(script);
	}

	$effect(() => {
		loadGiscus();

		const observer = new MutationObserver(() => {
			sendThemeToGiscus(getTheme());
		});

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class']
		});

		return () => observer.disconnect();
	});
</script>

<div class="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700" bind:this={container}></div>
