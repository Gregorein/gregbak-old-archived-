const Logo = props => (
	<svg
		width="88px"
		height="74px"
		{...props}
		>
		<path
			fill="currentColor"
			d="M0,74 L44,-0 L65,35.5 L43.5,74 L0,74 Z"
			/>
		<path
			fill="currentColor"
			transform="translate(55, 45)"
			d="M16.1,0.5 L33,29 L0.5,29 L16.1,0.5 Z"
			/>
	</svg>
)

export default Logo
