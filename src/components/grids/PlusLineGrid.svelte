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
</script>

<div
	style:--bg-size="{size}px"
	style:width={width ? width * size + 6 + 'px' : `calc(100% - ${size}px)`}
	style:height="{height * size + 6}px"
	style:top={inn(top) ? `${top + offset}px` : null}
	style:left={inn(left) ? `${left + offset}px` : null}
	style:right={inn(right) ? `${right + offset}px` : null}
	style:bottom={inn(bottom) ? `${bottom + offset}px` : null}
/>
<span />

<style>
	div {
		--bg: var(--color-accent-1);

		--plus-color: black;
		--plus-padding: calc(var(--bg-size) - 3px);

		--inner-grid-size: calc(var(--bg-size) / 5);
		--inner-grid-color: rgba(0, 0, 0, 0.04);

		--outter-grid-color: rgba(0, 0, 0, 0.2);

		position: absolute;
		background: linear-gradient(-90deg, var(--inner-grid-color) 1px, transparent 1px),
			linear-gradient(var(--inner-grid-color) 1px, transparent 1px),
			linear-gradient(-90deg, var(--outter-grid-color) 1px, transparent 1px),
			linear-gradient(var(--outter-grid-color) 1px, transparent 1px),
			linear-gradient(
				transparent 4px,
				var(--bg) 4px,
				var(--bg) var(--plus-padding),
				transparent var(--plus-padding)
			),
			linear-gradient(-90deg, var(--plus-color) 1px, transparent 1px),
			linear-gradient(
				-90deg,
				transparent 4px,
				var(--bg) 4px,
				var(--bg) var(--plus-padding),
				transparent var(--plus-padding)
			),
			linear-gradient(var(--plus-color) 1px, transparent 1px), transparent;
		background-size: var(--inner-grid-size) var(--inner-grid-size),
			var(--inner-grid-size) var(--inner-grid-size), var(--bg-size) var(--bg-size),
			var(--bg-size) var(--bg-size), var(--bg-size) var(--bg-size), var(--bg-size) var(--bg-size),
			var(--bg-size) var(--bg-size), var(--bg-size) var(--bg-size);

		padding: 5px;
		--bg-pos: calc(-1 * var(--bg-size) + 3px);
		background-position: var(--bg-pos) var(--bg-pos);
	}
</style>
