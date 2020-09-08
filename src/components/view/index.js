import {h} from "preact"
import {useEffect} from "preact/hooks"

import Radiv from "components/radiv"

import cn from "classnames"
import style from "./style"

const View = ({children, title, description, extraClass, ...props}) => {
	useEffect(() => {
		window.scroll(0,0)
	}, [])
	useEffect(() => {
		document.title = title
		document.getElementsByTagName("meta").title.content = title;
	}, [title])
	useEffect(() => {
		document.getElementsByTagName("meta").description.content = description;
	}, [description])

	return (
		<Radiv
			{...props}
			class={style.container}
			urls={{
				"/": style.full,
				"/projects": style.bHeavy,
				"/projects/*": cn(style.full, style.bHeavy),
				"/policy-copyrights": style.bSalmon,
			}}
			>
			<div class={cn(style.view, extraClass)}>
				{children}
			</div>
		</Radiv>
	)
}

export default View