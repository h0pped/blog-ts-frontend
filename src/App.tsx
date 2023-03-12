import DailyBrief from './components/DailyBrief/DailyBrief';
import Feed from './components/Feed/Feed';

function App(): JSX.Element {
  return (
    <div className="h-full flex flex-col  items-center ">
      <DailyBrief />
      <Feed />
    </div>
  );
}

export default App;
