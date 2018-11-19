import {h} from "preact"

const Close = props => (
	<svg 
		width="150px"
		height="150px"
		{...props}
		>
		<path
			fill="currentColor"
			d="M125,100 L100,100 L100,125 L75,150 L75,75 L150,75 L125,100 ZM25,50 L50,50 L50,25 L75,-0 L75,75 L-0,75 L25,50 Z"
			/>
	</svg>
)

export default Close
