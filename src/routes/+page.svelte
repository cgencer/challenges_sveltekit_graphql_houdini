<script lang="ts">
	import Header from '../components/header/header.svelte';
    import { onMount } from 'svelte';
    import user from '../user';

    $: isLoggedIn = $user === null ? false : true;

</script>


<div class="content_wrapper">
	<Header />
	{#if isLoggedIn}
		<h2>Thank you {$user.firstname} {$user.lastname} for logging in!</h2>
	{:else}
		<h2>You need to be logged in here.</h2>
		<h2>Head to Sign in page or Register if you don't have an account.</h2>
	{/if}
</div>


<style>
    h1, h2{
        color: #000;
    }
    .content_wrapper{
        margin-top: 4em;
        text-align: center;
    }
</style>