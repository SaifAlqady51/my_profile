<script lang="ts">
	export let linkName: string;
	export let link: string;
</script>

<div>
	<a class="cursor-pointer py-2" href={link}>{linkName}</a>
</div>
