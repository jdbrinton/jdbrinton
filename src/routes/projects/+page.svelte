<script lang="ts">
	import Giscus from '$lib/components/Giscus.svelte';
</script>

<svelte:head>
	<title>Projects - Joel D. Brinton</title>
</svelte:head>

<div>
	<h1 class="text-3xl font-bold tracking-tight">Personal Projects</h1>
	<p class="mt-2 text-gray-600 dark:text-gray-300">
		Open-source hardware and software projects spanning embedded systems, PCB design, and signal processing.
	</p>

	<div class="mt-8 space-y-4">
		<a
			href="/projects/terminate-logic"
			class="block rounded-lg border border-gray-200 p-5 no-underline transition-colors hover:border-accent-300 hover:bg-accent-50/50 dark:border-gray-700 dark:hover:border-accent-700 dark:hover:bg-accent-700/10"
		>
			<h2 class="font-display text-lg font-semibold text-gray-900 dark:text-white">Terminate Logic</h2>
			<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
				An adapter PCB to connect SMA cables to the Saleae Logic Analyzer with 50-Ohm termination.
			</p>
		</a>

		<a
			href="/projects/bigpine-remote-camera"
			class="block rounded-lg border border-gray-200 p-5 no-underline transition-colors hover:border-accent-300 hover:bg-accent-50/50 dark:border-gray-700 dark:hover:border-accent-700 dark:hover:bg-accent-700/10"
		>
			<h2 class="font-display text-lg font-semibold text-gray-900 dark:text-white">Bigpine Remote Camera</h2>
			<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
				An embedded STM32F7-based remote camera with cellular uplink, solar power, and 3-year battery life.
			</p>
		</a>

		<a
			href="/projects/shhiii-found-it"
			class="block rounded-lg border border-gray-200 p-5 no-underline transition-colors hover:border-accent-300 hover:bg-accent-50/50 dark:border-gray-700 dark:hover:border-accent-700 dark:hover:bg-accent-700/10"
		>
			<h2 class="font-display text-lg font-semibold text-gray-900 dark:text-white">Shhiii Found It</h2>
			<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
				A MATLAB script for generating a ringtone optimized for multipath environments.
			</p>
		</a>

		<a
			href="/projects/bumper-to-bumper"
			class="block rounded-lg border border-gray-200 p-5 no-underline transition-colors hover:border-accent-300 hover:bg-accent-50/50 dark:border-gray-700 dark:hover:border-accent-700 dark:hover:bg-accent-700/10"
		>
			<h2 class="font-display text-lg font-semibold text-gray-900 dark:text-white">Bumper to Bumper</h2>
			<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
				An LED matrix display and LIDAR for precision garage parking.
			</p>
		</a>

		<a
			href="/projects/dalibor-display"
			class="block rounded-lg border border-gray-200 p-5 no-underline transition-colors hover:border-accent-300 hover:bg-accent-50/50 dark:border-gray-700 dark:hover:border-accent-700 dark:hover:bg-accent-700/10"
		>
			<h2 class="font-display text-lg font-semibold text-gray-900 dark:text-white">Dalibor Display and Dalibor's Docks</h2>
			<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
				A Nixie Tube driver board and code.
			</p>
		</a>

		<a
			href="/projects/be-done-with-it-passives"
			class="block rounded-lg border border-gray-200 p-5 no-underline transition-colors hover:border-accent-300 hover:bg-accent-50/50 dark:border-gray-700 dark:hover:border-accent-700 dark:hover:bg-accent-700/10"
		>
			<h2 class="font-display text-lg font-semibold text-gray-900 dark:text-white">Be-Done-With-It Passives</h2>
			<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
				An IPC-7351B-based Altium footprint library for chip resistors and capacitors, so you never have to mess with passive footprints again.
			</p>
		</a>
	</div>
	<Giscus />
</div>
