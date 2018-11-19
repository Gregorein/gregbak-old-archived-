import {h} from "preact"

const Fullscreen = props => (
	<svg 
	 width="100px"
	 height="100px"
		{...props}
	 >
		<path
			fill="currentColor"
			d="M25,100 L50,75 L75,75 L75,50 L100,25 L100,100 L25,100 ZM25,25 L25,50 L-0,75 L-0,-0 L75,-0 L50,25 L25,25 Z"
			/>
	</svg>
)

export default Fullscreen
