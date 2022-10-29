import React from 'react';
import Card from '../Card/Card';
import { Games, Studios } from '../../types';

type Props = {
	games: Games[];
	studios: Studios[];
	header: string;
};

const List = ({ games, studios, header }: Props) => {
	return (
		<div>
			<h2 className="header">{header}</h2>
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
