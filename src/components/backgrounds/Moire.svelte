<script lang="ts">
	export let duration = '15s';
</script>

<div style:--duration={duration} class="moire-outter">
	<div class="moire-inner" />
</div>

<style>
	.moire-outter {
		--size: 5px;
		--size-outter: calc(var(--size) * 1.1);
		--size-bg: calc(var(--size) * 3);

		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 1;
		background: var(--bg-color) radial-gradient(var(--bg-color) var(--size-outter), var(--bg) 0)
			center / var(--size-bg) var(--size-bg);
		overflow: hidden;
	}

	.moire-inner {
		position: absolute;
		top: -50vw;
		right: -50vh;
		bottom: -50vw;
		left: -50vh;
		z-index: 1;
		background: transparent radial-gradient(transparent var(--size), var(--bg-color) 0) center /
			var(--size-bg) var(--size-bg);
		animation: var(--duration) rotate infinite ease-in-out;
	}

	@keyframes rotate {
		to {
			transform: rotate(90deg);
		}
	}
</style>
