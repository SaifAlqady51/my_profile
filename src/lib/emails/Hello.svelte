<script>
	import { Button, Hr, Html, Text } from 'svelte-email';

	export let email = 'unkown';
	export let body = '';
</script>

<Html lang="en">
	<Text>
		From: {email}
	</Text>
	<Text>
		{body}
	</Text>

	<Hr />
	<Button href="https://svelte.dev">Visit Svelte</Button>
</Html>
