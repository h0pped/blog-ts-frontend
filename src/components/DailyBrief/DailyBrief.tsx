import { useState } from 'react';
import Paragraph from '../Typography/Paragraph/Paragraph';
import Link from '../Typography/Link/Link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const DailyBrief = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreNews = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  return (
    <div className="w-1/2 flex flex-col  mt-10 drop-shadow-md bg-white rounded-md py-5">
      <Paragraph className="mx-5">
        Суд в Крыму оштрафовал мужчину на 50 тысяч рублей за заказ украинской
        песни. Диджею, поставившему трек, дали 10 суток
      </Paragraph>
      <Paragraph className="mx-4 mt-4">
        Эстония запланировала не впускать в страну россиян с визами, выданными в
        других странах Евросоюза
      </Paragraph>

      <Paragraph className="mx-4 mt-4">
        Google создала роботов-официантов для сотрудников — они могут приносить
        «что-нибудь вкусненькое» и протирать стол
      </Paragraph>

      <Paragraph className="mx-4 mt-4">
        В Московском зоопарке на несколько дней поселится собака-робот
      </Paragraph>

      {isLoading ? (
        <Paragraph className="mx-4 mt-4 text-xl font-bold">...</Paragraph>
      ) : (
        <Link className="ml-4 mt-4 font-bold" onClick={loadMoreNews}>
          Показать еще <KeyboardArrowDownIcon />
        </Link>
      )}
    </div>
  );
};

export default DailyBrief;
