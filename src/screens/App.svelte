<script lang="typescript">
  import { Router, Link, Route } from "svelte-routing";
  import { URIUtils } from "../uri-utils";
  import { Actions } from "../presenter/actions";

  import LoginScreen from './login/login.svelte'
  import MixScreen from './mix/mix.svelte'

  export let url = "";
</script>

<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="/mix">Mix</Link>
  </nav>
  <div>
    <Route path="/"><LoginScreen /></Route>
    <Route path="/mix"><MixScreen /></Route>
  </div>
</Router>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		width: 25%;
	}

</style>