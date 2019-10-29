# OIB2B GATEWAY AUTH

OIB2B GATEWAY AUTH is a [NodeJs](https://nodejs.org/en/) library for authenticate users and retrieve user from access token.

## Installation

Use the package manager [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/) to install.

```bash
npm i --save oib2b-gateway-auth
```
or
```bash
yarn add oib2b-gateway-auth
```

## Usage

```nodejs
const Auth = require('oib2b-gateway-auth');

const auth = new Auth('GATEWAY_URL');

auth.login({ username, password })
	.then(res => console.log(res)) //The response object contains the user and a new access token.
	.catch(err => console.log(err));

auth.whois('ACCESS_TOKEN')
    .then(res => console.log(res)) //The response object is the owner/user of the access token.
    .catch(err => console.log(err));
```


## Authors

* **[Frederico Sousa](https://github.com/fredericosousa)**

See also the list of [contributors](https://github.com/FredericoSousa/oib2b-gateway-auth/graphs/contributors) who participated in this project.



## License
[MIT](https://choosealicense.com/licenses/mit/)