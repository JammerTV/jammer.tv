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
		stream: null,
		feed: []
	}

	componentDidMount() {
		// https://api.jammer.tv/v1/get/cat/ludum-dare
		// https://api.jammer.tv/v1/get/cat/game-dev

		fetch('https://api.jammer.tv/v1/get/cat/game-dev')
			.then(r => r.json())
			.then(data => {
				//console.log(data)
				this.addFeed(data.streams);
			});
	}

	setStream = (value) => {
		this.setState({stream: value});
	}

	addFeed(feed) {
		console.log("addFeed", feed);
		if (!Array.isArray(feed) || (feed.length == 0)) {
			return;
		}
		console.log("adding...");

		let newState = {'feed': this.state.feed.concat(feed)};
		if (!this.state.stream) {
			newState.stream = feed[0];
		}

		this.setState(newState);
	}

	render(props, state) {
		var items = [];
		for (let idx = 0; idx < state.feed.length; ++idx) {
			items.push(<Item data={state.feed[idx]} onClick={this.setStream.bind(this, state.feed[idx])} />);
		}

		if (state.stream) {
			return (
				<div class={style.home}>
					<Video stream={state.stream} />
					<section>
						<h1>Game Development</h1>
						<p>Lets make games</p>
						{items}
					</section>
				</div>
			);
		}
		return (
			<div class={style.home}>
				Loading...
			</div>
		);
	}
}

export default Home;
