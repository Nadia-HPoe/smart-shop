'use client';

import { useRef, useState, useEffect } from 'react';
import Title from '../Title/Title';
import styles from './competitors.module.scss';
import { columns, products, Product } from '@/constants/GetCompetitorsData';
import { getCellStyle } from '@/functions/formatCellCompetitors';
import Image from 'next/image';

function Competitors() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollByAmount = 300;
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -scrollByAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollByAmount, behavior: 'smooth' });
    }
  };
  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < maxScrollLeft);
  };
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkScrollPosition();

    container.addEventListener('scroll', checkScrollPosition);
    return () => {
      container.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <section className={styles.competitors}>
      <Title title='competitors' />
      <div className={styles.container} ref={scrollContainerRef}>
        <table className={styles.table}>
          <tbody>
            <tr>
              {columns.map((column) => (
                <th className={styles.table_header} key={column.accessor}>
                  {column.header}
                </th>
              ))}
            </tr>

            {products.map((product) => (
              <tr key={product.id} className={styles.table_rows}>
                {columns.map((column) => (
                  <td
                    key={`${product.id}-${column.accessor}`}
                    className={styles.table_row}
                    style={getCellStyle(
                      column.accessor as keyof Product,
                      product[column.accessor as keyof Product].toString()
                    )}
                  >
                    {product[column.accessor as keyof Product]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={scrollLeft} disabled={!canScrollLeft}>
          <Image src='/images/arrow-left.png' alt='arrow' width={48} height={48} />
        </button>
        <button className={styles.button} onClick={scrollRight} disabled={!canScrollRight}>
          <Image
            className={styles.button}
            src='/images/arrow-right.png'
            alt='arrow'
            width={48}
            height={48}
          />
        </button>
      </div>
    </section>
  );
}

export default Competitors;
