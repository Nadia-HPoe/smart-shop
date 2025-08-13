'use client';
import Image from 'next/image';
import Title from '../Title/Title';
import styles from './products.module.scss';
import { productsItems } from '@/constants/GetProductsItems';
import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const Products = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isTablet, setIsTablet] = useState(false);
  const SLIDES_PER_VIEW = 6;
  const totalGroups = Math.ceil(productsItems.length / SLIDES_PER_VIEW);

  const listRef = useRef<HTMLDivElement>(null);

  const scrollToLits = () => {
    listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1099 && window.innerWidth > 374);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleProducts = useCallback(() => {
    if (!isTablet) return productsItems;

    const start = currentGroup * SLIDES_PER_VIEW;
    const end = start + SLIDES_PER_VIEW;
    return productsItems.slice(start, end);
  }, [currentGroup, isTablet]);

  const visibleProducts = getVisibleProducts();

  const nextGroup = useCallback(() => {
    scrollToLits();
    setCurrentGroup((prev) => (prev + 1) % totalGroups);
  }, [totalGroups]);

  const prevGroup = useCallback(() => {
    scrollToLits();
    setCurrentGroup((prev) => (prev - 1 + totalGroups) % totalGroups);
  }, [totalGroups]);

  return (
    <section id='products' className={styles.products}>
      <Title title='Unco products' />
      <div ref={listRef} className={styles.blocks}>
        {visibleProducts.map((product) => (
          <div key={product.id} className={`${styles.block} ${product.wide ? styles.wide : ''}`}>
            {product.wide ? (
              <div className={styles.images_wrapper}>
                <Image
                  className={styles.img_block_wide}
                  src={product.img}
                  alt=''
                  width={1052}
                  height={268}
                />
                <Image
                  className={styles.img_block_wide_small}
                  src={product.img}
                  alt=''
                  width={506}
                  height={268}
                />
              </div>
            ) : (
              <Image
                className={styles.img_block}
                src={product.img}
                alt=''
                width={506}
                height={268}
              />
            )}
            <Link className={styles.link} href={product.href} target='blank'>
              {product.title}
            </Link>
          </div>
        ))}
        <div className={styles.buttons}>
          <button onClick={prevGroup} className={styles.button}>
            <Image src='/images/arrow-left.png' alt='slider arrow left' width={48} height={48} />
          </button>
          <button className={styles.button} onClick={nextGroup}>
            <Image src='/images/arrow-right.png' alt='slider arrow right' width={48} height={48} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
