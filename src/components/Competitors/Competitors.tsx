'use client';

import Title from '../Title/Title';
import styles from './competitors.module.scss';
import { columns, products, Product } from '@/constants/GetCompetitorsData';
import { getCellStyle } from '@/functions/formatCellCompetitors';
import { useScrolling } from '@/hooks/useScrolling';
import Image from 'next/image';

function Competitors() {
  const { canScrollLeft, canScrollRight, scrollLeft, scrollRight, scrollContainerRef } =
    useScrolling(300);

  return (
    <section className={styles.competitors} id='competitors'>
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
                      String(product[column.accessor as keyof Product]),
                      product
                    )}
                  >
                    {' '}
                    {column.accessor === 'name' ? (
                      <span className={styles.productCell}>
                        {product.img && (
                          <Image
                            src={product.img}
                            alt={product.name || 'Product image'}
                            width={48}
                            height={48}
                            className={styles.productImg}
                          />
                        )}
                        <span className={styles.productName}>{product.name || ''}</span>
                      </span>
                    ) : (
                      product[column.accessor as keyof Product]
                    )}
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
