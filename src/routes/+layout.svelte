<script lang="ts">
	import '$styles/reset.css';
	import '$styles/app.css';
	import '$styles/noninteractive.css';

	import Header from '$comp/Header.svelte';
</script>

<div id="root" class="light">
	<!-- <Header /> -->
	<slot />
</div>
