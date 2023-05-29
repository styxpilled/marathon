<script lang="ts">
	export let size = '22rem';
</script>

<div class="circle-container" style:--size={size}>
	<div class="circle-lines" />
	<div class="circle-dashes" />
</div>

<style>
	.circle-container {
		--padding: calc(var(--size) + var(--size) / 5);
		--midpoint: calc(var(--padding) / 2);

		position: relative;
		height: var(--size);
		width: calc(var(--size) * 2 + var(--size) / 5);
	}

	.circle-lines,
	.circle-dashes {
		position: absolute;
		height: var(--size);
		width: var(--size);
		background-color: pink;
		border-radius: 9999px;

		--stripe-size: 2px;
		--space-size: 4px;
	}

	.circle-dashes {
		top: 0;
		left: 0;
		background: repeating-radial-gradient(
			transparent -1px,
			var(--bg-color) 0px,
			var(--bg-color) calc(var(--stripe-size) - 1px),
			transparent calc(var(--stripe-size)),
			transparent calc(var(--space-size) * 2)
		);
		animation: 3s merge1 ease-in-out infinite;
	}

	@keyframes merge1 {
		40% {
			left: var(--midpoint);
		}
		60% {
			left: var(--midpoint);
		}
		100% {
			left: 0;
		}
	}

	.circle-lines {
		top: 0;
		left: var(--padding);

		background: repeating-linear-gradient(
			transparent -1px,
			var(--bg-color) 0px,
			var(--bg-color) calc(var(--stripe-size) - 1px),
			transparent calc(var(--stripe-size)),
			transparent calc(var(--space-size) * 2)
		);
		animation: 6s merge2 ease-in-out infinite;
	}

	@keyframes merge2 {
		20% {
			left: var(--midpoint);
			transform: rotate(0deg);
		}
		30% {
			left: var(--midpoint);
			transform: rotate(180deg);
		}
		50% {
			left: var(--padding);
			transform: rotate(180deg);
		}
		70% {
			left: var(--midpoint);
			transform: rotate(180deg);
		}
		80% {
			left: var(--midpoint);
			transform: rotate(0deg);
		}
		100% {
			left: var(--padding);
			transform: rotate(0deg);
		}
	}
</style>
