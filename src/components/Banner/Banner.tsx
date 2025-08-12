import React from "react";
import searchIcon from "../../../public/images/banner/search_icon.svg";
import imageLeftSide from "../../../public/images/banner/banner_left_side.png";
import imageRightSideTop from "../../../public/images/banner/bunner_right_side_top.png";
import imageRightSideBottom from "../../../public/images/banner/banner_right_side_bottom.png";
import Image from "next/image";
import styles from "./banner.module.scss";
import Link from "next/link";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.title_wrapper}>
        <h1 className={styles.title}>
          Why is your shop losing sales and profit?
        </h1>
        <form className={styles.form}>
          <div className={styles.input_wrapper}>
            <Image
              className={styles.search_icon}
              alt='search'
              src={searchIcon}
              width={32}
              height={32}
            />
            <input
              className={styles.input}
              type='text'
              placeholder={`Check how your store compares to neighbouring grocery stores`}
            />
          </div>
          <Link href='#competitors' className={styles.button}>
            GET MY REPORT
          </Link>
        </form>
      </div>
      <div className={styles.banner_blocks}>
        <div className={styles.block_left_side}>
          <Image
            src={imageLeftSide}
            className={styles.image_left_side}
            width={550}
            height={550}
            alt='employee'
          />
          <div className={styles.text_left_side}>
            <span className={styles.subtitile}>Rising costs</span>
            <span className={styles.text}>Electricity, rent, staff, etc.</span>
          </div>
        </div>
        <div className={styles.block_rigth_side}>
          <Image
            src={imageRightSideTop}
            className={styles.image_right_side_top}
            width={410}
            height={315}
            alt='grandmothers'
          />
          <div className={styles.text_right_side_bottom}>
            <span className={styles.subtitile}>Online growth</span>
            <span className={styles.text}>
              Product sales and delivery services
            </span>
          </div>
          <div className={styles.text_right_side_top}>
            <span className={styles.subtitile}>
              Products become more expensive faster than customers&apos incomes
            </span>
            <span className={styles.text}>
              Buyers are forced to save more and more.
            </span>
          </div>
          <Image
            src={imageRightSideBottom}
            className={styles.image_right_side_bottom}
            width={410}
            height={235}
            alt='street'
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
