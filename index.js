const fetch = require('node-fetch');

class Gateway {
	constructor(uri = '') {
		this.uri = uri;
	}

	login(credentials = { username: '', password: '' }) {
		return this._call('/auth/sign-in', { method: 'POST', body: credentials });
	}

	whois(accessToken = '') {
		return this._call('/auth/whois', { headers: { Authorization: accessToken } });
	}
   
	_call(uri = '', { method = 'GET', body, headers = {} }) {
		return new Promise((resolve, reject) => {
			fetch(`${this.uri}${uri}`, {
				method,
				headers: { 'Content-Type': 'application/json', ...headers },
				body: JSON.stringify(body),
			})
				.then(res => res.json())
				.then(res => resolve(res))
				.catch(error => {
					if (error) reject(error);
				});
		});
	}
}

module.exports = Gateway;
