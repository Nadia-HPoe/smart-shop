import Image from 'next/image';
import Link from 'next/link';
import { socialData } from '@/constants/GetSocialsData';
import { navigationItems } from '@/constants/GetNavigationItems';
import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.navigation}>
        <Image src='/images/logo.png' alt='logo' width={135} height={62} />
        <ul className={styles.footer_nav}>
          {navigationItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className={styles.footer_nav_item}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.contacts}>
        <div className={styles.socials}>
          <p className={styles.social_title}>Contact us:</p>
          <div className={styles.social_items}>
            {socialData.map((item, index) => (
              <div key={index}>
                <Link href={item.link} target='_blank'>
                  <Image
                    src={item.img}
                    width={60}
                    height={60}
                    alt='icon'
                    className={styles.social_icon}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.mail}>
          <Image
            className={styles.mail_icon}
            src='/images/footer/mail.png'
            alt='mail'
            width={32}
            height={32}
          />
          <Link className={styles.mail_link} href='mailto:ac@foodfutures.net'>
            ac(at)foodfutures.net
          </Link>
        </div>
        <div className={styles.links}>
          <Link
            href='https://club.unco.market/files/Impressum.pdf'
            className={styles.link_item}
            target='blank'
          >
            Impressum
          </Link>
          <Link
            href='https://club.unco.market/files/Datenschutz.pdf'
            className={styles.link_item}
            target='blank'
          >
            Datenschutz
          </Link>
          <Link
            href='https://club.unco.market/files/Ru%CC%88ckgaberecht.pdf'
            className={styles.link_item}
            target='blank'
          >
            Rückgaberecht
          </Link>
          <Link
            href='https://club.unco.market/files/AGB.pdf'
            className={styles.link_item}
            target='blank'
          >
            AGB
          </Link>
        </div>
      </div>
      <hr className={styles.line} />
      <div className={styles.footer_text}>
        <p className={styles.footer_text_item}>
          All rights reserved. Any parts of this presentation are subject to change by the owner at
          any time without prior notice. This presentation or parts of it does not form a business
          proposal or part of a contract. Items are approximate and subject to negotiation. Any
          copying and use for commercial purposes requires the written consent of the copyright
          holder.
        </p>
        <p className={styles.footer_text_item}>
          *All figures, designations, abbreviations and data in this web pages are solely for the
          purpose of explaining the pattern of operation, are not based on actual facts and events
          and may not be used for any other purpose (including but not limited to: investment
          decisions, buying, education, predictions) other than a general understanding of the
          business model. Trading services are provided by third-party companies under the relevant
          agreements and licenses of the respective countries where the sales and other transactions
          take place. Past performance is not a reliable indicator of future results. Your returns
          may increase or decrease as a result of currency fluctuations. Your capital is at risk.
          View Trading Disclosures on the websites of the respective trading platforms.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
