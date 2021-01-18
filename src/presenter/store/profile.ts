import { writable } from "svelte/store";

type Profile  = {
  accessToken?: string;
};

function createProfile() {
  const { subscribe, set, update } = writable<Profile>({});

  const setAccessToken = (accessToken: string) => {
    return set({
      accessToken: accessToken,
    });
  };

  return { subscribe, setAccessToken, update };
}

export const profile = createProfile();
