import {h} from "preact"
import moment from "moment"

import View from "components/view"

import Avatar from "images/avatar.png"

import cn from "classnames"
import style from "./style"

const About = () => (
  <View>
    <div class={style.view}>
      <div class={style.avatar}>
        <img src={Avatar} />
      </div>
      <h2>about me</h2>
      <h1 class={style.copy}>I’m Greg Bak (Grzegorz Bąk)</h1>
      <p class={style.copy}>I’m a {moment("19940728", "YYYYMMDD").fromNow(true)} old Software Engineer and a self-taught CGI generalist based in Poland. Currently I'm in the middle of my Master's degree (Computer Science) and I'll graduate in February 2019.<br/>In my free time I learn languages, climb rocks and sing in a chamber choir <a class={style.link} target="_blank" href="http://dysonans.pl/en/" title="Dysonans Chamber Choir">(check it out)</a>. Unfortunately, I'm unable to perform all of that at the same time.</p>
      <p class={style.copy}>Being heavily influenced by the Japanese culture, I strive for the balance of precise technical thinking and artistic mindset.</p>

      <h2 class={style.smallDip}>my timeline</h2>
      <ul class={style.timeline}>
        <li>
          <p class={style.date}>7.1994</p>
          <h3 class={style.title}>earth arrival</h3>
        </li>
        <li>
          <p class={style.date}>7.2011&mdash;2013</p>
          <h3 class={style.title}>I was a concept 3d artist and animator. I worked on early alpha's character models and structures.</h3>
          <a class={style.location} target="_blank" href="https://www.unvanquished.net">@Unvanquished Development <span>(https://www.unvanquished.net)</span></a>
        </li>
        <li>
          <p class={style.date}>6.2012&mdash;10.2013</p>
          <h3 class={style.title}>I was a volunteer UI translator (polish team).</h3>
          <a class={style.location} target="_blank" href="https://www.blender.org">@Blender Institute <span>(https://www.blender.org)</span></a>
        </li>
        <li>
          <p class={style.date}>10.2013&mdash;3.2017</p>
          <h3 class={style.title}>I graduated as a Bachelor of Engineering, Computer Science.</h3>
          <div class={style.location}>@Adam Mickiewicz University, Poznań</div>
        </li>
        <li>
          <p class={style.date}>4.2014&mdash;10.2014</p>
          <h3 class={style.title}>I worked as a junior backend developer. I worked on plugins that patched-in missing functionality of database exports.</h3>
          <a class={style.location} target="_blank" href="http://e-kwarta.pl">@Kwarta <span>(http://e-kwarta.pl)</span></a>
        </li>
        <li>
          <p class={style.date}>10.2014&mdash;10.2015</p>
          <h3 class={style.title}>I worked freelance, as a designer and fullstack developer. I had to migrate previous CMS to a new Wordpress-based solution.</h3>
          <a class={style.location} target="_blank" href="http://www.da.poznan.dominikanie.pl">@DA Dominikanie <span>(http://www.da.poznan.dominikanie.pl)</span></a>
        </li>
        <li>
          <p class={style.date}>7.2015&mdash;5.2016</p>
          <h3 class={style.title}>I worked as a junior frontend developer in React.</h3>
          <a class={style.location} target="_blank" href="http://uxdream.com">@UX Dream <span>(http://uxdream.com)</span></a>
        </li>
        <li>
          <p class={style.date}>9.2016&mdash;1.2017</p>
          <h3 class={style.title}>I worked freelance. I designed identification, the website, and developed a Wordpress solution for a web-based newspaper.</h3>
          <a class={style.location} target="_blank" href="http://fundamentum.com.pl">@Fundamentum <span>(http://fundamentum.com.pl)</span></a>
        </li>
        <li>
          <p class={style.date}>5.2017&mdash;5.2018</p>
          <h3 class={style.title}>I worked as a fullstack web developer. I introduced ESNext, React and an update to the existing project lifecycle.</h3>
          <a class={style.location} target="_blank" href="http://crafton.eu">@Crafton <span>(http://crafton.eu)</span></a>
        </li>
        <li>
          <p class={style.date}>10.2017&mdash;now</p>
          <h3 class={style.title}>I'm finishing my Master of Engineering, Computer Science</h3>
          <div class={style.location}>@Adam Mickiewicz University, Poznań</div>
        </li>
        <li>
          <p class={style.date}>6.2018&mdash;now</p>
          <h3 class={style.title}>I'm working as a regular frontend developer in React.</h3>
          <a class={style.location} target="_blank" href="https://sii.pl">@Sii_Polska <span>(https://sii.pl)</span></a>
        </li>
      </ul>

      <h2 class={style.bigDip}>my skills</h2>
      <ul class={style.skills}>
        <h3>operating systems</h3>
        <li class={style.expert}>macOS</li>
        <li class={style.advanced}>UNIX</li>
        <li class={style.advanced}>Windows</li>
      </ul>
      <ul class={style.skills}>
        <h3>web stack</h3>
        <li class={style.expert}>SASS (with BEM)</li>
        <li class={style.advanced}>React/Preact with Redux</li>
        <li class={style.intermediate}>(with Saga, rx.js too)</li>
        <li class={style.intermediate}>Typescript</li>
        <li class={style.advanced}>ES7</li>
        <li class={style.intermediate}>SQL</li>
      </ul>
      <ul class={style.skills}>
        <h3>code</h3>
        <li class={style.advanced}>Golang</li>
        <li class={style.intermediate}>Python</li>
        <li class={style.intermediate}>C#, C++</li>
        <li class={cn(style.intermediate, style.butwhytho)}>PHP</li>
      </ul>
      <ul class={style.skills}>
        <h3>graphics</h3>
        <li class={style.expert}>Photoshop</li>
        <li class={style.advanced}>Blender with Cycles</li>
        <li class={style.learning}>Substance Painter</li>
        <li class={style.learning}>Marvelous Designer</li>
      </ul>
      <ul class={style.skills}>
        <h3>languages</h3>
        <li class={style.expert}>Polish</li>
        <li class={style.advanced}>English</li>
        <li class={style.intermediate}>German</li>
        <li class={style.basic}>Japanese</li>
        <li class={cn(style.basic, style.loremipsum)}>Latin</li>
      </ul>
    </div>
    <div class={style.theEnd}>
      <div class={style.center}>
        <h2>Thanks for stopping by!</h2>
        <p>
          If you want to say hello or ask a question,<br/>
          feel free to contact me at <a href="mailto:gregbak@me.com?subject= Portfolio feedback |&body=Hello Greg," title="my contact email">gregbak@me.com</a>
        </p>
      </div>
    </div>
  </View>
)

export default About