import {
	useState,
	useEffect,
} from "preact/hooks"
import {randomOf} from "globals"

import cn from "classnames"
import style from "./style.scss"

const Splash = () => {
	const [step, setStep] = useState(5)
	const [main, setMainColor] = useState(undefined)
	const [background, setBackgrounrdColor] = useState(undefined)

	const colors = [
		// "black",
		"#0c0409",
		"#242429",
		"#53505a",
		"#f5e8e0",
		"#bf604b",
		// "#dd9a60",
		"#ffbd42",
		// "#f7c36d",
		// "white",
	]

	useEffect(() => {
		handleColors()

		let time = 500

		for (let i = 0; i < step; i++) {
			handleSplash(
				step - (i+1),
				time * i,
			)
		}
	}, [])

	const handleSplash = (step, time) => setTimeout(() => setStep(step), time)
	const handleColors = () => {
		const main = randomOf(colors)
		const background = randomOf(colors.filter(c => c !== main))

		setMainColor(main)
		setBackgrounrdColor(background)
	}

	return step > -1 && (
		<svg class={style.svg}>
			<rect
				class={cn(style.rectangle, {
					[style.hidden]: step === 0,
				})}
				fill={step >= 4 ? "#fff" : background}
				/>
			<g
				class={cn(style.logo, {
					[style.hidden]: step >= 4,            
				})}
				>
				<path
					class={cn(style.trapezoid, {
						[style.hidden]: step === 0,
					})}
					fill={main}
					d="M0,74 L44,-0 L65,35.5L43.5,74 L0,74 Z"
					/>
				<path
					class={cn(style.triangle, {
						[style.split]: step > 1,
						[style.hidden]: step === 0,
					})}
					fill={main}
					d="M16.1,0.5L33,29 L0.5,29 L16.1,0.5Z"
					/>
			</g>
		</svg>
	)
}

export default Splash