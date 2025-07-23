'use client';

import { useRef, useState } from 'react';
import Title from '../Title/Title';
import styles from './news.module.scss';
import NewsCard from './NewsCard/NewsCard';
import Image from 'next/image';

const News: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    const slider = sliderRef.current;
    if (slider) {
      const scrollAmount = slider.offsetWidth / 2;
      slider.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id='news'>
      <Title title='news' />
      <div className={styles.slider}>
        <div className={styles.cards} ref={sliderRef}>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => handleScroll('left')}
            aria-label='Previous'
          >
            <Image src='/images/arrow-left.png' alt='arrow' width={48} height={48} />
          </button>
          <button className={styles.button} onClick={() => handleScroll('right')} aria-label='Next'>
            <Image src='/images/arrow-right.png' alt='arrow' width={48} height={48} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
