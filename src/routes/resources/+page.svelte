<script lang="ts">
	import Giscus from '$lib/components/Giscus.svelte';
</script>

<svelte:head>
	<title>Resources - Joel D. Brinton</title>
</svelte:head>

<div>
	<h1 class="text-3xl font-bold tracking-tight">Free Educational Resources</h1>
	<p class="mt-2 text-gray-600 dark:text-gray-300">
		Explore the various resources available here. Each section provides valuable information and tools.
	</p>

	<div class="mt-8 space-y-4">
		<a
			href="/resources/stern-gerlach"
			class="block rounded-lg border border-gray-200 p-5 no-underline transition-colors hover:border-accent-300 hover:bg-accent-50/50 dark:border-gray-700 dark:hover:border-accent-700 dark:hover:bg-accent-700/10"
		>
			<h2 class="font-display text-lg font-semibold text-gray-900 dark:text-white">
				Stern-Gerlach Simulation
			</h2>
			<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
				Numerical solver for the Stern-Gerlach experiment — a PyTorch-based split-operator
				simulation of quantum spin-dependent wavepacket splitting.
			</p>
		</a>

	</div>
	<Giscus />
</div>
