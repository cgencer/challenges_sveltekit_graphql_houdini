<script>
    import TailwindCss from '$lib/TailwindCSS.svelte';
    import { Section, Register } from 'flowbite-svelte-blocks';
    import { Alert } from 'flowbite-svelte';
    import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
    import { goto } from '$app/navigation';
    import user from '../../user';
    let email = '';
    let password = '';
    let currentError = '';

    const login = ()=>{
/*
        fetch('http://localhost:3030/api/login',{
            method: "POST",
            credentials: 'include',
            headers:{
                'Accept': 'application/json',
                'content-type':  'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
        .then((res) =>{
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            if(data.error === true) throw new Error(data.message);
        })
        .then( async()=>{
            await goto('/',{noScroll: false, replaceState: true})
        })
        .catch((error)=>{
            currentError = error;
            console.log("Error loggin in",error)
        })
*/
    }
</script>

<TailwindCss/>
<Section name="login">
  <Register href="/">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <form class="flex flex-col space-y-6" on:submit|preventDefault={login}>
    	<div class="ml-32">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Please login:</h3>
        <Label class="space-y-2">
          <span>Your email</span>
          <Input class="form-control" type="email" name="email" placeholder="name@company.com" required />
        </Label>
        <Label class="space-y-2">
          <span>Your password</span>
          <Input class="form-control" type="password" name="password" placeholder="•••••" required />
        </Label>
        <div class="flex items-start">
          <Checkbox>Remember me</Checkbox>
          <a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot password?</a>
        </div>
        <Button type="submit" class="w-full1 font-medium text-gray-500">Sign In</Button>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet? <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
        </p>
        </div>
      </form>
    </div>
  </Register>
</Section>
