import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<div class={style.video}>
			<iframe src="https://player.twitch.tv/?channel=esl_sc2&parent=new.jammer.tv" frameborder="0" allowfullscreen="true" allow="autoplay" scrolling="no"></iframe>
		</div>
	</div>
);

export default Home;
