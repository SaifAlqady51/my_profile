<script lang="ts">
	import Navbar from '$lib/navbar/Navbar.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaBrandsGithubAlt from 'svelte-icons-pack/fa/FaBrandsGithubAlt';
</script>

<div class="w-full h-full flex justify-center items-center font-press-start">
	<Navbar />
	<!-- <div class="flex w-fit h-full z-40 justify-between gap-20"> -->
	<div>
		<h1 id="name" class="  text-5xl text-white font-semibold h-16 flex items-center px-2">
			Hello, My name is Saif
		</h1>
	</div>
	<a
		href="https://github.com/SaifAlqady51/"
		target="_blank"
		class="absolute bottom-10 left-10 hover:bg-[#415a77] rounded-full p-5"
	>
		<Icon
			src={FaBrandsGithubAlt}
			color="white"
			size="64"
			className="custom-icon"
			title="Custom icon params"
		/>
	</a>
	<!-- </div> -->
</div>
