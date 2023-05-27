<script lang="ts">
	import { inn } from '$lib/translate';

	export let left: number | null = null;
	export let right: number | null = null;
	export let top: number | null = null;
	export let bottom: number | null = null;
	export let width: number | null = 1;
	export let background: string | null = null;
</script>

<div
	style:top={inn(top) ? `${top}px` : null}
	style:left={inn(left) ? `${left}px` : null}
	style:right={inn(right) ? `${right}px` : null}
	style:bottom={inn(bottom) ? `${bottom}px` : null}
	style:background-color={inn(background) ? background : null}
>
	<slot />
</div>

<style>
	div {
		position: absolute;
		z-index: 2;
	}
</style>
