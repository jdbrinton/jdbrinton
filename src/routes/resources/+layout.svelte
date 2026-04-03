<script lang="ts">
	import SidebarLayout from '$lib/components/SidebarLayout.svelte';

	const items = [
		{ href: '/resources', label: 'Overview' },
		{ href: '/resources/page1', label: 'Page 1' },
		{ href: '/resources/page2', label: 'Page 2' }
	];

	let { children } = $props();
</script>

<SidebarLayout {items}>
	{@render children()}
</SidebarLayout>
