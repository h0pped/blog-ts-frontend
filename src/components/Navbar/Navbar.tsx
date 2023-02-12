function Navbar(): JSX.Element {
  return (
    <nav className="w-full bg-primary flex  items-center justify-center">
      <div className="w-2/3 p-5 flex justify-between items-center gap-5 flex-row">
        <h3 className="text-2xl font-bold">TJournal</h3>
        <ul className="flex flex-row gap-5 text-lg items-center justify-center items-center">
          <li className="text-2xl font-bold">
            <a href="#">Hello, Illia Nykonchuk</a>
          </li>
          <li className="text-1xl ml-10">
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
