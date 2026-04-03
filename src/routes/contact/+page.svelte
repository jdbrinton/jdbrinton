<script lang="ts">
	let email = $state('');
	let message = $state('');
	let sending = $state(false);

	let showEmailDialog = $state(false);
	let num1 = $state(0);
	let num2 = $state(0);
	let userAnswer = $state('');
	let emailRevealed = $state(false);

	let showFooledDialog = $state(false);

	const socialLinks = [
		{ icon: '/assets/LinkedIn_icon.svg', name: 'LinkedIn', href: 'https://www.linkedin.com/in/joeldbrinton/', description: 'Connect with me professionally', invert: true },
		{ icon: '/assets/Octicons-mark-github.svg', name: 'GitHub', href: 'https://github.com/jdbrinton', description: 'Code and design contributions', invert: true },
		{ icon: '/assets/YouTube_full-color_icon_(2017).svg', name: 'YouTube', href: 'https://www.youtube.com/@jdbrinton', description: 'Watch my videos and tutorials', invert: false },
		{ icon: '/assets/bluesky-logo.svg', name: 'Bluesky', href: 'https://bsky.app/profile/jdbrinton.com', description: 'Follow me on Bluesky', invert: false },
		{ icon: '/assets/threads-logo.svg', name: 'Threads', href: 'https://threads.com/@jdbrintonforever', description: 'Follow me on Threads', invert: true },
		{ icon: '/assets/instagram-logo.svg', name: 'Instagram', href: 'https://www.instagram.com/jdbrintonforever/', description: 'Follow me on Instagram', invert: false },
		{ icon: '/assets/X_logo_2023.svg', name: 'X', href: 'https://x.com/jdbrinton', description: 'Check out my latest thoughts', invert: true },
		{ icon: '/assets/Facebook_icon_2013.svg', name: 'Facebook', href: 'https://www.facebook.com/jdbrinton', description: 'I only connect with well known friends and family here', invert: true }
	];

	function generateProblem() {
		num1 = Math.floor(Math.random() * 10) + 1;
		num2 = Math.floor(Math.random() * 10) + 1;
		userAnswer = '';
		emailRevealed = false;
	}

	function openEmailDialog() {
		generateProblem();
		showEmailDialog = true;
	}

	function checkAnswer() {
		if (parseInt(userAnswer) === num1 + num2) {
			emailRevealed = true;
		} else {
			alert('Incorrect answer. Please try again.');
			userAnswer = '';
		}
	}

	async function onSubmit() {
		sending = true;
		try {
		const res = await fetch('https://formsubmit.co/ajax/38ad368e7f71487ace35babfa83608d2', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify({ email, message })
		});
			if (res.ok) {
				alert('Your message has been sent successfully!');
				email = '';
				message = '';
			} else {
				alert('There was an error sending your message. Please try again later.');
			}
		} catch {
			alert('There was an error sending your message. Please try again later.');
		} finally {
			sending = false;
		}
	}
</script>

