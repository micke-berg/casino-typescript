import { Tags } from '../../types';
import Button from '../Button/Button';

type Props = {
	tagsInFilteredGames: Tags[];
	handleFilterCategories: (id: number) => void;
	handleResetToAllGames: () => void;
};

const GameCategories = ({
	tagsInFilteredGames,
	handleFilterCategories,
	handleResetToAllGames,
}: Props) => {
	return (
		<div>
			<h2 className="header">Categories</h2>
			<div className="grid">
				{tagsInFilteredGames?.map((tag) => (
					<Button key={tag.id} onClick={() => handleFilterCategories(tag.id)}>
						{tag.name}
					</Button>
				))}
				<Button
					title="All games"
					style={{
						backgroundColor: 'orange',
					}}
					onClick={() => handleResetToAllGames()}
				/>
			</div>
		</div>
	);
};

export default GameCategories;
