import Image from 'next/image';
import Title from '../Title/Title';
import styles from './advantages.module.scss';
import { advantageCards } from '@/constants/GetAdvantagesItems';
import { useTranslations } from 'next-intl';

function Advantages() {
  const t = useTranslations("advantages")
  return (
    <section className={styles.advantages}>
      <Title title={t("title")} />
      <div className={styles.cards}>
        {advantageCards.map((item, index) => (
          <div key={index} className={styles.card}>
            <Image className={styles.icon} src={item.img} alt='icon' width={96} height={96} />
            <p className={styles.subtitle}>{t(item.title)}</p>
            <p className={styles.text}>{t(item.text)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Advantages;
