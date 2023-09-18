<script>
    import { goto } from '$app/navigation';
    import { Section } from 'flowbite-svelte-blocks';
    import { Button, Drawer, CloseButton } from 'flowbite-svelte';
    import user from '../../user';

    let hidden1 = false;
    $: isLoggedIn = $user === null ? false : true;

    const logout = async() => {
        await fetch('http://localhost:3030/api/logout',{
            method: "POST",
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'content-type':  'application/json',
            }
        })
        user.update(val => val = null);
        await goto('/',{noScroll: false,replaceState: true});
    }
</script>



<nav class='navbar flex'>
	<ul class="flex flex-wrap items-center justify-center" >
		{#if !isLoggedIn}
			<li class="text-blue-600 hover:text-white hover:bg-blue-600 mx-4 my-1 border-2 border-blue-600 px-2 rounded-2xl "><a href="../login">Login</a></li>
			<li class="text-white bg-blue-600 px-2 rounded-2xl mx-4 my-1 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600"><a href="../register">SignUp</a></li>
		{:else}
			<li class="text-blue-600 hover:text-white hover:bg-blue-600 mx-4 my-1 border-2 border-blue-600 px-2 rounded-2xl "><a href="#" on:click={logout}>Logout</a></li>
		{/if}
	</ul>
</nav>

