<script lang="ts">
	import SidebarLayout from '$lib/components/SidebarLayout.svelte';

	const items = [
		{ href: '/blog', label: 'All Posts' },
		{ href: '/blog/rocks-and-feathers', label: 'Do Rocks and Feathers Really Fall at the Same Speed?', subtitle: 'Jan 18, 2022' }
	];

	let { children } = $props();
</script>

<SidebarLayout {items}>
	{@render children()}
</SidebarLayout>
