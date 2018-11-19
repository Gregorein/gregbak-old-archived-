export const api = (url, method="GET", headers={}, data=null, raw=false) => {
	const life = 30000

	return new Promise((resolve, reject) => {
		const request = {
			method,
			mode: "cors",
			headers: new Headers({
				"Content-Type": "application/json",
				...headers,
			}),
		}
		if (data !== null) request.body = JSON.stringify(data)

		const timeout = setTimeout(() => {
			return reject("request timed out")
		}, life)

		fetch(url, request)
		.then(r => {
			clearTimeout(timeout)

			if (r.ok) return resolve(raw === true ? r : r.json())
			return reject(Error("malformed API response", r))
		})
		.catch(error => reject(Error(error.message)))
	})
}

export const randomOf = a => a[Math.floor(Math.random() * a.length)]