import { h } from 'preact';
import style from './style.css';

const Item = ({data, onClick}) => (
	<div class={style.item}>
        <img src={data.thumbnail_720p} alt={data.user_name} onClick={onClick} />
	</div>
);

export default Item;
