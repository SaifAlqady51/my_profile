<script lang="ts">
	export let sentence: string;
	let typedChar = '';

	const addCharTotypedChar = (char: string) => {
		typedChar += char;
		return typedChar;
	};

	const addChartoStrigAfterOneSec = (sentence: string, i: number) => {
		setTimeout(() => {
			return addCharTotypedChar(sentence[i]);
		}, i * 80);
	};

	export const animateTyping = (sentence: string) => {
		for (let i = 0; i < sentence.length; i++) {
			addChartoStrigAfterOneSec(sentence, i);
		}
	};

	animateTyping(sentence);
</script>

<div>
	<h1 class="h-fit leading-10 md:leading-[80px]">{typedChar}</h1>
</div>
