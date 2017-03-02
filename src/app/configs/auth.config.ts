export const authConfig = {
    clientID: 'kHyHnUDlZodGa2pDSsZEYYJznRxxvDzP',
    domain: 'athena-systems.auth0.com',
    callbackURL: location.href,
    logoutURL: `https://athena-systems.auth0.com/v2/logout?returnTo=${location.origin}`
};

export const backendConfig = {
    endpoint: '35.164.184.248:3000',
    // endpoint: 'localhost:3000',
    getTaggedResult: 'processData',
    searchNCBI: 'search-ncbi',
    downloadFile: 'downlaodFile'
};
