<script lang="ts">
	import { inn } from '$lib/translate';

	export let left: number | null = null;
	export let right: number | null = null;
	export let top: number | null = null;
	export let bottom: number | null = null;
</script>

<span
	style:top={inn(top) ? `${top - 3}px` : null}
	style:left={inn(left) ? `${left}px` : null}
	style:right={inn(right) ? `${right}px` : null}
	style:bottom={inn(bottom) ? `${bottom}px` : null}
/>

<style>
	span {
		position: absolute;
		height: calc(0.7rem);
		width: calc(0.7rem);
		/* outline: black 1px solid; */
		border: 1px solid black;
		border-radius: 0.1rem;
	}
</style>
