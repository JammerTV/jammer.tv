import { h } from 'preact';
import style from './style.css';

const Video = ({channel}) => (
	<div class={style.video}>
        <iframe src={"https://player.twitch.tv/?channel="+channel+"&parent=new.jammer.tv"} frameborder="0" allowfullscreen="true" allow="autoplay; fullscreen" scrolling="no"></iframe>
	</div>
);

export default Video;
