import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Heading from '../Typography/Heading/Heading';

function Navbar(): JSX.Element {
  const { isLoggedIn, name, photo } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <nav className="w-full bg-primary flex  items-center justify-center h-16">
      <div className="w-full py-3 px-5 flex justify-between items-center gap-5 flex-row">
        <div className="flex flex-row items-center gap-10 ">
          <Link to="/">
            <h3 className="text-2xl font-bold">TJournal</h3>
          </Link>
        </div>
        <ul className="flex justify-items-stretch items-center ">
          {isLoggedIn && (
            <li>
              <Link to="#" className="mr-5 flex items-center ">
                <Heading className="text-base">{name}</Heading>
                {photo && (
                  <img src={photo} className="rounded-full w-10 ml-2" />
                )}
              </Link>
            </li>
          )}

          {!isLoggedIn && (
            <li className="mr-5">
              <Link to="/signin">Sign in</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
