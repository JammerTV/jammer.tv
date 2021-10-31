import { h } from 'preact';
import {useEffect, useState} from "preact/hooks";
import style from './style.css';

const About = () => {
	return (
		<div class={style.about}>
			<div>
				<h1>About Jammer.tv</h1>
				<p>Jammer.tv is an aggregator of live video content. We primarily track Game Jams, Game Development, and Demoscene content, but in general we're interested in showcasing creativity with computers and code.</p>
				<p>Jammer.tv began as LDTV, a spinoff of the <a href="https://ludumdare.com">Ludum Dare</a> game jam event, aggregating live video from popular streaming platforms like Twitch and YouTube.</p>
				<p>The streams aggregated by Jammer.tv can be seen on Ludum Dare's event website: <a href="https://ldjam.com">ldjam.com</a></p>
			</div>
		</div>
	);
}

export default About;
