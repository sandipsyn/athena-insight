interface AuthConfiguration {
  clientID: string,
  domain: string,
  callbackURL: string
}

export const authConfig: AuthConfiguration = {
  clientID: 'kHyHnUDlZodGa2pDSsZEYYJznRxxvDzP',
  domain: 'athena-systems.auth0.com',
  // You may need to change this!
  callbackURL: location.href
};

export const backendConfig = {
  endpoint: '35.164.184.248:3000',
  //endpoint: 'localhost:3000',
  getTaggedResult: 'processData',
  searchNCBI: 'search-ncbi'
};
