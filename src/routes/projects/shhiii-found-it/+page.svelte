<svelte:head>
	<title>Shhiii Found It - Projects - Joel D. Brinton</title>
</svelte:head>

<div>
	<h1 class="text-3xl font-bold tracking-tight">Shhiii Found It</h1>
	<p class="mt-4 text-gray-600 dark:text-gray-300">
		A MATLAB m-script for generating a ringtone .wav file optimized for notification potential and
		location in multipath environments.
	</p>
	<p class="mt-2 text-gray-600 dark:text-gray-300">Motivated by this video:</p>
	<div class="mt-4 aspect-video w-full max-w-lg overflow-hidden rounded-lg">
		<iframe
			src="https://www.youtube.com/embed/fa28lIGuxq8"
			title="Shhiii Found It motivation video"
			class="h-full w-full"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
	<div class="mt-6 flex flex-wrap items-center gap-3">
		<a
			href="https://github.com/jdbrinton/shhiii-found-it"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center gap-2 rounded-md bg-accent-600 px-4 py-2 text-sm font-medium text-white no-underline transition-colors hover:bg-accent-700"
		>
			<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
			View on GitHub
		</a>
		<audio controls class="h-10">
			<source src="/assets/shhiii-found-it-ringtone.wav" type="audio/wav" />
			Your browser does not support the audio element.
		</audio>
	</div>
</div>
