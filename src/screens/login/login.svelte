<script lang="typescript">
  import { Link } from "svelte-routing";
  import { Actions } from "../../presenter/actions";
  import { spotifyAuthorizationURL } from "../../presenter/consts";
  import { profile } from "../../presenter/store";
  import { URIUtils } from "../../uri-utils";

  Actions.handleAuthDTO(URIUtils.buildDTOFromWindowURIFragment(window));
</script>

{#if $profile.accessToken}
  <Link to="/features">Continuar...</Link>
{:else}<a href={spotifyAuthorizationURL}>Login</a>{/if}
