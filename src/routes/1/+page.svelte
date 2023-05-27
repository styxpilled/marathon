<script lang="ts">
	import DotGrid from '$comp/grids/DotGrid.svelte';
	import PlusLineGrid from '$comp/grids/PlusLineGrid.svelte';
	import Outline from '$comp/minis/Outline.svelte';
	import Plus from '$comp/minis/Plus.svelte';
	import Text from '$comp/minis/Text.svelte';
</script>

<div class="root">
	<!-- LEFT -->
	<PlusLineGrid width={1} height={2} size={100} bottom={170} left={0} />
	<PlusLineGrid width={2} height={1} size={100} bottom={170} left={900} />
	<PlusLineGrid width={11} height={2} size={100} bottom={-30} left={0} />

	<DotGrid width={12} height={48} size={6} top={0} left={0} />

	<DotGrid width={5} height={5} size={7} top={200} left={140} />

	<!-- BOTTOM LEFT -->
	<Text bottom={180} left={165} content={'273.8097 9.1781'} />
	<Plus bottom={180} left={30} />
	<Outline bottom={140} left={30} />
	<Outline bottom={100} left={30} />

	<Plus bottom={200} left={830} />
	<Plus bottom={230} left={860} />
	<Plus bottom={200} left={1032} />
	<Plus bottom={230} left={992} />
	<Plus bottom={52} left={930} />
	<!-- RIGHT  -->
	<PlusLineGrid width={3} height={4} size={100} top={50} right={-80} />
	<PlusLineGrid height={2} size={100} top={50} right={220} />
	<PlusLineGrid width={3} height={5} size={100} bottom={-30} right={-80} />
	<PlusLineGrid height={3} size={100} bottom={-30} right={220} />
	<PlusLineGrid height={1} size={100} bottom={-30} right={320} />

	<DotGrid width={14} height={28} size={6} right={0} bottom={0} background />

	<Text bottom={180} right={240} content={'273.8097 9.1781'} />
	<Plus top={50} right={630} />
	<Outline top={50} right={540} />
	<Plus top={181} right={48} />
	<Outline top={146} right={48} />

	<Outline top={51} right={48} />
	<Outline top={51} right={148} />
	<!-- TITLE -->
	<div class="title">
		<h3>SALVATION AWAITS</h3>
		<h1>SOMEWHERE <span>IN THE HEAVENS</span></h1>
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
		background-color: var(--color-accent-1);
		overflow: hidden;

		--bg: var(--color-accent-1);
		--bg-color: var(--color-accent-1);
		/* background-size: 40px 40px;
		background-image: radial-gradient(circle, #000000 1px, rgba(0, 0, 0, 0) 1px); */
	}

	.title {
		/* display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center; */
		max-width: 72rem;
		z-index: 2;
	}

	span {
		white-space: nowrap;
	}
</style>
