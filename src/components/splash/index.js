import { h, Component } from "preact";
import { Link } from "preact-router/match";

import cn from "classnames";
import style from "./style";

export default class Logo extends Component {
	render({color="#242429", state=3}) {
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
								[style.split]: state < 3,
								[style.grown]: state === 0
							})}
							d="M1.000,73.000 L44.000,1.000 L87.000,73.000 L1.000,73.000 Z"
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
						[style.hidden]: state === 0
					})}
				/>
				<g
					width="88px"
					height="74px"
					class={style.logo}
				>
					<path
						class={style.trapezoid}
						fill={color}
						d="M0.000,74.000 L44.000,-0.000 L65.000,35.500 L43.500,74.000 L0.000,74.000 Z"
					/>
					<path
						class={cn(style.triangle, {
							[style.split]: state > 1
						})}
						fill={color}
						d="M16.100,0.500 L33.000,29.000 L0.500,29.000 L16.100,0.500 Z"
					/>
				</g>
			</svg>
		);
	}
}