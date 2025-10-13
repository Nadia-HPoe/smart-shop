import React from 'react';
import searchIcon from '../../../public/images/banner/search_icon.svg';
import imageLeftSide from '../../../public/images/banner/banner_left_side.png';
import imageRightSideTop from '../../../public/images/banner/bunner_right_side_top.png';
import imageRightSideBottom from '../../../public/images/banner/banner_right_side_bottom.png';
import Image from 'next/image';
import styles from './banner.module.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Banner = () => {
  const t = useTranslations('banner1');
  return (
    <section className={styles.banner}>
      <div className={styles.title_wrapper}>
        <h1 className={styles.title}>{t('subtitle')}</h1>
        <form className={styles.form}>
          <div className={styles.input_wrapper}>
            <Image
              className={styles.search_icon}
              alt='search'
              src={searchIcon}
              width={32}
              height={32}
            />
            <input className={styles.input} type='text' placeholder={t('input')} />
          </div>
          <Link href='#contactus' className={styles.button}>
            {t('button')}
          </Link>
        </form>
      </div>
      <div className={styles.banner_blocks}>
        <div className={styles.block_left_side}>
          <Image
            src={imageLeftSide}
            className={styles.image_left_side}
            width={550}
            height={550}
            alt='employee'
          />
          <div className={styles.text_left_side}>
            <span className={styles.subtitile}>{t('card_1.subtitle')}</span>
            <span className={styles.text}>{t('card_1.text')}</span>
          </div>
        </div>
        <div className={styles.block_rigth_side}>
          <Image
            src={imageRightSideTop}
            className={styles.image_right_side_top}
            width={410}
            height={315}
            alt='grandmothers'
          />
          <div className={styles.text_right_side_bottom}>
            <span className={styles.subtitile}>{t('card_3.subtitle')}</span>
            <span className={styles.text}>{t('card_3.text')}</span>
          </div>
          <div className={styles.text_right_side_top}>
            <span className={styles.subtitile}>{t('card_2.subtitle')}</span>
            <span className={styles.text}>{t('card_2.text')}.</span>
          </div>
          <Image
            src={imageRightSideBottom}
            className={styles.image_right_side_bottom}
            width={410}
            height={235}
            alt='street'
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
