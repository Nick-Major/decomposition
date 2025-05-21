import { format, parse } from 'date-fns';
import { ru } from 'date-fns/locale';

const DateTime = ({ isoDate, dateFormat = "HH:mm" }) => {
  const date = parse(isoDate, "yyyy-MM-dd'T'HH:mm:ss", new Date());
  const formattedDate = format(date, dateFormat, { locale: ru });

  return <time dateTime={isoDate}>{formattedDate}</time>;
};

export default DateTime;