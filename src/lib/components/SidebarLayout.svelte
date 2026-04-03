<script lang="ts">
	import { page } from '$app/stores';
	import type { Snippet } from 'svelte';

	interface NavItem {
		href: string;
		label: string;
		subtitle?: string;
	}

	let { items, children }: { items: NavItem[]; children: Snippet } = $props();
</script>

<div class="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row">
	<aside class="w-full shrink-0 md:w-56">
		<nav class="sticky top-24 flex flex-row gap-1 overflow-x-auto md:flex-col md:overflow-x-visible">
			{#each items as item}
				<a
					href={item.href}
					class="whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium no-underline transition-colors md:whitespace-normal
						{$page.url.pathname === item.href
						? 'bg-accent-50 text-accent-700 dark:bg-accent-700/20 dark:text-accent-400'
						: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'}"
				>
					{item.label}
					{#if item.subtitle}
						<span class="mt-0.5 block text-xs font-normal text-gray-400 dark:text-gray-500">{item.subtitle}</span>
					{/if}
				</a>
			{/each}
		</nav>
	</aside>

	<main class="min-w-0 flex-1">
		{@render children()}
	</main>
</div>
