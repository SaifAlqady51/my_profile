<script lang="ts">
	import NavbarLink from '$lib/navbar/NavbarLink.svelte';
</script>

<div class="fixed top-0 left-0 h-20 w-full justify-center py-8 text-white gap-40 flex text-xl z-50">
	<div class="flex gap-20">
		<NavbarLink linkName={'About'} link={'/'} />
		<NavbarLink linkName={'Projects'} link={'/'} />
		<NavbarLink linkName={'Work'} link={'/'} />
	</div>
	<div class="flex gap-10">
		<NavbarLink linkName={'Contact'} link={'/'} />
	</div>
</div>
