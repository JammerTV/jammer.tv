import { h, Component } from 'preact';
import style from './style.css';
import Video from '../../components/video';
import Item from '../../components/item';

const StreamFeeds = [
	"https://api.jammer.tv/v1/get/cat/ludum-dare",
	"https://api.jammer.tv/v1/get/cat/demoscene",
	"https://api.jammer.tv/v1/get/cat/game-jam",
	"https://api.jammer.tv/v1/get/cat/game-dev"
];

class Home extends Component {
	state = {
		channel: "esl_sc2",
		feed: []
	}

	componentDidMount() {
		// https://api.jammer.tv/v1/get/cat/ludum-dare
		// https://api.jammer.tv/v1/get/cat/game-dev

		fetch('https://api.jammer.tv/v1/get/cat/game-jam')
			.then(r => r.json())
			.then(data => {
				//console.log(data)
				this.addFeed(data.streams);
			});
	}

	setChannel = (value) => {
		console.log("setChannel: "+value.srcElement.alt, value);
		this.setState({channel: value.srcElement.alt});
	}

	addFeed(feed) {
		console.log("addFeed", feed);
		if (!Array.isArray(feed) || (feed.length == 0)) {
			return;
		}

		console.log("state before", this.state);
		this.setState({'feed': this.state.feed.concat(feed)}, (feed) => {
			console.log("state after", this.state);

			// if no channel is set, use the first one
			if (this.state.channel == "") {
				this.setState({channel: feed[0].user_slug});
			}
		});
	}

	render(props, state) {
		var items = [];
		console.log("Render Feed", state.feed);
		for (let idx = 0; idx < state.feed.length; ++idx) {
			items.push(<Item channel={state.feed[idx].user_slug} onClick={this.setChannel} />);
		}
		/*
		items.push(<Item channel="esl_sc2" onClick={this.setChannel} />);
		items.push(<Item channel="monstercat" onClick={this.setChannel} />);
		*/

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
