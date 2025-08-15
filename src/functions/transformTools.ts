export type ToolsRecords = {
  id: string;
  img: string;
  title: string;
  text: string;
};

// Same as in the google sheet
const [id, img, title, text, visible] = [0, 1, 2, 3, 4];

export const transformTools = (data: string[][]): ToolsRecords[] =>
  data
    .filter((line) => line[visible] === 'TRUE')
    .map((line) => ({
      id: line[id],
      img: line[img],
      title: line[title],
      text: line[text],
    }));
