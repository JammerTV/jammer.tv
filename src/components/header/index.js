import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<img src="/assets/logo/JammerLogo84W.png" />
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/about">About</Link>
		</nav>
	</header>
);

//<Link activeClassName={style.active} href="/profile">Me</Link>
//<Link activeClassName={style.active} href="/profile/john">John</Link>

export default Header;
