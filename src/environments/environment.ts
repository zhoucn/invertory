
export const environment = {
  production: false,
  mma: {
    MmaHost: 'http://gamcnc11.gamska.com:8800',
    scope: 'INV',
    deviceID: 'INV-DEV',
    deviceName: 'INV-DEV',
    clientID: '036cfebf-34e3-4a0f-9620-8045756d0399',
    // authMethod: MmaAuthMethod.FormSignIn
  },
  whitelistedDomains: ['localhost:7060', 'gamerp11:7060', 'gamerp11.gamska.com:7060'],
  blacklistedRoutes: ['gamcnc11:8800', 'gamcnc11.gamska.com:8800'],
  API_BASE_PATH: 'http://gamerp11.gamska.com:7060/api',
};
