import moment from 'moment';

  const convertDateFormat = (dateStr) => {
    const formattedDate = moment(dateStr).format('DD/MM/YYYY');
    return formattedDate;
  }

export default {convertDateFormat};