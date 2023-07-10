<script lang="ts">
	let partitionOffset = Math.round(Math.random() * 90);
</script>

<div class="root">
	<div class="main">
		<h1 class="trollface">트롤페이스</h1>
		<h3>MAIN SYSTEMS: <span>{Math.round(Math.random() * 25) + 75}% ONLINE</span></h3>
		<h3>
			ONLINE AUXILARY SYSTEMS: <span>{Math.round(Math.random() * 50) + 50}% ONLINE</span>
		</h3>
		<h3>
			POWER REMAINING: <span
				>{Math.round(Math.random() * 25) + 75}% <span class="hidden">ONLINE</span></span
			>
		</h3>
	</div>
	<div class="damaged">
		<div class="damaged-text">
			<div class="damaged-top" />
			<h2>DAMAGED</h2>
			<div class="damaged-bottom" />
			<h3>CONDITION: RED</h3>
		</div>
		<ol class="partitions">
			{#each { length: 9 } as _, i}
				<li class:active={i === 4} class="partition">
					<h3>PARITION</h3>
					<h2>{i + partitionOffset}</h2>
					<h3>ARMOR PLATE</h3>
				</li>
			{/each}
		</ol>
	</div>
</div>

<style>
	.root {
		color: red;
		display: flex;
		flex-direction: row;
		align-items: start;
		justify-content: space-around;
		height: 100vh;
		min-height: 100vh;
		width: 100%;
		overflow: hidden;
		background-color: black;
	}

	.main {
		padding-top: 5rem;
	}

	.main > h3 {
		display: flex;
		justify-content: space-between;
	}

	.damaged {
		display: flex;
		align-items: center;
	}

	.damaged-text {
		margin-top: -2.2rem;
		margin-right: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: max-content;
		/* animation: blink 1.5s steps(5, start) infinite; */
	}

	.damaged-top {
		height: 0.75rem;
		width: 100%;
		background-color: red;
		border-radius: 0.15rem;
	}

	.damaged-bottom {
		height: 0.5rem;
		width: 100%;
		background-color: red;
		border-radius: 0.15rem;
	}

	h2 {
		font-size: 2rem;
	}

	h2,
	h3 {
		letter-spacing: 0.2em;
	}

	.partitions {
		margin-top: -1.5rem;
	}

	.partition {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 1rem;
		color: salmon;
	}

	.hidden {
		visibility: hidden;
	}

	.active {
		color: red;
	}

	@keyframes blink {
		to {
			visibility: hidden;
		}
	}
</style>
