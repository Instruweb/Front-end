export const environment = {
  production: true,
  keycloak: {
    url: 'http://localhost:8484',
    realm: 'instruweb',
    clientId: 'front-end-service',
    redirectUri: 'http://localhost:4200'
  }
};
