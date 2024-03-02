<script lang="ts">
	export let form;
</script>

<div class="h-screen w-screen flex justify-center items-center z-10 text-white">
	<fieldset class="flex flex-col items-center justify-center w-full gap-6">
		<h2 class="font-press-start text-xl">Send a message to me</h2>
		<form method="POST" class="container flex flex-col items-center gap-12 w-1/3">
			<div class="relative w-full">
				<input
					name="from"
					type="email"
					placeholder="johndoe@example.com"
					class="rounded-full w-full h-[40px] px-4 focus:outline-none text-black font-V text-2xl bg-[#a2c4c9] placeholder-gray-500"
					required
				/>
				<!-- <p class="input-error absolute -bottom-8 left-10 text-xl font-V text-[#ff5a5f]">
					{form?.emailError || ''}
				</p> -->
			</div>
			<div class="relative w-full">
				<textarea
					name="body"
					rows="6"
					value=""
					class="rounded-lg w-full outline-none p-4 text-2xl font-V text-black bg-[#a2c4c9]"
					required
				/>

				<!-- <p class="input-error absolute -bottom-8 left-10 text-xl font-V text-[#ff5a5f]">
					{form?.bodyError || ''}
				</p> -->
			</div>
			<button
				type="submit"
				class="font-V text-2xl bg-[#036666] hover:bg-[#248277] w-1/2 px-8 py-2 rounded-lg"
				>Send</button
			>
		</form>
	</fieldset>
</div>
