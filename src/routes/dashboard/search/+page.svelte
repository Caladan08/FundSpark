<script>
	// @ts-nocheck

	import { SimpleGrid } from '@svelteuidev/core';
	import SearchResultCard from '$lib/components/SearchResultCard.svelte';
	export let data;
</script>

<svelte:head>
	<title>Search Results: {data.searchQuery}</title>
</svelte:head>

<h1 class="mb-4 text-lg">Search results for "{data.searchQuery}" ({data.matches?.length})</h1>
<SimpleGrid cols={4}>
	{#each data.matches as searchResult}
		<SearchResultCard
			title={searchResult.name}
			description={searchResult.description}
			id={searchResult.id}
		/>
	{/each}
</SimpleGrid>
