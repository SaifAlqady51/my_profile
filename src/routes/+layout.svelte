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
		class="absolute bottom-10 left-10 hover:bg-[#415a77] rounded-full p-5 z-40"
	>
		<Icon
			src={FaBrandsGithubAlt}
			color="white"
			size="64"
			className="custom-icon"
			title="Custom icon params"
		/>
	</a>
</div>

<slot />