<svelte:head>
	<title>Contact - Joel D. Brinton</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-6 py-16">
	<h1 class="text-3xl font-bold tracking-tight">Other Pages and Contacts</h1>

	<div class="mt-10 space-y-4">
		{#each socialLinks as link}
			<a
				href={link.href}
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-start gap-4 rounded-lg border border-gray-200 p-6 no-underline transition-colors hover:border-accent-300 hover:bg-accent-50/50 dark:border-gray-700 dark:hover:border-accent-700 dark:hover:bg-accent-700/10"
			>
				<img src={link.icon} alt={link.name} class="h-10 w-10 shrink-0 {link.invert ? 'dark:invert' : ''}" />
				<div>
					<h2 class="font-display text-lg font-semibold text-gray-900 dark:text-white">{link.name}</h2>
					<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">{link.description}</p>
				</div>
			</a>
		{/each}

		<!-- Contact Form -->
		<div class="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
			<div class="flex items-start gap-4">
				<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-100 dark:bg-accent-700/30">
					<svg class="h-5 w-5 text-accent-600 dark:text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
					</svg>
				</div>
				<div class="flex-1">
					<h2 class="font-display text-lg font-semibold">Contact Form</h2>
					<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
						Your most likely success at reaching me is to use this contact form because it has the most
						sophisticated spam filter.
					</p>
					<form onsubmit={(e) => { e.preventDefault(); onSubmit(); }} class="mt-4 space-y-4">
						<div>
							<label for="contact-email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Your email</label>
							<input
								id="contact-email"
								type="email"
								bind:value={email}
								required
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white sm:text-sm"
							/>
						</div>
						<div>
							<label for="contact-message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Your message</label>
							<textarea
								id="contact-message"
								bind:value={message}
								rows="4"
								required
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white sm:text-sm"
							></textarea>
						</div>
						<button
							type="submit"
							disabled={sending || !email || !message}
							class="rounded-md bg-accent-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-700 disabled:opacity-50"
						>
							{sending ? 'Sending...' : 'Send'}
						</button>
					</form>
				</div>
			</div>
		</div>

		<!-- Email (with math puzzle) -->
		<button
			onclick={openEmailDialog}
			class="flex w-full items-start gap-4 rounded-lg border border-gray-200 p-6 text-left transition-colors hover:border-accent-300 hover:bg-accent-50/50 dark:border-gray-700 dark:hover:border-accent-700 dark:hover:bg-accent-700/10"
		>
			<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-100 dark:bg-accent-700/30">
				<svg class="h-5 w-5 text-accent-600 dark:text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
				</svg>
			</div>
			<div>
				<h2 class="font-display text-lg font-semibold">Email</h2>
				<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">Get in touch via email</p>
			</div>
		</button>

		<!-- OnlyFans joke -->
		<button
			onclick={() => (showFooledDialog = true)}
			class="flex w-full items-start gap-4 rounded-lg border border-gray-200 p-6 text-left transition-colors hover:border-accent-300 hover:bg-accent-50/50 dark:border-gray-700 dark:hover:border-accent-700 dark:hover:bg-accent-700/10"
		>
			<img src="/assets/of.svg" alt="OnlyFans" class="h-10 w-10 shrink-0 rounded-lg" />
			<div>
				<h2 class="font-display text-lg font-semibold">OnlyFans</h2>
				<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">Exclusive content for fans</p>
			</div>
		</button>
	</div>
</div>

<!-- Email Dialog -->
{#if showEmailDialog}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		onkeydown={(e) => { if (e.key === 'Escape') showEmailDialog = false; }}
	>
		<div class="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900">
			<div class="flex items-center gap-3">
				<span class="text-lg">{`What is ${num1} + ${num2}?`}</span>
				<input
					type="number"
					bind:value={userAnswer}
					class="w-24 rounded-md border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
					placeholder="Answer"
				/>
			</div>
			<div class="mt-4 h-10">
				{#if emailRevealed}
					<a href="mailto:jdbrinton@jdbrinton.com" class="text-lg font-medium">
						jdbrinton@jdbrinton.com
					</a>
				{/if}
			</div>
			<div class="mt-4 flex justify-end gap-3">
				<button
					onclick={checkAnswer}
					class="rounded-md bg-accent-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-700"
				>
					Submit
				</button>
				<button
					onclick={() => (showEmailDialog = false)}
					class="rounded-md px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
				>
					Close
				</button>
			</div>
		</div>
	</div>
{/if}

<!-- Fooled You Dialog -->
{#if showFooledDialog}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		onkeydown={(e) => { if (e.key === 'Escape') showFooledDialog = false; }}
	>
		<div class="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900">
			<h2 class="font-display text-2xl font-bold">HAHA!</h2>
			<p class="mt-3 text-gray-600 dark:text-gray-300">
				Got you to click on it! I don't have an OnlyFans page!
			</p>
			<div class="mt-4 flex justify-end">
				<button
					onclick={() => (showFooledDialog = false)}
					class="rounded-md px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
				>
					Close
				</button>
			</div>
		</div>
	</div>
{/if}
