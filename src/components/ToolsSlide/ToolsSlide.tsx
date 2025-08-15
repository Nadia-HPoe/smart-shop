'use client';

import { useState, useEffect } from 'react';
import { useScrolling } from '@/hooks/useScrolling';
import { loadTools } from '@/app/actions';
import { ToolsRecords, transformTools } from '@/functions/transformTools';
import SlideCard from './SlideCard/SlideCard';
import Title from '../Title/Title';
import styles from './toolsSlide.module.scss';
import Image from 'next/image';

const ToolsSlide: React.FC = () => {
  const [tools, setTools] = useState<ToolsRecords[]>([]);
  const { canScrollLeft, canScrollRight, scrollLeft, scrollRight, scrollContainerRef } =
    useScrolling(300);

  useEffect(() => {
    (async () => {
      try {
        const res = await loadTools();
        if (res && res.status === 200 && res.data) {
          setTools(transformTools(res.data));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className={styles.toolsSlide}>
      <Title title={'Our tools generate additional income'} />
      <div
        className={styles.slider}
        ref={scrollContainerRef}
        role='region'
        aria-label='Tools slide container'
      >
        {tools.map((tools, index) => (
          <SlideCard key={index} img={tools.img} title={tools.title} text={tools.text} />
        ))}
      </div>

      {/* {toolsSlideItems.map((item, index) => (
          <SlideCard key={item.id ?? index} {...item} />
        ))}
      </div> */}

      <div className={styles.arrows}>
        <button
          onClick={scrollLeft}
          className={styles.arrowLeft}
          aria-label='Previous'
          disabled={!canScrollLeft}
        >
          <Image src='/images/arrow-left.png' alt='slider arrow left' width={48} height={48} />
        </button>
        <button
          className={styles.arrowRight}
          aria-label='Next'
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <Image src='/images/arrow-right.png' alt='slider arrow right' width={48} height={48} />
        </button>
      </div>
    </div>
  );
};

export default ToolsSlide;
