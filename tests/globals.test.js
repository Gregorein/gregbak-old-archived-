import fetch from "node-fetch"
import {api, randomOf} from "globals"

describe("Globals", () => {
	beforeEach(() => {
		global.Headers = fetch.Headers
	})

	test("api", async () => {
		let response
		await api(`${API}/projects.json`)
		.then(data => response=data)

		expect(response.length).not.toBe(0)
	})

	test("randomOf", () => {
		const numbers = [1,2,3]

		expect(numbers.includes(randomOf(numbers))).toBe(true)
	})
})