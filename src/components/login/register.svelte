<script>
    import TailwindCss from '$lib/TailwindCSS.svelte';
    import { Section, Register } from 'flowbite-svelte-blocks';
    import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
    import { goto } from '$app/navigation';

    let username = '';
    let password = '';
    let firstname = '';
    let lastname = '';
    let currentError = '';

    const register = () => {
        fetch('http://localhost:3030/api/register',{
            method: "POST",
            headers:{
                'Accept': 'application/json',
                'content-type':  'application/json',
            },
            body: JSON.stringify({
                username: username,
                firstname: firstname,
                lastname: lastname,
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
            await goto('/login',{noScroll: false, replaceState: true})
        })
        .catch((error)=>{
            currentError = error;
            console.log("Error registering",error)
        })
    }
</script>

<TailwindCss/>
<Section name="register">
  <Register href="/">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <form class="flex flex-col space-y-6" on:submit|preventDefault={register}>
            <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Create an account</h3>
        <Label class="space-y-2">
          <span>Your email</span>
          <Input class="form-control" type="email" name="email" placeholder="name@company.com" required />
        </Label>
        <Label class="space-y-2">
          <span>Your password</span>
          <Input class="form-control" type="password" name="password" placeholder="•••••" required />
        </Label>
        <Label class="space-y-2">
          <span>Confirm password</span>
          <Input class="form-control" type="password" name="confirm-password" placeholder="•••••" required />
        </Label>
        <div class="flex items-start">
          <Checkbox>I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/"> Terms and Conditions</a></Checkbox>
        </div>
        <Button type="submit" class="w-full1 font-medium text-gray-500">Create an account</Button>
        <div class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
          Already have an account? <a href="/" class="font-medium text-gray-500 hover:underline dark:text-primary-500">Login here</a>
        </div>
      </form>
    </div>
  </Register>
</Section>

<style>
    div{
        color: #FFF;
        margin-bottom: .25em;
    }
    small{
      color: #ff0000;
    }
</style>