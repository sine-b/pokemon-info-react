import { ValueGetterParams } from '@material-ui/data-grid';

export const formatStringCell = (params: ValueGetterParams): String => {
  const cellText = params.value as string;
  let formattedText = '';
  if (!cellText || typeof cellText !== 'string') {
    return formattedText;
  }
  formattedText = cellText.charAt(0).toUpperCase() + cellText.slice(1);
  return formattedText;
};
