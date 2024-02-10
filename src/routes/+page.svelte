<script lang="ts">
	let greetingSentence = 'Hello, My name is Saif';
	let typedChar = '';

	const addCharTotypedChar = (char: string) => {
		typedChar += char;
		return typedChar;
	};

	const addChartoStrigAfterOneSec = (sentence: string, i: number) => {
		setTimeout(() => {
			return addCharTotypedChar(sentence[i]);
		}, i * 120);
	};

	export const animateTyping = (sentence: string) => {
		for (let i = 0; i < sentence.length; i++) {
			addChartoStrigAfterOneSec(sentence, i);
		}
	};

	animateTyping(greetingSentence);
</script>

<div class="w-screen h-screen flex justify-center items-center">
	<!-- <div class="flex w-fit h-full z-40 justify-between gap-20"> -->
	<div>
		<h1
			id="name"
			class="  md:text-5xl text-xl text-white font-semibold h-16 flex items-center px-4 overflow-auto font-press-start"
		>
			{typedChar}
		</h1>
	</div>
</div>
