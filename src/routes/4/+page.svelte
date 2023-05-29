<script lang="ts">
	import BlockTransition from '$comp/BlockTransition.svelte';
	import MoireCircle from '$comp/MoireCircle.svelte';
	import ScalingSquare from '$comp/ScalingSquare.svelte';
	import CornerOutline from '$comp/containers/CornerOutline.svelte';
</script>

<div class="root">
	<!-- <BlockTransition backgrondColor="var(--color-accent-2)" foregroundColor="white" /> -->
	<!-- <CornerOutline /> -->
	<!-- <ScalingSquare /> -->
	<MoireCircle />
	<!-- <div class="title">
		<h3>SALVATION AWAITS</h3>
		<h1>JERMA985 <span>STREAM MOMENTS</span></h1>
	</div> -->
</div>

<style>
	.root {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100%;
		min-height: 100vh;
		width: 100%;
		color: white;
		background-color: var(--color-accent-2);
		overflow: hidden;

		--bg: var(--color-accent-1);
		--bg-color: white;
	}

	.title {
		max-width: 72rem;
		z-index: 2;
	}

	span {
		white-space: nowrap;
	}
</style>
