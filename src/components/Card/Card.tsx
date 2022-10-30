import styles from './card.module.scss';

type Props = {
	imageUrl?: string;
	title?: string;
	subTitle?: string;
	style?: React.CSSProperties;
	onClick?: (event: React.MouseEvent) => void;
};

const Card = ({ title, subTitle, imageUrl, style, onClick }: Props) => {
	return (
		<li className={styles.card} style={{ ...style }} onClick={onClick}>
			<img className={styles.img} src={imageUrl} alt={title}></img>
			<div className={styles.info}>
				<div className={styles.title}>{title}</div>
				<div className={styles.subTitle}>{subTitle}</div>
			</div>
		</li>
	);
};

export default Card;
