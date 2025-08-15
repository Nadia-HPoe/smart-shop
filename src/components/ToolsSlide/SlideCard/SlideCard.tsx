'use client';
import styles from './slideCard.module.scss';
interface SlideCardProps {
  title: string;
  text: string;
  img: string;
}

const SlideCard: React.FC<SlideCardProps> = ({ title, text, img }) => {
  const transformGoogleDriveLink = (url: string) => {
    const match = url.match(/\/d\/(.*?)\//);
    return match ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000` : url;
  };

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url('${transformGoogleDriveLink(img)}')` }}
    >
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{text}</p>
    </div>
  );
};

export default SlideCard;
