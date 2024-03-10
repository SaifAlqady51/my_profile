<script lang="ts">
	export let form;
	import Icon from 'svelte-icons-pack';
	import AiFillLinkedin from 'svelte-icons-pack/ai/AiFillLinkedin';
	import AiFillTwitterSquare from 'svelte-icons-pack/ai/AiFillTwitterSquare';
	import AiFillMediumSquare from 'svelte-icons-pack/ai/AiFillMediumSquare';
</script>

<div class="h-screen w-screen flex justify-center items-center text-white">
	<fieldset class="flex flex-col items-center justify-center w-full md:gap-10 gap-4">
		<h2 class="font-press-start md:text-3xl text-lg mt-12">Send a message to me</h2>
		<form
			method="POST"
			class="  container flex flex-col items-center md:gap-12 md:w-1/3 gap-3 w-10/12"
		>
			<div class=" w-full">
				<input
					name="to"
					type="text"
					value="To: saifalqady52@gmail.com"
					placeholder="johndoe@example.com"
					class="relative rounded-full w-full h-[40px] px-4 focus:outline-none text-black font-V text-2xl bg-[#a2c4c9] placeholder-gray-500 -z-10"
					readonly
				/>
			</div>
			<div class="relative w-full">
				<input
					name="from"
					type="email"
					placeholder="johndoe@example.com"
					class="rounded-full w-full h-[40px] px-4 pl-[66px] focus:outline-none text-black font-V text-2xl bg-[#a2c4c9] placeholder-gray-500"
					required
				/>
				<p class="absolute top-1 font-V left-4 text-black text-2xl">From:</p>
			</div>

			<div class="relative w-full">
				<textarea
					name="body"
					rows="6"
					value=""
					class="rounded-lg w-full outline-none p-4 text-2xl font-V text-black bg-[#a2c4c9]"
					required
				/>

				<p class="input-error absolute -bottom-8 left-10 text-xl font-V text-green-500">
					{form?.success || ''}
				</p>
			</div>
			<button
				type="submit"
				class="font-V text-2xl bg-[#036666] hover:bg-[#248277] w-1/2 px-8 py-2 rounded-lg"
				>Send</button
			>
		</form>
		<div class="flex md:gap-20 gap-6 md:mt-8">
			<a href="https://www.linkedin.com/in/saif-alqady-098642237/" target="_blank">
				<Icon
					src={AiFillLinkedin}
					color="white"
					size="76"
					className="custom-icon md:w-[76px] w-10 h-fit"
					title="Custom icon params"
				/>
			</a>
			<a href="https://twitter.com/saif_alqady">
				<Icon
					src={AiFillTwitterSquare}
					color="white"
					size="76"
					className="custom-icon  md:w-[76px] w-10 h-fit"
					title="Custom icon params"
				/>
			</a>

			<a href="https://medium.com/@saifalqady52">
				<Icon
					src={AiFillMediumSquare}
					color="white"
					size="76"
					className="custom-icon  md:w-[76px] w-10 h-fit"
					title="Custom icon params"
				/>
			</a>
		</div>
	</fieldset>
</div>
