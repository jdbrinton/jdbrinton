<script lang="ts">
	import SidebarLayout from '$lib/components/SidebarLayout.svelte';

	const items = [
		{ href: '/research', label: 'Overview' },
		{ href: '/research/electric-hypersonic-spaceplane', label: 'Electric Hypersonic Spaceplane' },
		{ href: '/research/skyhook', label: 'Skyhook' },
		{ href: '/research/personal-mri', label: 'Personal MRI Machine' },
		{ href: '/research/optical-lattice-clock', label: 'Optical Lattice Clock' }
	];

	let { children } = $props();
</script>

<SidebarLayout {items}>
	{@render children()}
</SidebarLayout>
