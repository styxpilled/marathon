<script lang="ts">
	import Absolute from '$comp/Absolute.svelte';
	import Moire from '$comp/backgrounds/Moire.svelte';
	import CornerOutlineGradient from '$comp/containers/CornerOutlineGradient.svelte';
</script>

<div class="root">
	<Absolute top={40} left={100}>
		<span class="mini"><strong>CONNECTION ESTABLISHED</strong></span>
	</Absolute>
	<Absolute top={80} left={20}>
		<CornerOutlineGradient color="white">
			<ul>
				<li>YOU.ARE</li>
				<li>[NOT].WELCOME</li>
				<li>HERE</li>
				<li>IN.THIS</li>
				<li>BODY/WORLD/MOMENT</li>
				<li>AND.BEYOND</li>
				<li>YOU.WILL.FIND</li>
				<li>[CORRUPTION]</li>
				<li>RUN.PLEASE.[RUN]</li>
				<li>ITHTATITHTAWUTHTAW</li>
				<li />
			</ul>
		</CornerOutlineGradient>
	</Absolute>
	<div class="title">
		<h3>SALVATION AWAITS</h3>
		<h1>JERMA985 <span>STREAM MOMENTS</span></h1>
	</div>
	<Moire />
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
		background-color: #10120f;

		--bg: var(--color-accent-1);
		--bg-color: #10120f;
	}

	.title {
		max-width: 72rem;
		z-index: 2;
	}

	.mini {
		font-size: 0.8rem;
	}

	ul {
		font-weight: 500;
	}

	li::before {
		content: '_';
	}

	li::after {
		content: '...';
	}

	span {
		white-space: nowrap;
	}
</style>
