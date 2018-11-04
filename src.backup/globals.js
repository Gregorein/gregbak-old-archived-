export const api = (url, method="GET", data, headers={}) => {
	return fetch(url, {
		body: JSON.stringify(data),
		method: method,
		mode: "cors",
		headers: {
			"content-type": "application/json",
			...headers
		}
	})
	.then(response => {
		if (response.ok) return response.json()
		else return Promise.reject(Error("ERROR :: malformed API response"))
	})
	.catch(error => {
		return Promise.reject(Error(error.message))
	})
}