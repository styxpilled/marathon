<script lang="ts">
	import MoireCircle from '$comp/MoireCircle.svelte';
</script>

<div class="root">
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
