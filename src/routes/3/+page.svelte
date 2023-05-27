<script lang="ts">
	import Absolute from '$comp/Absolute.svelte';
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
	<div class="moire-outter">
		<div class="moire-inner" />
	</div>
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

	.moire-outter {
		--size: 15px;
		--size-outter: calc(var(--size) * 2);
		--size-bg: calc(var(--size) * 3);

		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 1;
		background: dimgray radial-gradient(var(--bg-color) var(--size-outter), var(--bg) 0) center /
			var(--size-bg) var(--size-bg);
		overflow: hidden;
	}

	.moire-inner {
		position: absolute;
		top: -50vw;
		right: -50vh;
		bottom: -50vw;
		left: -50vh;
		z-index: 1;
		background: transparent radial-gradient(transparent var(--size), var(--bg-color) 0) center /
			var(--size-bg) var(--size-bg);
		animation: 15s rotate infinite ease-in-out;
	}

	@keyframes rotate {
		to {
			transform: rotate(90deg);
		}
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
