import {parseDate} from '../../lib/utils';

const getSectionListForTransactions = (data: any) => {
  const organisedData = data.sort((a, b) => {
    return +parseDate(b.date) - +parseDate(a.date); // Return the difference for descending order
  });

  const sectionListToUse: any[] = organisedData.reduce((acc, curr) => {
    const hasDataForADate = acc.findIndex(
      trsAdded => trsAdded.date === curr.date,
    );
    if (hasDataForADate === -1) {
      acc = [
        ...acc,
        {
          date: curr.date,
          data: [curr],
        },
      ];
    } else {
      acc[hasDataForADate].data = [...acc[hasDataForADate].data, curr];
    }
    return acc;
  }, []);

  return sectionListToUse;
};

export {getSectionListForTransactions};
