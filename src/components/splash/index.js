import {
  h,
  Component,
} from "preact"
import {randomOf} from "globals"

import cn from "classnames"
import style from "./style.scss"

export default class Splash extends Component {
  state = {
    step: 5,

    colors: [
      // "black",
      "#0c0409",
      "#242429",
      "#53505a",
      "#f5e8e0",
      "#bf604b",
      // "#dd9a60",
      "#ffbd42",
      // "#f7c36d",
      // "white",
    ],
  }

  componentDidMount() {
    this.setState({
      ...this.handleColors()
    })

    let time = 500

    for (let i = 0; i <= this.state.step; i++) {
      this.handleSplash(
        this.state.step - (i+1),
        time * i,
      )
    }

  }
  handleSplash = (step, time) => {
    setTimeout(() => this.setState({
      step, 
    }), time)
  }
  handleColors = () => {
    const {colors} = this.state

    const main = randomOf(colors)
    const background = randomOf(colors.filter(c => c !== main))

    return {main, background}
  }

  render({color="#bf604b"}, {step, main, background}) {
    return step > -1 && (
      <svg class={style.svg}>
        <rect
          class={cn(style.rectangle, {
            [style.hidden]: step === 0,
          })}
          fill={step >= 4 ? "#fff" : background}
          />
        <g
          class={cn(style.logo, {
            [style.hidden]: step >= 4,            
          })}
          >
          <path
            class={cn(style.trapezoid, {
              [style.hidden]: step === 0,
            })}
            fill={main}
            d="M0,74 L44,-0 L65,35.5L43.5,74 L0,74 Z"
            />
          <path
            class={cn(style.triangle, {
              [style.split]: step > 1,
              [style.hidden]: step === 0,
            })}
            fill={main}
            d="M16.1,0.5L33,29 L0.5,29 L16.1,0.5Z"
            />
        </g>
      </svg>
    )
  }
}