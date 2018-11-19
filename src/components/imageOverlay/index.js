import {
  h,
  Component,
} from "preact"

import Close from "icons/close"

import cn from "classnames"
import style from "./style"

class ImageOverlay extends Component {
  handleKeyDown = e => {
    if (e.keyCode === 27) this.props.handleOverlay()
  }

  closeOverlay = () => {
    this.props.handleOverlay()
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown)
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown)
  }

  render({image}) {
    return (
      <div
        tabIndex="0"
        onKeyDown={this.handleKeyDown}
        class={style.overlay}
        >
        <img
          class={style.image}
          src={image}
          />
        <Close
          class={style.close}
          onClick={this.closeOverlay}
          />
      </div>
    )
  } 
}

export default ImageOverlay