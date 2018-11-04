import {h} from "preact"

const Fullscreen = props => (
	<svg 
	 width="1000px"
	 height="1000px"
		{...props}
	 >
		<path
			fill="currentColor"
			d="M250.000,1000.000 L500.000,750.000 L750.000,750.000 L750.000,500.000 L1000.000,250.000 L1000.000,1000.000 L250.000,1000.000 ZM250.000,250.000 L250.000,500.000 L-0.000,750.000 L-0.000,-0.000 L750.000,-0.000 L500.000,250.000 L250.000,250.000 Z"
			/>
	</svg>
)

export default Fullscreen
