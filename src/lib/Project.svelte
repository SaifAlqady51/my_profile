<script lang="ts">
	export let projectName: string;
	export let githubLink: string;
	export let websiteLink: string;

	import Icon from 'svelte-icons-pack';
	import AiFillGithub from 'svelte-icons-pack/ai/AiFillGithub';
	import CgWebsite from 'svelte-icons-pack/cg/CgWebsite';
</script>

<div class="w-full h-fit flex md:justify-between items-center md:flex-row flex-col gap-4">
	<p class="md:text-2xl text-sm flex text-center">{projectName}</p>
	<div class="flex md:gap-16 gap-4">
		<a href={websiteLink} target="_blank">
			<Icon
				src={CgWebsite}
				color="white"
				size="64"
				className="custom-icon h-10 md:h-16"
				title="Custom icon params"
			/>
		</a>
		<a href={githubLink} target="_blank">
			<Icon
				src={AiFillGithub}
				color="white"
				size="64"
				className="custom-icon  h-10 md:h-16"
				title="Custom icon params"
			/>
		</a>
	</div>
</div>
