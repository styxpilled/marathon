<div class="root">
	<div class="stripes">
		<span>ISSUE #0045</span>
		<div class="stripes-bg" />
	</div>
	<div class="triangles" />
	<div class="title">
		<h3>SALVATION AWAITS</h3>
		<h1>JERMA985 <span>STREAM MOMENTS</span></h1>
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
		background-size: 100% 100%;
		background-position: 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
		background-image: radial-gradient(75% 75% at 60% 75%, #0092ff66 0%, #073aff00 100%),
			radial-gradient(49% 81% at 45% 47%, #ff00fa45 0%, #073aff00 100%),
			linear-gradient(46deg, #ff0017c9 1%, #ff000000 99%),
			radial-gradient(142% 91% at 83% 7%, #ff0097fc 1%, #ff000000 99%),
			radial-gradient(142% 91% at -6% 74%, #6e00ffff 1%, #1308ff00 99%),
			radial-gradient(142% 91% at 111% 84%, #00a5ffff 55%, #6600ffff 100%);
		overflow: hidden;

		--bg: var(--color-accent-1);
		--bg-color: white;
	}

	.title {
		max-width: 72rem;
		z-index: 2;
	}

	.triangles {
		position: absolute;
		bottom: 20px;
		right: 20px;

		background: linear-gradient(
			-45deg,
			transparent 0,
			transparent 50%,
			var(--bg-color) 50%,
			var(--bg-color) 100%
		);
		background-size: 48px 48px;
		height: calc(48px * 3);
		width: calc(48px * 7);
	}

	.stripes {
		position: absolute;
		top: 40px;
		left: 20px;
	}

	.stripes-bg {
		--stripe-size: 8px;

		background: repeating-linear-gradient(
			-45deg,
			transparent,
			transparent var(--stripe-size),
			var(--bg-color) var(--stripe-size),
			var(--bg-color) calc(var(--stripe-size) * 2)
		);
		height: 106px;
		width: 300px;
	}

	span {
		white-space: nowrap;
	}
</style>
