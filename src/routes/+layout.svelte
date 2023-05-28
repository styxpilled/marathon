<script lang="ts">
	import '$styles/reset.css';
	import '$styles/app.css';
	import '$styles/noninteractive.css';

	import Header from '$comp/Header.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	const keybinds = async (e: KeyboardEvent) => {
		const key = e.key.toLowerCase();
		const route = parseInt($page.route.id?.substring(1) || '0');
		if (key === 'arrowright') {
			await goto(`/${route + 1}`);
		} else if (key === 'arrowleft') {
			await goto(`/${route > 1 ? route - 1 : route}`);
		}
	};
</script>

<svelte:document on:keydown={keybinds} />

<div id="root" class="light">
	<!-- <Header /> -->
	<slot />
</div>
