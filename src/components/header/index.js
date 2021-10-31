import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<div>
			<Link class={style.logo} activeClassName={style.active} href="/"><img src="/assets/logo/JammerLogo84W.png" /></Link>
			<nav>
				<Link activeClassName={style.active} href="/about">About</Link>
			</nav>
		</div>
	</header>
);

//<Link activeClassName={style.active} href="/profile">Me</Link>
//<Link activeClassName={style.active} href="/profile/john">John</Link>

export default Header;
