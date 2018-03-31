import { h, Component } from "preact"
import { Link } from "preact-router/match"

import cn from "classnames"
import style from "./style"

export default class Splash extends Component {
	render({color="#bf604b", state=4}) {
		return (
			<svg class={style.svg}>
				<defs>
					<mask id="hole">
						<rect
							height="100vh"
							width="100vw"
							fill="white"
						/>						
						<path
							class={cn(style.hole, {
								[style.split]: state < 4,
								[style.grown]: state < 2
							})}
							d="M1,73 L44,1 L87,73 L1,73 Z"
							fill="black"
						/>
					</mask>
				</defs>
				<rect
					height="100vh"
					width="100vw"
					fill={color}
					mask="url(#hole)"
					class={cn(style.mask, {
						[style.hidden]: state < 2
					})}
				/>
				<g
					width="88px"
					height="74px"
					class={style.logo}
				>
					<path
						class={cn(style.trapezoid, {
							[style.hidden]: state === 0
						})}
						fill={color}
						d="M0,74 L44,-0 L65,35.5L43.5,74 L0,74 Z"
					/>
					<path
						class={cn(style.triangle, {
							[style.split]: state > 2,
							[style.hidden]: state === 0
						})}
						fill={color}
						d="M16.1,0.5L33,29 L0.5,29 L16.1,0.5Z"
					/>
				</g>
			</svg>
		)
	}
}