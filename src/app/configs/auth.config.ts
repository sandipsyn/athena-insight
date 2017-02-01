interface AuthConfiguration {
    clientID: string,
    domain: string,
    callbackURL: string
}

export const myConfig: AuthConfiguration = {
    clientID: 'kHyHnUDlZodGa2pDSsZEYYJznRxxvDzP',
    domain: 'athena-systems.auth0.com',
    // You may need to change this!
    callbackURL: 'http://localhost:4200/'
};
