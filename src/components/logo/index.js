import { h } from "preact";
import { Link } from "preact-router/match";

import cn from "classnames";
import style from "./style";

const Logo = ({color="#242429", state=0}) => (
	<svg
		width="88px"
		height="74px"
		class={cn(style.svg, {
			[style.shrunk]: state > 1
		})}
	>
		<path
			class={style.trapezoid}
			fill={color}
			d="M0.000,74.000 L44.000,-0.000 L65.000,35.500 L43.500,74.000 L0.000,74.000 Z"
		/>
		<path
			class={cn(style.triangle, {
				[style.grown]: state > 0
			})}
			fill={color}
			d="M16.100,0.500 L33.000,29.000 L0.500,29.000 L16.100,0.500 Z"
		/>
	</svg>
);

export default Logo;
