<script lang="ts">
	import '$lib/app.css';
    import '$lib/style.css';
    import '$lib/theme2.css';
</script>

<div class="main-content">

	<div class="form-body">

		<div class="row">
            <div class="img-holder">
                <div class="bg"></div>
                <div class="info-holder"></div>
            </div>

			<div class="website-logo">
				<a href="index.html">
                	<div class="logo">
                    	<img class="logo-size" src="images/logo-light.svg" alt="">
	                </div>
	            </a>
    	    </div>

			<div class="row">
			    <slot />
			</div>

			<div class="other-links">

			</div>
    	</div>
	</div>
</div>


<style>
    .main-content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>