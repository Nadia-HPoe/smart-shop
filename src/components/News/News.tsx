'use client';

import { useState, useEffect, useRef } from 'react';
import Title from '../Title/Title';
import styles from './news.module.scss';
import NewsCard from './NewsCard/NewsCard';
import Image from 'next/image';
import { loadNews } from '@/app/[locale]/actions';
import { NewsRecords, transformNews } from '@/functions/transformNews';

const News: React.FC = () => {
  const [news, setNews] = useState<NewsRecords[]>([]);
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

  useEffect(() => {
    (async () => {
      try {
        const res = await loadNews();
        if (res && res.status === 200 && res.data) {
          setNews(transformNews(res.data));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <section id='news'>
      <Title title='news' />
      <div className={styles.slider}>
        <div className={styles.cards} ref={sliderRef}>
          {news.map((news, index) => (
            <NewsCard
              key={index}
              title={news.title}
              tag1={news.tag1}
              tag2={news.tag2}
              tag3={news.tag3}
              img={news.img}
              text={news.text}
            />
          ))}
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
