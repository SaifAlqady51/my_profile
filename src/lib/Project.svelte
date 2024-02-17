<script lang="ts">
	export let projectName: string;
	export let githubLink: string;
	export let websiteLink: string;

	import Icon from 'svelte-icons-pack';
	import AiFillGithub from 'svelte-icons-pack/ai/AiFillGithub';
	import CgWebsite from 'svelte-icons-pack/cg/CgWebsite';
</script>

<div class="w-full h-fit flex justify-between">
	<p>{projectName}</p>
	<div class="flex gap-16">
		<a href={websiteLink} target="_blank">
			<Icon
				src={CgWebsite}
				color="white"
				size="64"
				className="custom-icon"
				title="Custom icon params"
			/>
		</a>
		<a href={githubLink} target="_blank">
			<Icon
				src={AiFillGithub}
				color="white"
				size="64"
				className="custom-icon"
				title="Custom icon params"
			/>
		</a>
	</div>
</div>
