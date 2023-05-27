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
>
	+
</span>

<style>
	span {
		position: absolute;
		color: black;
		height: 0.7rem;
		width: 0.7rem;
		text-align: center;
		font-size: 0.5rem;
		background-color: #c3195d;
		border-radius: 0.1rem;
	}
</style>
