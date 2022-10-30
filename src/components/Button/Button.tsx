import styles from './button.module.scss';

type Props = {
	type?: 'submit' | 'reset' | 'button' | undefined;
	onClick?: (event: React.MouseEvent) => void;
	style?: React.CSSProperties;
	title?: string;
	children?: React.ReactElement<any> | string;
};

const Button = ({
	type = 'button',
	onClick,
	style,
	children,
	title,
}: Props) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={styles.button}
			style={{ ...style }}
		>
			{children ? children : title}
		</button>
	);
};

export default Button;
