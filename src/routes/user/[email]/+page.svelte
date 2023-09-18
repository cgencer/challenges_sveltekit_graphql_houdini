<script>
	import { GetUserStore } from '$houdini';
	import { load_ShowUsers } from '$houdini';

    /* @type {import('./$houdini').PageData} */
    export let data

	/* @type { import('./$houdini').AllItemsVariables } */
	export const _GetUserVariables = (event) => {
	    if (!['@'].includes(event.params.email)) {
	        throw error(400, 'invalid filter')
	    }

	    return {
//	        email: event.params.email,
	    }
	}

    $: ({ userSet } = data)
</script>

<div>
	{#if userSet}
		{$userSet.data?.Users.userName}
	{:else}

		<div class="bg-white py-6 ml-96 mt-48 sm:py-2 lg:py-4">
		  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
		    <div class="flex flex-col items-center">
		      <p class="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">In ur face!</p>
		      <h1 class="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">Problem Occured!!!</h1>
		      <p class="mb-12 max-w-screen-md text-center text-gray-500 md:text-lg">couldn't fetch the user...</p>
		      <a href="/" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Go home</a>
		    </div>
		  </div>
		</div>

	{/if}
</div>
