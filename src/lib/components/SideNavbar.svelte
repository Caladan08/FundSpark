<script>
	import CaretDown from 'carbon-icons-svelte/lib/CaretDown.svelte';
	import CaretLeft from 'carbon-icons-svelte/lib/CaretLeft.svelte';
	import CaretRight from 'carbon-icons-svelte/lib/CaretRight.svelte';
	import CaretUp from 'carbon-icons-svelte/lib/CaretUp.svelte';
	import Logout from 'carbon-icons-svelte/lib/Logout.svelte';
	import Logo from '$lib/Logo.svelte';
	import { Paper } from '@svelteuidev/core';
	import { supabase } from '$lib/supabase';
	import { invalidateAll } from '$app/navigation';
	let sidebarOptions = [
		{
			name: 'test1',
			icon: CaretDown
		},
		{
			name: 'test2',
			icon: CaretLeft
		},
		{
			name: 'test3',
			icon: CaretRight
		},
		{
			name: 'test4',
			icon: CaretUp
		}
	];
	let active = '';
	async function logout() {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.log(error);
		} else {
			invalidateAll();
		}
	}
</script>

<div class="flex sideNavbar flex-col gap-4 bg-input max-w-[5rem] w-full py-4 px-2 h-full">
	<a href="/dashboard" class="p-2 flex justify-center items-center">
		<Logo size={32} />
	</a>
	<Paper
		shadow="xl"
		override={{
			borderRadius: '0.5rem',
			width: '100%',
			height: '100%',
			padding: '8px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: '#1c1c25'
		}}
	>
		<div class="h-full flex flex-col justify-center gap-4">
			{#each sidebarOptions as sidebarOption}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="p-2 rounded-lg transition-all hover:bg-mint/20"
					class:activeIcon={active === sidebarOption.name}
					on:click={() => (active = sidebarOption.name)}
				>
					<svelte:component
						this={sidebarOption.icon}
						size={25}
						fill={active === sidebarOption.name ? '#02c39a' : 'gray'}
					/>
				</div>
			{/each}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="p-2 rounded-lg transition-all hover:bg-mint/20" on:click={logout}>
				<Logout size={25} fill="gray" />
			</div>
		</div>
	</Paper>
</div>

<style>
	.activeIcon {
		background-color: rgba(2, 195, 154, 0.2);
	}
</style>
