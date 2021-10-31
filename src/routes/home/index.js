import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<iframe src="https://player.twitch.tv/?channel=esl_sc2&parent=new.jammer.tv" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
	</div>
);

export default Home;
