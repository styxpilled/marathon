<script lang="ts">
	export let topLeft = false;
	export let topRight = false;
	export let bottomLeft = false;
	export let bottomRight = false;
</script>

<div>
	{#if topLeft}
		<div />
	{/if}
</div>

<style>
	div {
	}
</style>
