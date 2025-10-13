import Image from 'next/image';
import Title from '../Title/Title';
import styles from './banner2.module.scss';
import { useTranslations } from 'next-intl';

function Banner2() {
  const t = useTranslations('banner2');
  return (
    <section className={styles.banner2}>
      <Title
        title={
          <>
            {t('title')} <br />
            {t('title2')}
          </>
        }
      />
      <h4 className={styles.subtitle}>{t('subtitle')}
      </h4>
      <div className={styles.wrapper}>
        <div className={styles.texts}>
          <p className={styles.text}>{t('text')}
          </p>
          <ul className={styles.list}>
            <span>{t('text2')}</span>
            <li className={styles.list_item}>
              0,2 kg <span>{t('text3')}</span>
            </li>
            <li className={styles.list_item}>
              1 kg <span>СО2</span>
            </li>
          </ul>
        </div>
        <div className={styles.links}>
          <p className={styles.link_text}>
            * (Jones, 2004 cited in Lundqvist et al., 2008). According to the Guardian
          </p>
          <a
            className={styles.link}
            target='blank'
            href='https://www.theguardian.com/environment/2015/aug/12/cutting-food-waste-enough-for-everyone-says-un'
          >
            https://www.theguardian.com/environment/2015/aug/12/cutting-food-waste-enough-for-everyone-says-un
          </a>
          <p className={styles.link_text}>
            Source:
            <a className={styles.link} href='https://www.refed.com' target='blank'>
              https://www.refed.com
            </a>
          </p>
          <p className={styles.link_text}>
            {' '}
            Source:
            <a className={styles.link} href='https://www.usda.gov' target='blank'>
              https://www.usda.gov
            </a>
          </p>
        </div>
      </div>
      <Image
        className={styles.image}
        alt='Banner'
        width={1920}
        height={727}
        src='/images/banner2/banner.png'
      />
    </section>
  );
}

export default Banner2;
