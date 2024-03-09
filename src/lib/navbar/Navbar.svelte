<script lang="ts">
	import NavbarLink from '$lib/navbar/NavbarLink.svelte';
	import HiSolidMenu from 'svelte-icons-pack/hi/HiSolidMenu';
	import Icon from 'svelte-icons-pack';
	const topNav = [
		{ name: 'About', link: '/about' },
		{ name: 'Projects', link: '/projects' },
		{ name: 'Work', link: '/work' },
		{ name: 'Contact', link: '/contact' }
	];
	let visible = false;

	function toggleVissability() {
		visible = !visible;
	}
</script>

<div>
	<!-- Navbar for wide screens -->
	<div
		class="w-screen px-2 fixed top-0 left-0 h-20 justify-center pt-6 text-white gap-40 md:flex text-xl z-50 hidden"
	>
		<div class="flex gap-20">
			{#each topNav.slice(0, 3) as item}
				<NavbarLink linkName={item.name} link={item.link} />
			{/each}
		</div>
		<div class="flex gap-10">
			<NavbarLink linkName={'Contact'} link={'/contact'} />
		</div>
	</div>
	<!-- Nav bar for small screens -->
	<div class="relateive text-black fixed top-4 left-10 visible md:hidden">
		<!-- Menu Icon -->
		<button on:click={toggleVissability}>
			<Icon
				src={HiSolidMenu}
				color="white"
				size="40"
				className="custom-icon"
				title="Custom icon params"
			/>
		</button>
		<!-- toggled nav links -->
		{#if visible}
			<div class=" bg-gray-400 rounded py-2 px-6 flex flex-col gap-5 z-50">
				{#each topNav as item}
					<!-- Links -->
					<button on:click={toggleVissability} class=" text-[13px] hover:bg-gray-200">
						<NavbarLink linkName={item.name} link={item.link} />
					</button>
				{/each}
			</div>
		{/if}
	</div>
</div>
