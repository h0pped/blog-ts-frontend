import { useAppDispatch, useAppSelector } from './app/hooks';
import { incremented } from './redux/counter-slice';
import DailyBrief from './components/DailyBrief/DailyBrief';

function App(): JSX.Element {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(incremented());
  };
  return (
    <div className="h-full flex flex-col  items-center ">
      <h1 onClick={handleClick}>{value}</h1>
      <DailyBrief />
    </div>
  );
}

export default App;
