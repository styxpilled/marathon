<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		// @ts-ignore
		const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
		if (!ctx) return;
		// Set the canvas size
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const scalar = 0.99;

		const segments: number[] = [];

		const max = Math.max(canvas.width, canvas.height) * 1.7;

		const opacityScalar = Math.max(canvas.width, canvas.height);

		function animate(): void {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			if (segments?.[0]) {
				if (segments[0] < 2000) {
					segments.unshift(max);
				}
			} else {
				segments.unshift(max);
			}

			for (let i = 0; i < segments.length; i++) {
				const rectSize = segments[i];
				const height = canvas.height / 2 - rectSize / 2 - rectSize / 16;
				const width = canvas.width / 2 - rectSize / 2 - rectSize / 6;
				const alpha = rectSize / opacityScalar;

				ctx.translate(height + rectSize / 2, width + rectSize / 2);
				ctx.rotate((Math.PI / 180) * 30 * (1 - alpha));
				ctx.translate(-(height + rectSize / 2), -(width + rectSize / 2));
				drawRect(width, height, rectSize, alpha);
				segments[i] *= scalar;
			}
			if (segments[segments.length - 1] < 2) {
				segments.pop();
			}

			requestAnimationFrame(animate);
		}

		function drawRect(x: number, y: number, size: number, alpha: number): void {
			ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
			ctx.lineWidth = 3;

			ctx.strokeRect(x, y, size, size);
			ctx.restore();
			ctx.resetTransform();
		}
		// Start the animation
		animate();
	});
</script>

<div class="root">
	<canvas bind:this={canvas} />
</div>

<style>
	.root {
		--p-top: 1;
		--p-right: 1;
		--p-bottom: 1;
		--p-left: 1;

		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100%;
		min-height: 100vh;
		max-height: 100vh;
		background-color: var(--color-accent-2);
		width: 100%;
		overflow: hidden;
	}
</style>
