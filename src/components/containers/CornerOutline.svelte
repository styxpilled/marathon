<script lang="ts">
	export let topLeft = true;
	export let topRight = true;
	export let bottomLeft = true;
	export let bottomRight = true;
</script>

<div class="root">
	{#if topLeft}
		<div class="corner top left" />
	{/if}
	{#if topRight}
		<div class="corner top right" />
	{/if}
	{#if bottomLeft}
		<div class="corner bottom left" />
	{/if}
	{#if bottomRight}
		<div class="corner bottom right" />
	{/if}
</div>

<style>
	.root {
		position: relative;
		width: 10rem;
		height: 10rem;

		--color: red;
		--width: 2px;
		--style: solid;

		animation: 3s ease-in-out infinite alternate resize;
	}

	@keyframes resize {
		0% {
			width: 5rem;
			height: 5rem;
		}
		100% {
			width: 15rem;
			height: 15rem;
		}
	}

	.corner {
		position: absolute;
		width: 2rem;
		height: 2rem;
	}

	.top {
		border-top: var(--width) var(--style) var(--color);
		top: 0;
	}

	.bottom {
		border-bottom: var(--width) var(--style) var(--color);
		bottom: 0;
	}

	.left {
		border-left: var(--width) var(--style) var(--color);
		left: 0;
	}

	.right {
		border-right: var(--width) var(--style) var(--color);
		right: 0;
	}
</style>
