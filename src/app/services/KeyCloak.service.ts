import Keycloak from "keycloak-js";

const _kc = new Keycloak('/keycloak.json');


const getToken = () => {
  return _kc.token;
}

const setToken = (name: string) => {
  _kc.token = name;
}

const doLogin = () => {
  console.log('hallo')
  if (_kc.authenticated) {
    return;
  }
  _kc.login();
}

const doLogout = () => {
  if (_kc.authenticated) {
    _kc.logout();
  }
  return;
}

const KeyCloakService = {
  getToken,
  setToken,
  doLogin,
  doLogout
};

export default KeyCloakService;
