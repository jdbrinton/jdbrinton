<script lang="ts">
	import SidebarLayout from '$lib/components/SidebarLayout.svelte';

	const items = [
		{ href: '/resources', label: 'Overview' },
		{ href: '/resources/stern-gerlach', label: 'Stern-Gerlach Simulation' }
	];

	let { children } = $props();
</script>

<SidebarLayout {items}>
	{@render children()}
</SidebarLayout>
