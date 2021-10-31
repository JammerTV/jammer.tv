import { h, Component } from 'preact';
import style from './style.css';
import Video from '../../components/video';
import Item from '../../components/item';

//const FeedURL = "https://api.jammer.tv/v1/get/cat/";
const Feeds = [
	{
		slug: "ludum-dare",
		url: "https://api.jammer.tv/v1/get/cat/ludum-dare",
		title: "Ludum Dare",
		description: "lets have fun"
	},
	{
		slug: "demoscene",
		url: "https://api.jammer.tv/v1/get/cat/demoscene",
		title: "Demoscene",
		description: "do things"
	},
	{
		slug: "game-jam",
		url: "https://api.jammer.tv/v1/get/cat/game-jam",
		title: "Game Jams",
		description: "jam"
	},
	{
		slug: "game-dev",
		url: "https://api.jammer.tv/v1/get/cat/game-dev",
		title: "Game Development",
		description: "dev"
	}
]


class Home extends Component {
	state = {
		stream: null,
		feed: []
	}

	componentDidMount() {
		Promise.all(Feeds.map(u => fetch(u.url)))
			.then(res => Promise.all(res.map(r => r.json())))
			.then(jsons => {
				console.log(jsons);
				this.setFeed(jsons);
			});

/*
		fetch('https://api.jammer.tv/v1/get/cat/game-dev')
			.then(r => r.json())
			.then(data => {
				//console.log(data)
				this.addFeed(data.streams);
			});*/
	}

	setStream = (value) => {
		this.setState({stream: value});
	}

	setFeed(feed) {
		let newState = {};

		// If no stream set
		if (!this.state.stream) {
			//console.log("no stream", feed);
			// Find an available stream
			for (let ft = 0; ft < feed.length; ++ft) {
				if (feed[ft].streams.length) {
					newState.stream = feed[ft].streams[0];
					continue;
				}
			}
		}

		newState.feed = feed;
		//console.log("setFeed", newState);
		this.setState(newState);
	}

	addFeed(feed) {
		//console.log("addFeed", feed);
		if (!Array.isArray(feed) || (feed.length == 0)) {
			return;
		}
		//console.log("adding...");

		let newState = {'feed': this.state.feed.concat(feed)};
		if (!this.state.stream) {
			newState.stream = feed[0];
		}

		this.setState(newState);
	}

	render(props, state) {
		var items = [];
		//console.log("Render", state);
		for (let ft = 0; ft < state.feed.length; ++ft) {
			//console.log("ft", ft);
			if (state.feed[ft].streams.length > 0) {
				items.push(<h1>{Feeds[ft].title}</h1>);
				items.push(<p>{Feeds[ft].description}</p>);
				for (let idx = 0; idx < state.feed[ft].streams.length; ++idx) {
					items.push(<Item data={state.feed[ft].streams[idx]} onClick={this.setStream.bind(this, state.feed[ft].streams[idx])} />);
				}
			}
		}

		if (state.stream) {
			return (
				<div class={style.home}>
					<Video stream={state.stream} />
					<section>
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

/*
<h1>Game Development</h1>
<p>Lets make games</p>
*/

export default Home;
