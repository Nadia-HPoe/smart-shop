'use client';
import styles from './slideCard.module.scss';

interface SlideCardProps {
  title: string;
  description: string;
  id: string | number;
  img?: string | null;
}

const SlideCard: React.FC<SlideCardProps> = ({ title, description, id, img }) => {
  return (
    <div
      className={styles.card}
      data-id={id}
      style={img ? { backgroundImage: `url(${img})` } : { backgroundColor: '#7C7C7C' }}
    >
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default SlideCard;
