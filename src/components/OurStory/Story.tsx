import Title from '../Title/Title';
import styles from './story.module.scss';
import { storyItems } from '@/constants/GetStoryItems';
import useSearchLinks from '@/hooks/useSearchLinks';
import Image from 'next/image';
import Link from 'next/link';

const Story = () => {
  const getSearchLinks = useSearchLinks;

  return (
    <section className={styles.ourstory}>
      <Title title='Our Story' />

      {storyItems.map((item, index) => (
        <div key={index} className={styles.content}>
          <div
            className={`${styles.content_wrapper} ${item.style === 'reverse' ? styles.content_wrapper_reverse : ''}`}
          >
            <div className={styles.content_wrapper_text}>
              <p className={styles.year}>{item.year}</p>
              <div className={styles.text}>{getSearchLinks(item.text, true, styles.linksUnco)}</div>
            </div>
            <div
              className={`${styles.content_wrapper_images} ${item.style === 'reverse' ? styles.content_wrapper_images_reverse : ''}`}
            >
              <Link
                href='https://www.instagram.com/uff_eu?igsh=MWl1MjZnNGJmNm5ucQ%3D%3D&utm_source=qr'
                passHref
                target='blank'
              >
                <Image
                  src='/images/ourstory/instagram.svg'
                  alt='Instagram'
                  width={40}
                  height={40}
                />
              </Link>
              <Image className={styles.image} src={item.img} alt='photo' width={460} height={340} />
            </div>
          </div>
          <hr className={styles.line} />
        </div>
      ))}
    </section>
  );
};

export default Story;
