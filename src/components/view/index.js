import {useEffect} from "preact/hooks"

import Radiv from "components/radiv"

import cn from "classnames"
import style from "./style"

const View = ({children, ...props}) => {
	useEffect(() => {
		window.scroll(0,0)
	}, [])

	return (
		<Radiv
			{...props}
			class={style.container}
			urls={{
				"/": style.full,
				"/portfolio": style.bHeavy,
				"/portfolio/*": cn(style.full, style.bHeavy),
				"/policy-copyrights": style.bSalmon,
			}}
			>
			<div class={cn(style.view, ...props.class)}>
				{children}
			</div>
		</Radiv>
	)
}

export default View