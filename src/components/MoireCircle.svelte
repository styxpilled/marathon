<div class="circle-container">
	<div class="circle-lines" />
	<div class="circle-dashes" />
</div>

<style>
	.circle-lines,
	.circle-dashes {
		position: absolute;
		height: 20rem;
		width: 20rem;
		background-color: pink;
		border-radius: 9999px;

		--stripe-size: 2px;
		--space-size: 4px;
	}

	.circle-dashes {
		top: 0;
		left: 0;
		/* background: repeating-radial-gradient(
			var(--bg-color) -1px,
			transparent 0px,
			transparent 5px,
			var(--bg-color) 6px,
			var(--bg-color) 11px
		); */
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
			left: 8rem;
		}
		60% {
			left: 8rem;
		}
		100% {
			left: 0;
		}
	}

	.circle-lines {
		top: 0;
		left: 24rem;

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
			left: 8rem;
			transform: rotate(0deg);
		}
		30% {
			left: 8rem;
			transform: rotate(180deg);
		}
		50% {
			left: 24rem;
			transform: rotate(180deg);
		}
		70% {
			left: 8rem;
			transform: rotate(180deg);
		}
		80% {
			left: 8rem;
			transform: rotate(0deg);
		}
		100% {
			left: 24rem;
			transform: rotate(0deg);
		}
	}
</style>
