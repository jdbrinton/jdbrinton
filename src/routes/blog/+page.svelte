<script lang="ts">
	import Giscus from '$lib/components/Giscus.svelte';
</script>

<svelte:head>
	<title>Blog - Joel D. Brinton</title>
</svelte:head>

<h1 class="text-3xl font-bold tracking-tight">Blog</h1>
<p class="mt-4 text-gray-600 dark:text-gray-300">Personal writings on physics, engineering, and other topics of interest.</p>

<div class="mt-10 space-y-6">
	<a
		href="/blog/rocks-and-feathers"
		class="block rounded-lg border border-gray-200 p-6 no-underline transition-colors hover:border-accent-300 hover:bg-accent-50/50 dark:border-gray-700 dark:hover:border-accent-700 dark:hover:bg-accent-700/10"
	>
		<time class="text-sm text-gray-500 dark:text-gray-400">January 18, 2022</time>
		<h2 class="mt-1 font-display text-xl font-semibold text-gray-900 dark:text-white">
			Do Rocks and Feathers Really Fall at the Same Speed? The Answer May Astonish You.
		</h2>
		<p class="mt-2 text-gray-600 dark:text-gray-300">
			A deep dive into Newton's Law of Universal Gravitation reveals a surprising result about
			the classic rock-and-feather thought experiment.
		</p>
	</a>
	<Giscus />
</div>
