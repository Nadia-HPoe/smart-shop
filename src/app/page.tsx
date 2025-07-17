import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import FAQ from "@/components/FAQ/FAQ";
import Story from "@/components/OurStory/Story";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <Header />
        <FAQ />
        <Story />
      </div>
    </>
  );
}
