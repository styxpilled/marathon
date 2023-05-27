<script lang="ts">
	export let color = 'black';
</script>

<div style:--color={color}>
	<slot />
</div>

<style>
	div {
		--b: 2px; /* thickness of the border */
		--w: 28px; /* width of border */

		padding: 1rem;
		border: var(--b) solid #0000; /* space for the border */
		--_g: #0000 90deg, var(--color) 0;
		--_p: var(--w) var(--w) border-box no-repeat;
		background: conic-gradient(from 90deg at top var(--b) left var(--b), var(--_g)) 0 0 / var(--_p),
			conic-gradient(from 180deg at top var(--b) right var(--b), var(--_g)) 100% 0 / var(--_p),
			conic-gradient(from 0deg at bottom var(--b) left var(--b), var(--_g)) 0 100% / var(--_p),
			conic-gradient(from -90deg at bottom var(--b) right var(--b), var(--_g)) 100% 100% / var(--_p);
	}
</style>
