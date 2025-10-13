import Image from 'next/image';
import styles from './profit.module.scss';
import Title from '../Title/Title';
import { useTranslations } from 'next-intl';

function Profit() {
  const t = useTranslations('profit');
  return (
    <section>
      <Title
        title={
          <>
            {t('title1')} <br />
            {t('title2')} <br />
            {t('title3')}
          </>
        }
      />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Image
            src='/images/profit/profit.png'
            alt='profit'
            width={276}
            height={268}
            className={styles.image}
          />
          <p className={styles.subtitle}>{t('text1')}</p>
        </div>
        <Image
          src='/images/profit/seekbar.png'
          alt='seekbar'
          width={628}
          height={125}
          className={styles.seekbar}
        />
        <Image
          src='/images/profit/seekbar_mobile.png'
          alt='seekbar'
          width={218}
          height={84}
          className={styles.seekbar_mobile}
        />
        <div className={styles.wrapper}>
          <Image
            src='/images/profit/trade_turnover.png'
            alt='trade'
            width={276}
            height={268}
            className={styles.image}
          />
          <p className={styles.subtitle}>{t('text2')}</p>
        </div>
      </div>
    </section>
  );
}

export default Profit;
