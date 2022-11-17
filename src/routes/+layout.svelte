<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<main class="bg-surface-900 text-surface-50 h-screen flex flex-col">
	<Header />
	<div
		style="width: min(95%, 1200px);"
		class="bg-surface-800 mx-auto border border-surface-700 border-y-0 p-2 sm:p-4 flex-1"
	>
		<slot>
			<h1>An internal error has occured</h1>
		</slot>
	</div>
</main>
