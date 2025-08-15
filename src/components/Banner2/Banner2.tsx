import Image from "next/image";
import Title from "../Title/Title";
import styles from "./banner2.module.scss";

function Banner2() {
  return (
    <section className={styles.banner2}>
      <Title
        title={
          <>
            food waste <br />
            And money
          </>
        }
      />
      <h4 className={styles.subtitle}>
        Digitalization leads to a reduction in food waste and increased money
        savings.
      </h4>
      <div className={styles.wrapper}>
        <div className={styles.texts}>
          <p className={styles.text}>
            More than 45% of all produce is wasted in the food supply chain*
          </p>
          <ul className={styles.list}>
            <span>On average, every 5 kg of food waste:</span>
            <li className={styles.list_item}>
              0,2 kg <span>Methane (main greenhouse gas)</span>
            </li>
            <li className={styles.list_item}>
              1 kg <span>СО2</span>
            </li>
          </ul>
        </div>
        <div className={styles.links}>
          <p className={styles.link_text}>
            * (Jones, 2004 cited in Lundqvist et al., 2008). According to the
            Guardian
          </p>
          <a
            className={styles.link}
            target='blank'
            href='https://www.theguardian.com/environment/2015/aug/12/cutting-food-waste-enough-for-everyone-says-un'
          >
            https://www.theguardian.com/environment/2015/aug/12/cutting-food-waste-enough-for-everyone-says-un
          </a>
          <p className={styles.link_text}>
            Source: 
            <a
              className={styles.link}
              href='https://www.refed.com'
              target='blank'
            >
              https://www.refed.com
            </a>
          </p>
          <p className={styles.link_text}>
            {" "}
            Source: 
            <a
              className={styles.link}
              href='https://www.usda.gov'
              target='blank'
            >
              https://www.usda.gov
            </a>
          </p>
        </div>
      </div>
      <Image
        className={styles.image}
        alt='Banner'
        width={1920}
        height={727}
        src='/images/banner2/banner.png'
      />
    </section>
  );
}

export default Banner2;
