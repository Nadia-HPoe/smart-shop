import Image from 'next/image';
import Title from '../Title/Title';
import styles from './advantages.module.scss';
import { advantageCards } from '@/constants/GetAdvantagesItems';

function Advantages() {
  return (
    <section className={styles.advantages}>
      <Title title='advantages' />
      <div className={styles.cards}>
        {advantageCards.map((item, index) => (
          <div key={index} className={styles.card}>
            <Image className={styles.icon} src={item.img} alt='icon' width={96} height={96} />
            <p className={styles.subtitle}>{item.title}</p>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Advantages;
