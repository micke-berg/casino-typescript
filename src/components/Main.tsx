import React, { useEffect, useState } from 'react';
import Button from './Button/Button';
import List from './List/List';
import Search from './Search/Search';
import Select from './Select/Select';
import StudioFilter from './StudioFilter/StudiofFilter';
import { Currencies, Games, Studios, Tags } from '../types';
import GameCategories from './GameCategories/GameCategories';

const Main = () => {
	const [data, setData] = useState<any>([]);
	const [tagsInFilteredGames, setTagsInFilteredGames] = useState<Tags[]>([]);
	const [filteredGames, setFilteredGames] = useState<Games[]>([]);
	const [selectedCurrency, setSelectedCurrency] = useState<string>('EUR');

	const {
		currencies,
		games,
		studios,
		tags,
	}: {
		currencies: Currencies[];
		games: Games[];
		studios: Studios[];
		tags: Tags[];
	} = data;

	const options = [
		{ value: 'EUR', name: 'EUR' },
		{ value: 'USD', name: 'USD' },
		{ value: 'mBTC', name: 'mBTC' },
	];

	const endpoint =
		'https://cubeia-code-tests.s3.eu-west-1.amazonaws.com/lobby.json';

	useEffect(() => {
		fetch(endpoint, {})
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				setData(myJson);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	const filterGamesByCurrency = (gamesToFilter: Games[]) => {
		const currencyFilteredGames = gamesToFilter?.filter((game) => {
			const currenciesForStudio = currencies.filter(
				(cur) => cur.studioId === game.studioId
			);
			return currenciesForStudio[0]?.currencies?.includes(
				selectedCurrency as never
			);
		});
		setFilteredGames(currencyFilteredGames);
	};

	useEffect(() => {
		filterGamesByCurrency(games);
	}, [selectedCurrency, games]);

	const handleResetToAllGames = () => {
		filterGamesByCurrency(games);
	};

	const handleTags = () => {
		// Filter only tags used in games
		const temp = games?.map((game) => game.gameTags).map((gt) => gt) || [];
		const gameTagsToOneArray = [].concat(...temp);
		const allGameTagsUsed = gameTagsToOneArray.filter(
			(el, i) => gameTagsToOneArray.indexOf(el) === i
		);

		const gameTags: Tags[] = [];

		for (let key of tags || []) {
			allGameTagsUsed.map((tg) => {
				if (tg === key.id) {
					gameTags.push({ ...key });
				}
			});
		}
		setTagsInFilteredGames(gameTags);
	};

	useEffect(() => {
		handleTags();
	}, [games, tags]);

	const handleFilterCategories = (id: number) => {
		// Filter games based on category
		const gamesFilteredByTags = games.filter((game) =>
			game.gameTags.includes(id as never)
		);
		setFilteredGames(gamesFilteredByTags);
	};

	return (
		<div className="wrapper">
			<h1
				style={{
					marginBottom: 40,
				}}
			>
				Casino
			</h1>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Search
					placeholder="Search games..."
					games={games}
					filterGamesByCurrency={filterGamesByCurrency}
				/>
				<Select
					options={options}
					value={selectedCurrency || ''}
					setSelectedValue={setSelectedCurrency}
				/>
			</div>

			{tags ? (
				<GameCategories
					tagsInFilteredGames={tagsInFilteredGames}
					handleFilterCategories={handleFilterCategories}
					handleResetToAllGames={handleResetToAllGames}
				/>
			) : null}

			{studios ? (
				<StudioFilter
					studios={studios}
					games={games}
					filterGamesByCurrency={filterGamesByCurrency}
				/>
			) : null}

			{games ? <List games={filteredGames} studios={studios} /> : null}
		</div>
	);
};

export default Main;
