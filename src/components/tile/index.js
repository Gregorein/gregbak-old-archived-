import {h} from "preact"
import moment from "moment"

import cn from "classnames"
import style from "./style"

const Tile = ({project, overrideClass}) => (
  <a
    class={cn(style.tile, overrideClass)}
    href={project.href}
    >
    <div
      class={style.thumb}
      style={{
        backgroundImage: `url(${API}${project.thumbnail})`
      }}
      />
    <div class={style.header}>
      <h2 class={style.title}>
        {project.title}
      </h2>
      <p class={style.date}>
        {moment.unix(project.date).fromNow()}
      </p>
    </div>
  </a>
)

export default Tile