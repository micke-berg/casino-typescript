import React from 'react';
import styles from './studioFilter.module.scss';
import { Studios, Games } from '../../types';

type Props = {
	studios: Studios[];
	games: Games[];
	filterGamesByCurrency: (Game: Games[]) => void;
	style?: React.CSSProperties;
};

const StudioFilter = ({
	style,
	studios,
	games,
	filterGamesByCurrency,
}: Props) => {
	const handleFilterStudio = (id: number) => {
		const gamesFilteredByStudio = games?.filter((game) => game.studioId === id);
		filterGamesByCurrency(gamesFilteredByStudio);
	};

	return (
		<div className={styles.container}>
			{studios?.map((studio) => (
				<div
					key={studio.id}
					className={styles.item}
					style={{ ...style }}
					onClick={() => handleFilterStudio(studio.id)}
				>
					<img className={styles.img} src={studio.imageUrl} alt={studio.name} />
				</div>
			))}
		</div>
	);
};

export default StudioFilter;
