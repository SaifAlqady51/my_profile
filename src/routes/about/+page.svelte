<script lang="ts">
	let introductoin =
		"I'm a Front-End developer from Egypt, I like to convert ideas into products. Interested in clean code principles, Mostly use Next.js, Typescript and Tailwind,   ";
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

	animateTyping(introductoin);
</script>

<div
	class="w-screen h-screen md:text-4xl text-xl font-press-start text-white flex justify-start mt-40 px-5 md:px-[18%]"
>
	<h1 class="h-fit leading-10 md:leading-[80px]">{typedChar}</h1>
</div>
