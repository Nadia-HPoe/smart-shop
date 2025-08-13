'use client';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

type UseRecaptchaProps = {
  onVerify?: (token: string) => void;
};

export const useRecaptcha = ({ onVerify }: UseRecaptchaProps) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string>('');
  const [isLoading] = useState<boolean>(false);

  const resetRecaptcha = () => {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
    setRecaptchaToken('');
  };

  const executeRecaptcha = (token: string | null) => {
    const validToken = token || '';
    console.log('Setting recaptcha token:', validToken);
    setRecaptchaToken(validToken);

    if (validToken && onVerify) {
      onVerify(validToken);
    }

    return validToken;
  };

  return {
    recaptchaRef,
    recaptchaToken,
    setRecaptchaToken,
    resetRecaptcha,
    executeRecaptcha,
    isLoading,
  };
};
