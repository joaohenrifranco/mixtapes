export type SuccessfulAuthDto = {
  access_token: string;
  token_type: string;
  expires_in: number;
  state: number;
};

export type FailedAuthDto = {
  error: string;
};

export const isAuthDtoError = (spotifyDTO: AuthDto): spotifyDTO is FailedAuthDto =>
  (spotifyDTO as FailedAuthDto).error !== undefined;


export type AuthDto = SuccessfulAuthDto | FailedAuthDto;