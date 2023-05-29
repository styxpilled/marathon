<script lang="ts">
	export let foregroundColor = 'white';
	export let backgrondColor = 'black';

	export let main: [string, string] = ['main first line', 'main second line'];
	export let alt: [string, string] = ['alt first line', 'alt second line'];
</script>

<div class="root" style:--fg-color={foregroundColor} style:--bg-color={backgrondColor}>
	<div class="bg" />
	<h2 class="main">
		<span class="first top">{main[0]}</span>
		<span class="second">{main[1]}</span>
	</h2>
	<h2 class="alt">
		<span class="first">{alt[0]}</span>
		<span class="second bottom">{alt[1]}</span>
	</h2>
</div>

<style>
	.root {
		--main-clip: inset(0);
		--alt-clip: inset(0 0 3rem 0);
		--transform: 0;
		--duration: 1000ms;

		display: grid;
		color: var(--fg-color);
	}

	h2 {
		grid-column: 1;
		grid-row: 1;
		font-size: 2rem;
		line-height: 2rem;
	}

	span {
		display: block;
		padding: 0.55rem;
	}

	.bg {
		grid-column: 1;
		grid-row: 1;
		height: 3rem;
		background-color: var(--fg-color);
		transform: translateY(var(--transform));
		transition: transform var(--duration);
	}

	.top,
	.bottom {
		color: var(--bg-color);
	}

	.first,
	.second {
		transition: clip-path calc(var(--duration) / 2.6666666667) calc(var(--duration) / 5.3);
	}

	.main > .first,
	.main > .second {
		clip-path: var(--main-clip);
	}

	.alt > .first,
	.alt > .second {
		clip-path: var(--alt-clip);
	}

	.root:hover {
		--main-clip: inset(3rem 0 0 0);
		--alt-clip: inset(0);
		--transform: 3rem;
	}
</style>
