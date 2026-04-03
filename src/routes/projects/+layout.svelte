<script lang="ts">
	import SidebarLayout from '$lib/components/SidebarLayout.svelte';

	const items = [
		{ href: '/projects', label: 'Overview' },
		{ href: '/projects/terminate-logic', label: 'Terminate Logic' },
		{ href: '/projects/bigpine-remote-camera', label: 'Bigpine Remote Camera' },
		{ href: '/projects/shhiii-found-it', label: 'Shhiii Found It' },
		{ href: '/projects/bumper-to-bumper', label: 'Bumper to Bumper' },
		{ href: '/projects/dalibor-display', label: 'Dalibor Display' },
		{ href: '/projects/be-done-with-it-passives', label: 'Be-Done-With-It Passives' }
	];

	let { children } = $props();
</script>

<SidebarLayout {items}>
	{@render children()}
</SidebarLayout>
