<script>
	import './styles.css';
	import Navbar from '$lib/navbar/Navbar.svelte';

	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaBrandsGithubAlt from 'svelte-icons-pack/fa/FaBrandsGithubAlt';
</script>

<div id="app" class="font-press-start">
	<Navbar />

	<!-- Github Link -->
	<a
		href="https://github.com/SaifAlqady51/"
		target="_blank"
		class="absolute md:bottom-10 md:left-10 bottom-2 left-2 hover:bg-[#415a77] rounded-full p-5 z-40"
	>
		<Icon
			src={FaBrandsGithubAlt}
			color="white"
			size="64"
			className="custom-icon md:w-16 w-10"
			title="Custom icon params"
		/>
	</a>
</div>

<slot />
