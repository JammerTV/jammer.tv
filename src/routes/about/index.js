import { h } from 'preact';
import {useEffect, useState} from "preact/hooks";
import style from './style.css';

const About = () => {
	return (
		<div class={style.about}>
			<h1>About Jammer.tv</h1>
			<p>[Jammer.tv](https://jammer.tv) is an aggregator of live and archived video content. We skew towards Game Jams, Game Development, and Demoscene related content, but in general we're interested in showcasing creativity with computers.</p>
			<p>Jammer.tv began as LDTV, a loose spinoff of the [Ludum Dare](http://ludumdare.com) game jam event, aggregating live video from popular streaming platforms like Twitch, YouTube, Hitbox, Beam, and others. Today Jammer.tv pulls the majority of its content from Twitch and YouTube, while providing native streaming for select events via its CDN partners.</p>
		</div>
	);
}

export default About;
