import {h} from "preact"

const Close = props => (
	<svg 
		width="1500px"
		height="1500px"
		{...props}
		>
		<path
			fill="currentColor"
			d="M1250.000,1000.000 L1000.000,1000.000 L1000.000,1250.000 L750.000,1500.000 L750.000,750.000 L1500.000,750.000 L1250.000,1000.000 ZM250.000,500.000 L500.000,500.000 L500.000,250.000 L750.000,-0.000 L750.000,750.000 L-0.000,750.000 L250.000,500.000 Z"
			/>
	</svg>
)

export default Close
