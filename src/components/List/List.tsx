import Card from '../Card/Card';
import { Games, Studios } from '../../types';

type Props = {
	games: Games[];
	studios: Studios[];
};

const List = ({ games, studios }: Props) => {
	return (
		<div>
			<h2 className="header">Games</h2>
			<ul
				className="grid"
				style={{
					listStyle: 'none',
					paddingLeft: 0,
				}}
			>
				{games?.map((game) => (
					<Card
						key={game.id}
						title={game.name}
						subTitle={
							studios.filter((studio) => studio.id === game.studioId)[0].name
						}
						imageUrl={game.imageUrl}
					/>
				))}
			</ul>
		</div>
	);
};

export default List;
