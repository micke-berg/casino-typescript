import styles from './select.module.scss';
import { Options } from '../../types';

type Props = {
	setSelectedValue: (value: string) => void;
	options: Options[];
	value: string;
	style?: React.CSSProperties;
};

const Select = ({ setSelectedValue, options, value, style }: Props) => (
	<select
		className={styles.select}
		style={style}
		value={value || ''}
		onChange={(e) => setSelectedValue(e.target.value)}
	>
		{options.map((option) => (
			<option value={option.value}>{option.name}</option>
		))}
	</select>
);

export default Select;
