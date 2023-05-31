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

		const scalar = 1.0;

		const segments: number[] = [];

		const min = Math.max(canvas.width, canvas.height) * 0.01;

		const opacityScalar = Math.max(canvas.width, canvas.height);

		function animate(): void {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			if (segments?.[0]) {
				if (segments[0] > 15) {
					segments.unshift(10);
				}
			} else {
				segments.unshift(1);
			}

			// for (let i = 1; i < 20; i += 3) {
			// 	drawRect(i, '255, 255, 255');
			// }

			for (let i = 0; i < segments.length; i++) {
				const rectSize = segments[i];
				drawRect(rectSize, '255, 255, 255');

				segments[i] *= scalar + 0.01 * 1;
			}

			if (segments[segments.length - 1] > 3000) {
				segments.pop();
			}

			requestAnimationFrame(animate);
		}

		function drawRect(rectSize: number, color: string): void {
			const height = canvas.height / 2 - rectSize / 2 - rectSize / 16;
			const width = canvas.width / 2 - rectSize / 2 - rectSize / 6;
			const alpha = rectSize / opacityScalar;

			ctx.translate(height + rectSize / 2, width + rectSize / 2);
			ctx.rotate((Math.PI / 180) * 30 * (1 - alpha));
			ctx.translate(-(height + rectSize / 2), -(width + rectSize / 2));

			// ctx.strokeStyle = `rgba(255, 0, 0, ${alpha})`;
			// ctx.lineWidth = 3;
			// ctx.strokeRect(width + 3, height, rectSize - 3, rectSize);
			// ctx.strokeRect(width + 6, height, rectSize - 3, rectSize);
			// ctx.strokeRect(width + 9, height, rectSize - 3, rectSize);

			ctx.strokeStyle = `rgba(${color}, ${alpha})`;
			ctx.lineWidth = 3;
			ctx.strokeRect(width, height, rectSize, rectSize);

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
