<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import HomeScreen from './view/home/home.svelte'
  import ChooseScreen from './view/features/features.svelte'

  export let url = "";
</script>

<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="/features">Features</Link>
  </nav>
  <div>
    <Route path="/"><HomeScreen /></Route>
    <Route path="/features"><ChooseScreen /></Route>
  </div>
</Router>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		width: 25%;
	}

</style>