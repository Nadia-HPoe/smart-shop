'use client';
import React, { useState } from 'react';
import Title from '../Title/Title';
import styles from './contactus.module.scss';
import Image from 'next/image';

const ContactUs = () => {
  const [form, setForm] = useState({
    store: '',
    address: '',
    email: '',
    contact: '',
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: обработка отправки формы
  };

  return (
    <section className={styles.contactus} id='contactus'>
      <Title title='Contact Us' />
      <Image
        className={styles.image}
        src='/images/contactUs/bannerUnco.svg'
        alt='contactUs'
        width={1920}
        height={526}
      />
      <Image
        className={styles.image_mobile}
        src='/images/contactUs/banner_mobile.png'
        alt='mobile'
        width={390}
        height={216}
      />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputsRow}>
          <div className={styles.inputGroup}>
            <label htmlFor='store'>Your Store Name*:</label>
            <input
              type='text'
              id='store'
              name='store'
              value={form.store}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor='address'>Address*:</label>
            <input
              type='text'
              id='address'
              name='address'
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor='email'>Email*:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor='contact'>How to Contact You*:</label>
            <input
              type='text'
              id='contact'
              name='contact'
              value={form.contact}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={styles.checkboxRow}>
          <input
            type='checkbox'
            id='agree'
            name='agree'
            checked={form.agree}
            onChange={handleChange}
            required
          />
          <label htmlFor='agree'>
            I have read and agree to the{' '}
            <a href='#' target='_blank' rel='noopener noreferrer'>
              Privacy Policy
            </a>
          </label>
        </div>
        <button type='submit' className={styles.submitBtn}>
          INCREASE STORE PROFIT
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
