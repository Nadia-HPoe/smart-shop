"use client";
import Image from "next/image";
import Title from "../Title/Title";
import styles from "./products.module.scss";
import { productsItems } from "@/constants/GetProductsItems";
import arrowLeft from "../../../public/images/products/Arrow_left.png";
import arrowRight from "../../../public/images/products/Arrow_right.png";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const Products = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isTablet, setIsTablet] = useState(false);
  const SLIDES_PER_VIEW = 6;
  const totalGroups = Math.ceil(productsItems.length / SLIDES_PER_VIEW);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1099 && window.innerWidth > 743);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleProducts = useCallback(() => {
    if (!isTablet) return productsItems;

    const start = currentGroup * SLIDES_PER_VIEW;
    const end = start + SLIDES_PER_VIEW;
    return productsItems.slice(start, end);
  }, [currentGroup, isTablet]);

  const visibleProducts = getVisibleProducts();

  const nextGroup = useCallback(() => {
    setCurrentGroup((prev) => (prev + 1) % totalGroups);
  }, [totalGroups]);

  const prevGroup = useCallback(() => {
    setCurrentGroup((prev) => (prev - 1 + totalGroups) % totalGroups);
  }, [totalGroups]);

  return (
    <section className={styles.products}>
      <Title title='Unco products' />
      <div className={styles.blocks}>
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className={`${styles.block} ${product.wide ? styles.wide : ""}`}
          >
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
      </div>
      <div className={styles.buttons}>
        <div className={styles.button}>
          <Image onClick={prevGroup} src={arrowLeft} alt='' />
        </div>
        <div className={styles.button}>
          <Image onClick={nextGroup} src={arrowRight} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Products;
