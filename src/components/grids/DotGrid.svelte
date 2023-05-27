<script lang="ts">
	import { inn } from '$lib/translate';

	export let left: number | null = null;
	export let right: number | null = null;
	export let top: number | null = null;
	export let bottom: number | null = null;
	export let width: number | null = 1;
	export let height = 1;
	export let size = 40;
	export let offset = 0;
	export let background = false;
</script>

<div
	class="dot-grid"
	style:--bg-size="{size}px"
	style:--bg-color={background ? 'var(--bg)' : 'rgba(0, 0, 0, 0)'}
	style:width={width ? width * size + 'px' : `calc(100% - ${size}px)`}
	style:height="{height * size}px"
	style:top={inn(top) ? `${top + offset}px` : null}
	style:left={inn(left) ? `${left + offset}px` : null}
	style:right={inn(right) ? `${right + offset}px` : null}
	style:bottom={inn(bottom) ? `${bottom + offset}px` : null}
/>

<style>
	div {
		position: absolute;
	}

	.dot-grid {
		position: absolute;
		background-size: var(--bg-size) var(--bg-size);
		background-image: radial-gradient(circle, #000000 1px, var(--bg-color) 1px);
		/* background-position: -20px -20px; */
		/* background- */
		/* margin: 1rem 1rem; */
	}
</style>
