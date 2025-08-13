import { useState } from 'react';
import styles from './newscard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { socialData } from '@/constants/GetSocialsData';
import NewsModal from '../NewsModal/NewsModal';
import useSearchLinks from '@/hooks/useSearchLinks';
import { formatTextWithPoints } from '@/functions/formatLinksStylesNews';

interface NewsCardProps {
  tag1: string;
  tag2: string;
  tag3: string;
  title: string;
  img: string;
  text: string;
}

const transformGoogleDriveLink = (url: string) => {
  const match = url.match(/\/d\/(.*?)\//);
  return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : url;
};

const NewsCard: React.FC<NewsCardProps> = ({ tag1, tag2, tag3, title, img, text }) => {
  const getSearchLinks = useSearchLinks;

  const [open, setOpen] = useState(false);

  const formattedText = formatTextWithPoints(text);

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
          <div className={styles.card_tag_wrapper}>
            {tag1 && <p className={styles.card_tag}>{tag1}</p>}
            {tag2 && <p className={styles.card_tag}>{tag2}</p>}
          </div>
          <div className={styles.card_tag_wrapper}>
            {tag3 && <p className={styles.card_tag}>{tag3}</p>}
          </div>
        </div>
        <Image
          className={styles.card_image}
          src={transformGoogleDriveLink(img)}
          alt={title}
          width={436}
          height={209}
        />
        <div className={styles.card_text}>
          <p className={styles.card_subtitle}>{title}</p>

          <p className={styles.card_paragraph} style={{ whiteSpace: 'pre-wrap' }}>
            {getSearchLinks(formattedText, false, styles.links)}
          </p>
        </div>
        <div className={styles.card_bottom}>
          {' '}
          <button className={styles.card_button} onClick={() => setOpen(true)}>
            READ MORE
          </button>
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
            <div className={styles.card_tag_wrapper}>
              {tag1 && <p className={styles.card_tag}>{tag1}</p>}
              {tag2 && <p className={styles.card_tag}>{tag2}</p>}
            </div>
            <div className={styles.card_tag_wrapper}>
              {tag3 && <p className={styles.card_tag}>{tag3}</p>}
            </div>
          </div>
          <Image
            className={styles.card_image}
            src={transformGoogleDriveLink(img)}
            alt={title}
            width={436}
            height={209}
          />
          <div className={styles.card_text}>
            <p className={styles.card_subtitle}>{title}</p>

            <p className={styles.card_paragraph_modal} style={{ whiteSpace: 'pre-wrap' }}>
              {getSearchLinks(formattedText, false, styles.links)}
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
