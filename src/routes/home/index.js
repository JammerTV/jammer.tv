import { h, Component } from 'preact';
import style from './style.css';
import Video from '../../components/video';
import Item from '../../components/item';

//const Home = () => {
class Home extends Component {
	state = {
		channel: "esl_sc2"
	}

	setChannel = (value) => {
		console.log("click: "+value.srcElement.alt, value);
		this.setState({channel: value.srcElement.alt});
	}

	render(props, state) {
		var items = [];
		items.push(<Item channel="esl_sc2" onClick={this.setChannel} />);
		items.push(<Item channel="monstercat" onClick={this.setChannel} />);

		return (
			<div class={style.home}>
				<Video channel={state.channel} />
				<section>
					<h1>Ludum Dare</h1>
					{items}
				</section>
			</div>
		);
	}
}

export default Home;
