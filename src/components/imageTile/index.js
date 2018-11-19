import {
  h,
  Component,
} from "preact"

import Loader from "components/loader"
import Fullscreen from "icons/Fullscreen"

import cn from "classnames"
import style from "./style"

export default class ImageTile extends Component {
  state = {
    updates: 0,
    loaded: false,
  }
  resizeTimer
  img = new Image()

  updateDimensions = () => {
    let {updates} = this.state

    clearTimeout(this.resizeTimer)
    this.resizeTimer = setTimeout(() => this.setState({
      updates: updates++,
    }), 25)
  }

  loadImage = src => {
    this.img.src = src
    this.img.onload = () => {
      this.setState({
        loaded: true,
      })
    }
  }

  componentDidMount() {
    const {url} = this.props
    window.addEventListener("resize", this.updateDimensions)
    this.loadImage(`${API}${url}`)
  }
  componentDidReceiveProps() {
    this.updateDimensions()
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }

  render({height, width, url, single, handleClick}, {loaded}) {
    const isSingle = single && window.innerWidth > 768

    return (
      <div
        class={cn(style.imageWrap, {
          [style.single]: isSingle,
        })}
        style={{          
          maxWidth: isSingle ? `${(window.innerHeight/height) * width}px` : `${width}px`,
        }}
        >
        {loaded ? (
          <div
            class={style.image}
            onClick={handleClick}
            style={{
              paddingBottom: `${100 * height/width}%`,
              backgroundImage: `url(${API}${url})`,
            }}
            >
            <Fullscreen class={style.fullscreen} />
          </div>
        ) : (
          <div style={{paddingBottom: `${100 * height/width}%`}}>
            <Loader />
          </div>
        )}
      </div>
    )
  }
}