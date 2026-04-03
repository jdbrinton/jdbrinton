<svelte:head>
	<title>Do Rocks and Feathers Really Fall at the Same Speed? - Joel D. Brinton</title>
	<meta
		name="description"
		content="A deep dive into Newton's Law of Universal Gravitation reveals a surprising result about the classic rock-and-feather thought experiment."
	/>
</svelte:head>

<article class="prose prose-gray max-w-none dark:prose-invert">
	<header class="mb-10">
		<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">
			Do Rocks and Feathers Really Fall at the Same Speed? The Answer May Astonish You.
		</h1>
		<time class="mt-2 block text-sm text-gray-500 dark:text-gray-400">January 18, 2022</time>
	</header>

	<p>
		Recently I've found myself revisiting some of the basics of physics during my longer term goal
		of putting a lid on my understanding of quantum mechanics. I went back to study Newton,
		Lagrange, and Hamilton. And something struck out to me as obvious but unaddressed in pop
		science. The original force equals mass times acceleration (f = m &times; a) equation is
		typically proof by definition that all objects, regardless of mass, fall at the same speed. Why
		wouldn't they? In a gravitational field acceleration is constant and independent of mass. If it
		wasn't then the equation would read something like, f = m &times; a(m). And whether its the
		Royal Institute or Bill Nye the Science Guy no one ever adds qualifications to the proclamation
		that feathers and rocks fall at the same speed in vacuum.
	</p>

	<p>
		However, f = m &times; a is not always appropriate for objects in a gravitational potential. For
		more accuracy you want to use Newton's Law of Universal Gravitation,
	</p>

	<figure class="my-6 flex justify-center">
		<img
			src="/assets/blog/rocks-and-feathers/equation-1.png"
			alt="Newton's gravitational equation f = g"
			class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-600"
		/>
	</figure>

	<p>
		It's nearly the same and indeed substituting the mass and radius of earth results in the
		original f = m &times; a. However, what we typically fail to account for is the removal of mass
		#2 from mass #1. Let me explain. Mass doesn't just appear. If you are performing the rock and
		feather experiment on earth you're removing those rocks and feathers from mass #1 and assigning
		them to mass #2. Conversely, if your rocks and feathers came from planet Vulcan then you're
		creating mass #2 from scratch. Are you bringing the rock, performing the test, and then
		returning the rock? Or are you bringing the rock and the feather at the same time? The list of
		experiments gets quite long.
	</p>

	<p>
		Lets say for simplicity that you're not getting anything from planet Vulcan. All your materials
		for the rock and feather experiment are coming from earth. This leaves two different classes of
		experiment. Experiment class #1 where you lift the feather first, for example, run your drop
		test, and then lift the rock and run your drop test. Experiment class #2 involves lifting the
		rock and feather at the same time.
	</p>

	<figure class="my-6 flex justify-center">
		<img
			src="/assets/blog/rocks-and-feathers/equation-2.png"
			alt="Experiment classes diagram"
			class="max-w-sm rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-600"
		/>
	</figure>

	<p>
		To the astute, you may notice that these are not actually the same type of experiment. The
		first one takes place in two parts. Part A is a feather drop test and mass #1 contains the
		earth and the rock. Part B is a rock drop test and mass #1 contains the earth and a feather.
		Experiment class #2 isn't even a two body problem any more. Now you have three bodies
		free-falling in vacuum. We'll come back to that later because it involves some trigonometry.
	</p>

	<figure class="my-6 flex justify-center">
		<img
			src="/assets/blog/rocks-and-feathers/equation-3.png"
			alt="Two-body problem equations for experiment class 1"
			class="max-w-sm rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-600"
		/>
	</figure>

	<p>
		In the simplest case of experiment class #1 and the sequential drop tests we see that mass #1
		differs between tests which results in a different acceleration for the rock and the feather
		meaning that <em>they do not fall at the same speed</em>. So, lets run the numbers and see just
		how different it actually is.
	</p>

	<figure class="my-6 flex justify-center">
		<img
			src="/assets/blog/rocks-and-feathers/equation-4.png"
			alt="Acceleration comparison equation"
			class="max-w-[171px] rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-600"
		/>
	</figure>

	<figure class="my-6 flex justify-center">
		<img
			src="/assets/blog/rocks-and-feathers/equation-5.png"
			alt="Numerical values for drop test parameters"
			class="max-w-sm rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-600"
		/>
	</figure>

	<p>
		Using reasonable values for the earth, the rock, and the feather we calculate the time to fall
		10 meters above the surface of earth (6,378.1 kilometers radius). Most calculators won't handle
		this equation because there's not enough significant digits. However, Matlab contains a feature
		called Variable Precision Arithmetic (VPA) which allows for arbitrary precision. With our new
		tool we find that the rock and feather fall at different speeds, in fact about 0.12
		yoctoseconds different. But, what is absolutely mind blowing is that the feather actually falls
		faster!
	</p>

	<figure class="my-6 flex justify-center">
		<img
			src="/assets/blog/rocks-and-feathers/equation-6.png"
			alt="VPA calculation results showing feather falls faster"
			class="max-w-[234px] rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-600"
		/>
	</figure>

	<p>
		It's such a non intuitive result that it takes a second look to believe it. But indeed the
		feather drops faster than the rock because it is also being attracted by the rock.
	</p>

	<p>
		So, you might say, well that's not fair, the experiment always assumed that the rock and
		feather would fall at the same time. Goodie. Lets take a look.
	</p>

	<p>
		If both the rock and the feather are dropped at the same time then they cannot be dropped in
		the same position. By necessity they'll be dropped at different positions on planet earth. If
		somehow they could be dropped at the same position then yes, they would fall at the same speed.
		But, because they are not dropped at the same position this is now a three-body problem instead
		of a two. If the rock feather interaction was orthogonal to the gravity vector then the rock and
		feather would fall at the same speed. Indeed it may seem like if the rock and feather are
		dropped on opposite sides of a table that the rock feather interaction is perfectly orthogonal
		to the earths gravitational vector. But that is not the case. The gravitational vector points
		towards the center of earth and at different points on the table there is a measurable angle
		between the gravity vectors. So, the feather is being pulled to the ground not just by the mass
		of the earth but also by downward component of the rocks gravitational attraction. Once again,
		the feather beats the rock to the ground.
	</p>

	<figure class="my-6 flex justify-center">
		<img
			src="/assets/blog/rocks-and-feathers/experiments.png"
			alt="Summary of rock and feather experiments showing the feather always wins"
			class="max-w-md rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-600"
		/>
	</figure>
</article>
