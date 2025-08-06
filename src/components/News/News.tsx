'use client';

import { useRef } from 'react';
import Title from '../Title/Title';
import styles from './news.module.scss';
import NewsCard from './NewsCard/NewsCard';
import Image from 'next/image';
import { useScrolling } from '@/hooks/useScrolling';

const News: React.FC = () => {
  const { canScrollLeft, canScrollRight, scrollLeft, scrollRight, scrollContainerRef } =
    useScrolling(300);

  return (
    <section id='news'>
      <Title title='news' />
      <div className={styles.slider}>
        <div className={styles.cards} ref={scrollContainerRef}>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label='Previous'
          >
            <Image src='/images/arrow-left.png' alt='arrow' width={48} height={48} />
          </button>
          <button
            className={styles.button}
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label='Next'
          >
            <Image src='/images/arrow-right.png' alt='arrow' width={48} height={48} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
