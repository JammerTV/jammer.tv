import { h } from 'preact';
import style from './style.css';

const Video = ({stream}) => (
	<div class={style.video}>
        <iframe src={stream.url_embed.replace("{parent}", "new.jammer.tv")} frameborder="0" allow="autoplay; fullscreen" scrolling="no"></iframe>
	</div>
);

// <iframe src={"https://player.twitch.tv/?channel="+channel+"&parent=new.jammer.tv"} frameborder="0" allow="autoplay; fullscreen" scrolling="no"></iframe>

export default Video;
