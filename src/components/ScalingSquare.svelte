<script lang="ts">
	export let color = 'white';
</script>

<div style:--color={color}>
	<div>
		<div />
	</div>
</div>

<style>
	div {
		--b: 2px; /* thickness of the border */
		--w: 28px; /* width of border */

		--width: 1rem;
		--height: 1rem;
		--width-scale: 3;
		--height-scale: 3;
		--resize-length: 5s;

		padding: 1rem;
		border: var(--b) solid #0000; /* space for the border */
		--_g: #0000 90deg, var(--color) 0;
		--_p: var(--w) var(--w) border-box no-repeat;
		background: conic-gradient(from 90deg at top var(--b) left var(--b), var(--_g)) 0 0 / var(--_p),
			/* conic-gradient(from 180deg at top var(--b) right var(--b), var(--_g)) 100% 0 / var(--_p), */
				/* conic-gradient(from 0deg at bottom var(--b) left var(--b), var(--_g)) 0 100% / var(--_p), */
				conic-gradient(from -90deg at bottom var(--b) right var(--b), var(--_g)) 100% 100% /
				var(--_p);

		animation: 5s ease-in-out infinite alternate resize;
	}

	@keyframes resize {
		0% {
			padding: var(--height) var(--width);
		}
		100% {
			padding: calc(var(--height) * var(--height-scale)) calc(var(--width) * var(--width-scale));
		}
	}
</style>
