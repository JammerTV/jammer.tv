import { h } from 'preact';
import style from './style.css';
import Video from '../../components/video';

const Home = () => (
	<div class={style.home}>
		<Video channel="esl_sc2" />
	</div>
);

export default Home;
