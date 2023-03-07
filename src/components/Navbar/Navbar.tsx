import { Link } from 'react-router-dom';

function Navbar(): JSX.Element {
  return (
    <nav className="w-full bg-primary flex  items-center justify-center">
      <div className="w-full py-3 px-5 flex justify-between items-center gap-5 flex-row">
        <div className="flex flex-row items-center gap-10 ">
          <Link to="/">
            <h3 className="text-2xl font-bold">TJournal</h3>
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
