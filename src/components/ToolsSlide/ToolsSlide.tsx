'use client';

import { toolsSlideItems } from '@/constants/GetToolsSlideItems';
import SlideCard from './SlideCard/SlideCard';
import styles from './toolsSlide.module.scss';
import Image from 'next/image';
import Title from '../Title/Title';
import { useScrolling } from '@/hooks/useScrolling';

const ToolsSlide: React.FC = () => {
  const { canScrollLeft, canScrollRight, scrollLeft, scrollRight, scrollContainerRef } =
    useScrolling(300);

  return (
    <div className={styles.toolsSlide}>
      <Title title={'Our tools generate additional income'} />
      <div
        className={styles.slider}
        ref={scrollContainerRef as React.RefObject<HTMLDivElement>}
        role='region'
        aria-label='Tools slide container'
      >
        {toolsSlideItems.map((item, index) => (
          <SlideCard key={item.id ?? index} {...item} />
        ))}
      </div>

      <div className={styles.arrows}>
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={styles.arrowLeft}
          aria-label='Previous'
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
