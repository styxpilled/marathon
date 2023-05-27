<script lang="ts">
	import { inn } from '$lib/translate';

	export let left: number | null = null;
	export let right: number | null = null;
	export let top: number | null = null;
	export let bottom: number | null = null;
	export let content: string;
</script>

<span
	style:top={inn(top) ? `${top}px` : null}
	style:left={inn(left) ? `${left}px` : null}
	style:right={inn(right) ? `${right}px` : null}
	style:bottom={inn(bottom) ? `${bottom}px` : null}>{content}</span
>

<style>
	span {
		position: absolute;
		color: black;
		font-family: monospace;
		font-size: 0.55rem;
	}
</style>
