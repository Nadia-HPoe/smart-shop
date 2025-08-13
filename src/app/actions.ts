'use server';
import { initGoogleAPI } from '@/server-actions/google-sheets';

export interface TransformedObject {
  [key: string]: string;
}

const NEXT_PUBLIC_SHEET_NEWS_RANGE = process.env.NEXT_PUBLIC_SHEET_NEWS_RANGE;

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
