import {
  h,
  Component,
} from "preact"

import Radiv from "components/radiv"

import cn from "classnames"
import style from "./style"

class View extends Component {
  componentDidMount() {
    window.scroll(0,0)
  }

  render({children, ...props}) {
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
}

export default View