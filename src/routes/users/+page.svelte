<script>
    /* @type { import('./$houdini').PageData } */
	import { ShowUsersStore } from '$houdini';
    export let data

    $: ({ ShowUsers } = data || [])
</script>

<div>
	{#if $ShowUsers}
    	{$ShowUsers.data.Users.userName}
    {:else}

		<div class="bg-white py-6 ml-96 mt-48 sm:py-2 lg:py-4">
		  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
		    <div class="flex flex-col items-center">
		      <p class="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">That’s a xxx</p>
		      <h1 class="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">Problem Occured!!!</h1>
		      <p class="mb-12 max-w-screen-md text-center text-gray-500 md:text-lg">The content you’re looking for doesn’t exist in this universe.</p>
		      <a href="/" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Go home</a>
		    </div>
		  </div>
		</div>

	{/if}
</div>
