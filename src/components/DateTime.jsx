import { format, parse } from 'date-fns';
import { ru } from 'date-fns/locale';

const DateTime = ({ isoDate }) => {
  const date = parse(isoDate, "yyyy-MM-dd'T'HH:mm:ss", new Date());
  const formattedDate = format(date, "d MMMM, EEEE HH:mm", { locale: ru });

  return <time dateTime={isoDate}>{formattedDate}</time>;
};

export default DateTime;