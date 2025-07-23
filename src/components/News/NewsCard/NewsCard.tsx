import { useState } from 'react';
import styles from './newscard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { socialData } from '@/constants/GetSocialsData';
import NewsModal from '../NewsModal/NewsModal';

const NewsCard: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={styles.card}
      onClick={() => setOpen(true)}
      style={{ cursor: 'pointer' }}
      tabIndex={0}
      role='button'
      aria-label='Open preview'
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') setOpen(true);
      }}
    >
      <div className={styles.card_wrapper}>
        <div className={styles.card_tags}>
          <div className={styles.card_tag}>SPACE</div>
          <div className={styles.card_tag}>SPACE</div>
          <div className={styles.card_tag}>SPACE</div>
        </div>
        <div className={styles.card_image}></div>
        <div className={styles.card_text}>
          <p className={styles.card_subtitle}>Velitsodales egetonec. </p>
          <p className={styles.card_paragraph}>
            Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare
            accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.{' '}
          </p>
        </div>

        <div className={styles.card_links}>
          {socialData.map((item, index) => (
            <div key={index}>
              <Link href={item.link} target='_blank'>
                <Image
                  src={item.img}
                  width={24}
                  height={24}
                  alt='icon'
                  className={styles.card_icon}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <NewsModal isOpen={open} onClose={() => setOpen(false)}>
        <div
          className={styles.card_wrapper}
          style={{
            maxWidth: '484px',
            maxHeight: 'auto',
          }}
        >
          <div className={styles.card_tags}>
            <div className={styles.card_tag}>SPACE</div>
            <div className={styles.card_tag}>SPACE</div>
            <div className={styles.card_tag}>SPACE</div>
          </div>
          <div className={styles.card_image}></div>
          <div className={styles.card_text}>
            <p className={styles.card_subtitle}>Velitsodales egetonec. </p>
            <p className={styles.card_paragraph}>
              Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare
              accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.{' '}
            </p>
          </div>

          <div className={styles.card_links}>
            {socialData.map((item, index) => (
              <div key={index}>
                <Link href={item.link} target='_blank'>
                  <Image
                    src={item.img}
                    width={24}
                    height={24}
                    alt='icon'
                    className={styles.card_icon}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </NewsModal>
    </div>
  );
};

export default NewsCard;
