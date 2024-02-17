<script lang="ts">
	import NavbarLink from '$lib/navbar/NavbarLink.svelte';
</script>

<div
	class="w-screen px-2 fixed top-0 left-0 h-20 justify-center pt-6 text-white gap-40 md:flex text-xl z-50 hidden"
>
	<div class="flex gap-20">
		<NavbarLink linkName={'About'} link={'/about'} />
		<NavbarLink linkName={'Projects'} link={'/projects'} />
		<NavbarLink linkName={'Work'} link={'/'} />
	</div>
	<div class="flex gap-10">
		<NavbarLink linkName={'Contact'} link={'/'} />
	</div>
</div>
