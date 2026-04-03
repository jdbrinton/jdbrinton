<script lang="ts">
	import { page } from '$app/stores';

	let mobileOpen = $state(false);
	let dark = $state(false);

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/resources', label: 'Resources' },
		{ href: '/research', label: 'Research' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/organizations', label: 'Organizations' },
		{ href: '/history', label: 'History' },
		{ href: '/cv', label: 'CV' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/contact', label: 'Contact' }
	];

	function initDark() {
		dark = document.documentElement.classList.contains('dark');
	}

	function toggleDark() {
		dark = !dark;
		document.documentElement.classList.toggle('dark', dark);
		localStorage.setItem('theme', dark ? 'dark' : 'light');
	}

	function isActive(href: string, pathname: string) {
		if (href === '/') return pathname === '/';
		return pathname.startsWith(href);
	}

	$effect(() => {
		initDark();
	});
</script>

<nav class="border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-700 dark:bg-gray-950/80">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<a href="/" class="font-display text-xl font-bold tracking-tight text-gray-900 no-underline dark:text-white">
			Joel D. Brinton
		</a>

		<!-- Desktop links -->
		<div class="hidden items-center gap-1 lg:flex">
			{#each links as link}
				<a
					href={link.href}
					class="rounded-md px-3 py-2 text-sm font-medium no-underline transition-colors
						{isActive(link.href, $page.url.pathname)
						? 'bg-accent-50 text-accent-700 dark:bg-accent-700/20 dark:text-accent-400'
						: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'}"
				>
					{link.label}
				</a>
			{/each}

			<button
				onclick={toggleDark}
				class="ml-2 rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
				aria-label="Toggle dark mode"
			>
				{#if dark}
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
					</svg>
				{:else}
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
					</svg>
				{/if}
			</button>
		</div>

		<!-- Mobile controls -->
		<div class="flex items-center gap-2 lg:hidden">
			<button
				onclick={toggleDark}
				class="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
				aria-label="Toggle dark mode"
			>
				{#if dark}
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
					</svg>
				{:else}
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
					</svg>
				{/if}
			</button>
			<button
				onclick={() => (mobileOpen = !mobileOpen)}
				class="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
				aria-label="Toggle menu"
			>
				{#if mobileOpen}
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div class="border-t border-gray-200 px-6 py-3 lg:hidden dark:border-gray-700">
			{#each links as link}
				<a
					href={link.href}
					onclick={() => (mobileOpen = false)}
					class="block rounded-md px-3 py-2 text-sm font-medium no-underline transition-colors
						{isActive(link.href, $page.url.pathname)
						? 'bg-accent-50 text-accent-700 dark:bg-accent-700/20 dark:text-accent-400'
						: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'}"
				>
					{link.label}
				</a>
			{/each}
		</div>
	{/if}
</nav>
