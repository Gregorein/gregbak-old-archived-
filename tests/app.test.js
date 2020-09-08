import {h} from "preact"
import "@testing-library/jest-dom/extend-expect"
import {render, screen} from "@testing-library/preact"

import App from "src"

jest.mock("globals", () => ({
	api: () => Promise.resolve([]),
	randomOf: jest.fn(),
}))
jest.mock("components/mun", () => ({
	__esModule: true,
}))

document.getElementsByTagName = jest.fn(() => ({
	title: {},
	description: {}
}))
window.scroll = jest.fn()

describe("App", () => {
	test("renders correctly", async () => {
		render(<App />)

		expect(screen.getByText("Greg")).toHaveTextContent("Greg")
	})	
})