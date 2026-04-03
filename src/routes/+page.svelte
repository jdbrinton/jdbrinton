<svelte:head>
	<title>Joel D. Brinton</title>
	<meta name="description" content="Personal website of Joel D. Brinton — physicist, engineer, and technologist." />
</svelte:head>

<div class="mx-auto max-w-4xl px-6 py-16">
	<!-- Hero / Bio -->
	<section class="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
		<img
			src="/assets/joel_2023_sm.jpg"
			alt="Joel D. Brinton"
			class="h-32 w-32 shrink-0 rounded-full object-cover"
		/>
		<div>
			<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Welcome to my personal website</h1>
			<p class="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
				I am a physicist and engineer motivated by the pursuit of knowledge and the desire to create new cool
				technologies. I am passionate about exploring the frontiers of science and engineering, and I am always
				looking for new opportunities to collaborate with others who share my interests.
			</p>
		</div>
	</section>

	<hr class="my-16 border-gray-200 dark:border-gray-700" />

	<!-- Site Organization -->
	<section>
		<h2 class="text-2xl font-bold tracking-tight">Site Organization</h2>
		<p class="mt-2 text-gray-600 dark:text-gray-300">
			This website is a journey through my intellectual and professional landscape. Here's how it's organized:
		</p>

		<div class="mt-10 flex flex-col items-center gap-2">
			<a href="/resources" class="block w-full max-w-lg rounded-lg border border-gray-200 p-5 no-underline transition-colors hover:border-accent-300 hover:bg-accent-50/50 dark:border-gray-700 dark:hover:border-accent-700 dark:hover:bg-accent-700/10">
				<h3 class="flex items-center gap-2 font-display text-lg font-semibold text-gray-900 dark:text-white">
					<span class="material-symbols-outlined text-accent-500">school</span>
					Resources
				</h3>
				<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">Free educational materials in electrical engineering, physics, machine learning, and aerospace.</p>
			</a>

			<div class="flex flex-col items-center text-sm text-gray-400 dark:text-gray-500">
				<span>Sparks into</span>
				<svg class="mt-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
			</div>

			<a href="/research" class="block w-full max-w-lg rounded-lg border border-gray-200 p-5 no-underline transition-colors hover:border-accent-300 hover:bg-accent-50/50 dark:border-gray-700 dark:hover:border-accent-700 dark:hover:bg-accent-700/10">
				<h3 class="flex items-center gap-2 font-display text-lg font-semibold text-gray-900 dark:text-white">
					<span class="material-symbols-outlined text-accent-500">science</span>
					Research
				</h3>
				<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">My latest ideas and ongoing investigations in various fields of interest.</p>
			</a>

			<div class="flex flex-col items-center text-sm text-gray-400 dark:text-gray-500">
				<span>Evolves into</span>
				<svg class="mt-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
			</div>

			<a href="/projects" class="block w-full max-w-lg rounded-lg border border-gray-200 p-5 no-underline transition-colors hover:border-accent-300 hover:bg-accent-50/50 dark:border-gray-700 dark:hover:border-accent-700 dark:hover:bg-accent-700/10">
				<h3 class="flex items-center gap-2 font-display text-lg font-semibold text-gray-900 dark:text-white">
					<span class="material-symbols-outlined text-accent-500">build</span>
					Projects
				</h3>
				<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">When research evolves into concrete work, you'll find it here.</p>
			</a>

			<div class="flex flex-col items-center text-sm text-gray-400 dark:text-gray-500">
				<span>Grows into</span>
				<svg class="mt-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
			</div>

			<a href="/organizations" class="block w-full max-w-lg rounded-lg border border-gray-200 p-5 no-underline transition-colors hover:border-accent-300 hover:bg-accent-50/50 dark:border-gray-700 dark:hover:border-accent-700 dark:hover:bg-accent-700/10">
				<h3 class="flex items-center gap-2 font-display text-lg font-semibold text-gray-900 dark:text-white">
					<span class="material-symbols-outlined text-accent-500">groups</span>
					Organizations
				</h3>
				<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">Projects that have grown into full-fledged organizations.</p>
			</a>
		</div>

		<div class="mt-10 grid gap-4 sm:grid-cols-2">
			<a href="/cv" class="block rounded-lg border border-gray-200 p-5 no-underline transition-colors hover:border-accent-300 hover:bg-accent-50/50 dark:border-gray-700 dark:hover:border-accent-700 dark:hover:bg-accent-700/10">
				<h3 class="flex items-center gap-2 font-display text-lg font-semibold text-gray-900 dark:text-white">
					<span class="material-symbols-outlined text-accent-500">description</span>
					CV
				</h3>
				<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">My formal curriculum vitae, detailing my professional background.</p>
			</a>
			<a href="/history" class="block rounded-lg border border-gray-200 p-5 no-underline transition-colors hover:border-accent-300 hover:bg-accent-50/50 dark:border-gray-700 dark:hover:border-accent-700 dark:hover:bg-accent-700/10">
				<h3 class="flex items-center gap-2 font-display text-lg font-semibold text-gray-900 dark:text-white">
					<span class="material-symbols-outlined text-accent-500">history</span>
					History
				</h3>
				<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">My personal journey, including flying, climbing, and conference experiences.</p>
			</a>
		</div>

		<div class="my-4 flex flex-col items-center text-sm text-gray-400 dark:text-gray-500">
			<span>More info</span>
			<svg class="mt-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
		</div>

		<div class="grid gap-4 sm:grid-cols-2">
			<a href="/blog" class="block rounded-lg border border-gray-200 p-5 no-underline transition-colors hover:border-accent-300 hover:bg-accent-50/50 dark:border-gray-700 dark:hover:border-accent-700 dark:hover:bg-accent-700/10">
				<h3 class="flex items-center gap-2 font-display text-lg font-semibold text-gray-900 dark:text-white">
					<span class="material-symbols-outlined text-accent-500">rss_feed</span>
					Blog
				</h3>
				<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">Personal writings.</p>
			</a>
			<a href="/contact" class="block rounded-lg border border-gray-200 p-5 no-underline transition-colors hover:border-accent-300 hover:bg-accent-50/50 dark:border-gray-700 dark:hover:border-accent-700 dark:hover:bg-accent-700/10">
				<h3 class="flex items-center gap-2 font-display text-lg font-semibold text-gray-900 dark:text-white">
					<span class="material-symbols-outlined text-accent-500">contact_mail</span>
					Contact
				</h3>
				<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">Get in touch with me for collaborations, questions, or discussions.</p>
			</a>
		</div>
	</section>

	<hr class="my-16 border-gray-200 dark:border-gray-700" />

	<!-- Topics of Interest -->
	<section>
		<h2 class="text-2xl font-bold tracking-tight">Topics of Interest</h2>
		<div class="mt-6 grid gap-6 sm:grid-cols-2">
			{#each ['Physics', 'Electrical Engineering', 'Aerospace', 'Machine Learning', 'Biology'] as topic}
				<div class="rounded-lg border border-gray-200 p-5 dark:border-gray-700">
					<h3 class="font-display text-lg font-semibold">{topic}</h3>
					<p class="mt-1 text-sm text-gray-500 italic dark:text-gray-400">Coming soon</p>
				</div>
			{/each}
		</div>
	</section>

	<hr class="my-16 border-gray-200 dark:border-gray-700" />

	<!-- Guiding Philosophy -->
	<section>
		<h2 class="text-2xl font-bold tracking-tight">Guiding Philosophy</h2>
		<div class="mt-6 space-y-6">
			<div>
				<h3 class="font-display text-lg font-semibold">Do Cool Things</h3>
				<p class="mt-1 text-gray-600 dark:text-gray-300">You only have one life. Run it as well as you can.</p>
			</div>
			<div>
				<h3 class="font-display text-lg font-semibold">Compassionate Capitalism</h3>
				<p class="mt-1 text-gray-600 dark:text-gray-300">Capitalism is the worst system of economics except for all the others.</p>
			</div>
			<div>
				<h3 class="font-display text-lg font-semibold">Commitment to Learning</h3>
				<p class="mt-1 text-gray-600 dark:text-gray-300">Its the only sure way to make a difference in the world.</p>
			</div>
			<div>
				<h3 class="font-display text-lg font-semibold">Learn Quantum Physics I</h3>
				<p class="mt-1 text-gray-600 dark:text-gray-300">
					No matter how long it takes, complete the prerequisites and learn Quantum Physics I. But don't just
					pass the test. Try to figure out what's going on. Once you understand basic quantum mechanics, all
					gods go away.
				</p>
				<a
					href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/"
					target="_blank"
					rel="noopener noreferrer"
					class="mt-2 inline-block text-sm font-medium"
				>
					MIT OpenCourseWare &mdash; Quantum Physics I &rarr;
				</a>
			</div>
		</div>
	</section>

	<hr class="my-16 border-gray-200 dark:border-gray-700" />

	<!-- Book and Show List -->
	<section>
		<h2 class="text-2xl font-bold tracking-tight">Book and Show List</h2>
		<div class="mt-6 rounded-lg border border-gray-200 p-5 dark:border-gray-700">
			<h3 class="font-display text-lg font-semibold">Book 1</h3>
			<p class="mt-1 text-sm text-gray-500 italic dark:text-gray-400">description</p>
		</div>
	</section>

	<hr class="my-16 border-gray-200 dark:border-gray-700" />

	<!-- Investing -->
	<section>
		<h2 class="text-2xl font-bold tracking-tight">Investing</h2>
		<p class="mt-2 text-gray-600 dark:text-gray-300">
			I infrequently make small seed investments in startups involving my interest areas.
		</p>
		<div class="mt-6 rounded-lg border border-gray-200 p-5 dark:border-gray-700">
			<h3 class="font-display text-lg font-semibold">Investment 1</h3>
			<p class="mt-1 text-sm text-gray-500 italic dark:text-gray-400">description</p>
		</div>
	</section>
</div>
