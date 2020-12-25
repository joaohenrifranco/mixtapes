<script>
  import { Router, Link, Route } from "svelte-routing";
  import HomeScreen from './screens/home.svelte'
  import SetupScreen from './screens/setup.svelte'

  export let url = "";
</script>

<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="/setup">Setup</Link>
  </nav>
  <div>
    <Route path="/"><HomeScreen /></Route>
    <Route path="/setup"><SetupScreen /></Route>
  </div>
</Router>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		width: 25%;
	}

</style>