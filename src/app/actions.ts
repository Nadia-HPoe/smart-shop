'use server';
import { initGoogleAPI } from '@/server-actions/google-sheets';
import { verifyRecaptcha } from '@/server-actions/recaptcha';
import { v4 as uuidv4 } from 'uuid';
export interface TransformedObject {
  [key: string]: string;
}

const NEXT_PUBLIC_SHEET_NEWS_RANGE = process.env.NEXT_PUBLIC_SHEET_NEWS_RANGE;
const NEXT_PUBLIC_SHEET_TOOLS_RANGE = process.env.NEXT_PUBLIC_SHEET_TOOLS_RANGE;
const NEXT_PUBLIC_SHEET_CONTACT_RANGE = process.env.NEXT_PUBLIC_SHEET_CONTACT_RANGE;

export const loadNews = async () => {
  const { sheets, spreadsheetId, range } = await initGoogleAPI(NEXT_PUBLIC_SHEET_NEWS_RANGE);
  if (sheets) {
    try {
      const getRows = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });
      console.log(getRows);
      return { data: getRows.data.values as string[][], status: getRows.status };
    } catch (error) {
      console.log(error);
    }
  }
  return { data: null, status: 500 };
};

export const loadTools = async () => {
  const { sheets, spreadsheetId, range } = await initGoogleAPI(NEXT_PUBLIC_SHEET_TOOLS_RANGE);
  if (sheets) {
    try {
      const getRows = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });
      console.log(getRows);
      return { data: getRows.data.values as string[][], status: getRows.status };
    } catch (error) {
      console.log(error);
    }
  }
  return { data: null, status: 500 };
};

export const sendContactFormData = async (
  store: string,
  address: string,
  email: string,
  contact: string,
  recaptchaToken: string
) => {
  const recaptchaData = await verifyRecaptcha(recaptchaToken);

  if (!recaptchaData.success) {
    return {
      status: 400,
      error: `reCAPTCHA verification failed: ${JSON.stringify(recaptchaData['error-codes'] || 'no error codes')}`,
    };
  }

  const { sheets, spreadsheetId } = await initGoogleAPI(NEXT_PUBLIC_SHEET_CONTACT_RANGE);

  try {
    if (!sheets) throw new Error('Server error');

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: NEXT_PUBLIC_SHEET_CONTACT_RANGE,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[`${uuidv4()}`, store, address, email, contact]],
      },
    });

    // Send data to external feedback endpoint
    const feedbackResponse = await fetch('https://feedback.foodfutures.net', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ store, address, email, contact }),
    });

    if (!feedbackResponse.ok) {
      console.error(
        'Failed to send data to feedback.foodfutures.net',
        await feedbackResponse.text()
      );
    }

    return { data: response.data, status: response.status, error: '' };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return { status: 500, error: error.message };
    } else {
      console.log('Unknown error');
    }
  }
  return { status: 500, error: '' };
};
