<script>
  import { getAuthorizationUrl } from "../infrastructure/uri-utils";
  const loginUrl = getAuthorizationUrl();
</script>

<a href={loginUrl}>Login</a>
