import moment from "moment"

import View from "components/view"

import Avatar from "images/avatar.png"

import cn from "classnames"
import style from "./style"

const About = () => (
	<View title="Greg Bak | about">
		<div class={style.view}>
			<div class={style.avatar}>
				<img src={Avatar} />
			</div>
			<h2>about me</h2>
			<h1 class={style.copy}>I’m Greg Bak (Grzegorz Bąk)</h1>
			<p class={style.copy}>I’m a {moment("19940728", "YYYYMMDD").fromNow(false)} old Software Engineer (MEng, Computer Science) and a self-taught CGI generalist based in Poland. In my free time I learn languages, climb rocks and play piano. Unfortunately, I'm unable to perform all of that at the same time.</p>

			<p class={style.copy}>{moment("20140401", "YYYYMMDD").fromNow(false)} ago I started as a backend junior developer and after a lot of work I created my first button through the spaghetti-like code of an ancient PHP framework. I still shudder at that memory, but I recall that wasn't my first time tinkering with code – I remember how {moment("20040728", "YYYYMMDD").fromNow(false)} I opened my space game save file in a resource editor and without much understanding I changed different values until I found the right one, making my space pilot so rich it broke the simple economy of the simulation. Few years later, in Junior High my friend and I created a simple game. It had two different characters, an island and a lot of crazy net-code, that allowed us to develop this game over the wire – it's not a lot given today's standars, but it gave me the spark I needed.</p>

			<p class={style.copy}>In my family being an artist is a norm, yet I ended up being a developer. Given that background, I strive for the balance of precise technical thinking and artistic mindset. I'm heavily influenced by simplicity of the Japanese design culture – their work is created with user in mind, and that's what I do as well.</p>

			<h2 class={style.smallDip}>my achievements</h2>
				<p class={style.achievement}>Bachelor of Engineering – <span class={style.thesis}>"Motion Blending in virtual reality"</span></p>
				<p class={style.achievement}>Master of Engineering – <span class={style.thesis}>"World-state in Augmented Reality"</span></p>

			<h2 class={style.smallDip}>my timeline</h2>
			<ul class={style.timeline}>
				<li>
					<p class={style.date}>7.1994</p>
					<h3 class={style.title}>earth arrival</h3>
				</li>

				<li>
					<p class={style.date}>7.2011&mdash;2013</p>          
					<h3 class={style.title}>I was a concept 3d artist and animator.</h3>

					<p class={style.description}>I worked on concept art and early alpha's models of characters and structures.<br />I documented source artwork and oversaw realisation of concept art.<br />I analised source-code and optimised animations accordingly</p>
					<p class={style.tech}>C++, Python, Blender, Adobe Photoshop, Q3 Engine dev-tools, SVN</p>

					<a class={style.location} target="_blank" href="https://www.unvanquished.net">@Unvanquished Development <span>(https://www.unvanquished.net)</span></a>
				</li>

				<li>
					<p class={style.date}>6.2012&mdash;10.2013</p>
					<h3 class={style.title}>I was a volunteer UI translator (polish team).</h3>

					<p class={style.description}>I translated UI from english to polish, maintained existing translations,<br />contacted Blender users to improve the quality of translations.</p>
					<p class={style.tech}>Python, bash, git</p>

					<a class={style.location} target="_blank" href="https://www.blender.org">@Blender Institute <span>(https://www.blender.org)</span></a>
				</li>

				<li>
					<p class={style.date}>10.2013&mdash;3.2017</p>
					<h3 class={style.title}>I graduated my Bachelor's of Engineering, Computer Science, with thesis "Motion Blending in virtual reality"</h3>
					<div class={style.location}>@Adam Mickiewicz University, Poznań</div>
				</li>

				<li>
					<p class={style.date}>4.2014&mdash;10.2014</p>
					<h3 class={style.title}>I worked as a junior backend developer.</h3>

					<p class={style.description}>I worked on plugins that patched-in missing functionality of database exports,<br />analised existing database structure and setup a prototyping sandbox<br />implemented export scripts with multiple file-types,<br />reworked UI to custom user workflow.</p>
					<p class={style.tech}>Javascript, MySQL, PHP, Varico+EPESI, bash, VirtualBox</p>

					<a class={style.location} target="_blank" href="http://e-kwarta.pl">@Kwarta <span>(http://e-kwarta.pl)</span></a>
				</li>

				<li>
					<p class={style.date}>10.2014&mdash;10.2015</p>
					<h3 class={style.title}>I worked as a freelance designer and fullstack developer.</h3>

					<p class={style.description}>I migrated previous CMS to a new Wordpress-based solution,<br />I worked with client on a design that would fit client's upcoming rebranding,<br />I maintained backups and provided support for the system.</p>
					<p class={style.tech}>Wordpress, PHP, Javascript, SASS, gulp, git</p>

					<a class={style.location} target="_blank" href="http://www.da.poznan.dominikanie.pl">@DA Dominikanie <span>(http://www.da.poznan.dominikanie.pl)</span></a>
				</li>

				<li>
					<p class={style.date}>10.2014&mdash;10.2015</p>
					<h3 class={style.title}>I worked as a freelance designer and fullstack developer.</h3>

					<p class={style.description}>I worked with client on a family-friendly design,<br />I maintained backups and provided support for the system.</p>
					<p class={style.tech}>Wordpress, PHP, Javascript, SASS, gulp, git</p>

					<a class={style.location} target="_blank" href="http://younglife.pl">@Young Life Poland <span>(http://younglife.pl)</span></a>
				</li>

				<li>
					<p class={style.date}>7.2015&mdash;5.2016</p>
					<h3 class={style.title}>I worked as a junior frontend developer in React.</h3>

					<p class={style.description}>I worked on Wordpress websites for small corporate clients,<br />sliced & implemented UI designs.</p>
					<p class={style.tech}>Wordpress, PHP, SASS, gulp, git, Trello</p>
				</li>
				<li>
					<p class={style.description}>I worked on a single page CMS app in a small team,<br />sliced & implemented UI designs,<br />took part in code refactorisations.</p>
					<p class={style.tech}>Javascript, React, SASS, Webpack, git, Jenkins CI, Trello</p>

					<a class={style.location} target="_blank" href="http://uxdream.com">@UX Dream <span>(http://uxdream.com)</span></a>
				</li>

				<li>
					<p class={style.date}>9.2016&mdash;1.2017</p>
					<h3 class={style.title}>I worked as a freelance designer and fullstack developer.</h3>
					<p class={style.description}>I designed identification and website for a web-based newspaper,<br />I maintained backups and provided support for the system.</p>
					<p class={style.tech}>Wordpress, PHP, Javascript, SASS, gulp, git</p>
					<a class={style.location} target="_blank" href="http://fundamentum.com.pl">@Fundamentum <span>(http://fundamentum.com.pl)</span></a>
				</li>

				<li>
					<p class={style.date}>5.2017&mdash;5.2018</p>
					<h3 class={style.title}>I worked as a fullstack web developer</h3>

					<p class={style.description}>I worked on Wordpress websites for small corporate clients,<br />sliced & implemented UI designs.</p>
					<p class={style.tech}>Wordpress, PHP, SASS, gulp, git</p>
				</li>
				<li>
					<p class={style.description}>I worked on a single page app search-engine app,<br />created and maintained UML diagrams for communication with backend,<br />sliced & implemented UI designs,<br />took part in code refactorisations.</p>
					<p class={style.tech}>Javascript, React, SASS, Webpack, git</p>
				</li>
				<li>
					<p class={style.description}>I worked on a single page app cryptocurrency trading market,<br />created and maintained UML diagrams for communication with backend,<br />sliced & implemented UI designs,<br />took part in code refactorisations.</p>
					<p class={style.tech}>Typescript, React, SASS, Websocket, Webpack, git</p>
				</li>
				<li>
					<p class={style.description}>I introduced ESNext, React and an update to the existing project lifecycle.</p>

					<a class={style.location} target="_blank" href="http://crafton.eu">@Crafton <span>(http://crafton.eu)</span></a>
				</li>

				<li>
					<p class={style.date}>10.2019&mdash;10.2020</p>
					<h3 class={style.title}>I am working as a freelance designer and fullstack developer.</h3>

					<p class={style.description}>I migrated previous CMS to a light, frontend-only solution,<br />I worked with client on a design that would fit client's upcoming rebranding,<br />I implemented RWD and PWA,<br />I maintained backups and provided support for the system.</p>
					<p class={style.tech}>Javascript, SASS, gulp, git</p>

					<a class={style.location} target="_blank" href="http://www.dapoznan.pl">@DA Poznań <span>(http://www.dapoznan.pl)</span></a>
				</li>

				<li>
					<p class={style.date}>10.2017&mdash;2.2020</p>
					<h3 class={style.title}>I graduated my Master's of Engineering, Computer Science, Computer Science, with thesis "World-state in Augmented Reality"</h3>
					<div class={style.location}>@Adam Mickiewicz University, Poznań</div>
				</li>

				<li>
					<p class={style.date}>6.2018&mdash;now</p>
					<h3 class={style.title}>I'm working as a fullstack engineer in Javascript.</h3>

					<p class={style.description}>I've worked with my team on a Business Logic BL/CRM single-page app for an international client:<br />I've kept contact with client,<br />worked on project requirements analysis,<br />designed and implemented front-end,<br />created multiple alternative designs for UI,<br />managed code refactorisation,<br />created a complex in-browser WYSIWYG text editor,<br />implemented a PDF exporter for said editor</p>
					<p class={style.tech}>Javascript, React, Redux, SASS, Express, Webpack, Gitlab CI/CD, Jira</p>
				</li>
				<li>
					<p class={style.description}>I've worked in a team on a customer service portal for an international client with 50m+ users:<br />I've helped creating boilerpalte micro-services,<br />implemented a full, dynamic i18n support,<br />implemented a User-Agent/Platform-based code splitter for optimisation,<br />performed demos and workshops for client,<br />implemented full test coverage,<br />worked closely with UX/UI team on designs with RWD and accessibility in mind,<br />prepared documentation for business decisions.</p>
					<p class={style.tech}>Javascript, Typescript, Jest, Handlebars.js, SASS, Express, Polyglot.js, Webpack, Eslint & Tslint, Docker, Kubernetes, Gitlab CI/CD, Jira, Confluence</p>
				</li>
				<li>
					<p class={style.description}>Worked on a retirement pension calculation&management portal for an international client:<br />implemented UI with UX and accessibility in mind,<br />maintained high test coverage for UI library,<br />designed and built new views with mobile and tablet platforms as a target.</p>
					<p class={style.tech}>Javascript, React, Jest&Enzyme, Sass, Webpack, Yarn, Redux w/Thunk, Eslint, Docker, Gitlab CI/CD, Jira, Confluence</p>
				</li>
				<li>
					<p class={style.description}>I joined a team with an ongoing payment-provider project:<br />I've developed new functionalities and supported existing ones,<br />managed high test coverage,<br />sliced and implmeneted new views in a highly complex platform</p>
					<p class={style.tech}>Javascript, Typescript, React, Jest&Enzyme, Sass, Webpack, Yarn, Eslint & Tslint, Docker, Gitlab CI/CD, Jira, Confluence</p>
				</li>
				<li>
					<p class={style.description}>I joined an internal parking-place management app:<br/>I've implemented new functionalities,<br />rewritten all existing views and implemented a new, mobile friendly UI library,<br />implemented cutting-edge features like location-based night-mode.</p>
					<p class={style.tech}>Javascript, React, Eslint, Hooks, Docker, Yarn, Gitlab CI/CD, Jira</p>
				</li>
				<li>
					<p class={style.description}>I joined a rebranding project of a national marketplace provider,<br />I've rewritten existing views to apply a cutting-edge UI,<br />maintained and worked on a legacy-class code and libraries,<br />worked with UI team to re-work unsupported features<br />maintained feature-parity on a complex 9-domain project<br />written code for with a maximal browser coverage in mind.</p>
					<p class={style.tech}>PHP, JQuery, Javascript, gulp, grunt, webpack, docker</p>

					<a class={style.location} target="_blank" href="https://sii.pl">@Sii_Polska <span>(https://sii.pl)</span></a>
				</li>
			</ul>

			<h2 class={style.bigDip}>my skills</h2>
			<ul class={style.skills}>
				<h3>operating systems</h3>
				<li class={style.expert}>macOS</li>
				<li class={style.advanced}>UNIX</li>
				<li class={style.advanced}>Windows</li>
				<li class={style.advanced}>bootloaders & kext patching</li>
				<li class={style.intermediate}>emulation & virtualisation</li>
			</ul>
			<ul class={style.skills}>
				<h3>web stack</h3>
				<li class={style.expert}>SASS (with BEM)</li>
				<li class={style.advanced}>React/Preact</li>
				<li class={style.basic}>Angular 2+</li>
				<li class={style.advanced}>React hooks, Redux with Thunk</li>
				<li class={style.intermediate}>Saga, Axios, RX.js</li>
				<li class={style.advanced}>Typescript & ES7/ESNext, with linters</li>
				<li class={style.advanced}>Webpack</li>
				<li class={style.advanced}>Jest & Enzyme, Selenium & BrowserStack</li>
				<li class={style.intermediate}>Node.js, Express</li>
				<li class={style.intermediate}>MySQL/MSSQL, Mongo</li>
			</ul>
			<ul class={style.skills}>
				<h3>code</h3>
				<li class={style.advanced}>Golang</li>
				<li class={style.intermediate}>Python</li>
				<li class={style.intermediate}>C#, C++</li>
				<li class={style.intermediate}>Swift, Obj-C</li>
				<li class={style.intermediate}>ReactNative</li>
				<li class={style.intermediate}>bash/zsh</li>
				<li class={cn(style.intermediate, style.butwhytho)}>PHP 7</li>
			</ul>
			<ul class={style.skills}>
				<h3>project & engineering</h3>
				<li class={style.advanced}>Pen & Paper</li>
				<li class={style.intermediate}>Figma, Invision, Sketch, Zeplin, Webflow</li>
				<li class={style.advanced}>Git, Mercurial, SVN</li>
				<li class={style.advanced}>Agile, Scrum, Kanban</li>
				<li class={style.intermediate}>Github, Gitlab, Bitbucket,</li>
				<li class={style.intermediate}>Xcode, Vim w/g++ & gdb</li>
				<li class={style.advanced}>UML & Application Architecture Design</li>
				<li class={style.intermediate}>Redmine, Jenkins CI, Gitlab CI, Github CI</li>
			</ul>
			<ul class={style.skills}>
				<h3>graphics</h3>
				<li class={style.expert}>Adobe Photoshop</li>
				<li class={style.advanced}>Adobe Experience Designer</li>
				<li class={style.intermediate}>Adobe Illustrator</li>
				<li class={style.advanced}>Blender with Cycles/EEVEE render engines</li>
				<li class={style.learning}>Substance Painter</li>
				<li class={style.learning}>Marvelous Designer</li>
			</ul>
			<ul class={style.skills}>
				<h3>motion graphics</h3>
				<li class={style.advanced}>Adobe Premiere Pro</li>
				<li class={style.learning}>Adobe After Effects</li>
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
				<h2>I'm open to work!</h2>
				<p>
					Say hello at <a href="mailto:gregbak@me.com?subject= Portfolio feedback |&body=Hello Greg," title="my contact email">gregbak@me.com</a>
				</p>
			</div>
		</div>
	</View>
)

export default About