import { h } from 'preact';
import style from './style.css';

const Item = ({channel, onClick}) => (
	<div class={style.item}>
        <img src={channel} alt={channel} onClick={onClick} />
	</div>
);

export default Item;
