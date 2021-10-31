import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Jammer.tv</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/about">About</Link>
		</nav>
	</header>
);

//<Link activeClassName={style.active} href="/profile">Me</Link>
//<Link activeClassName={style.active} href="/profile/john">John</Link>

export default Header;
