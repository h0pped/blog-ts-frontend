interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <nav className={`${className} border-solid h-screen`}>
      <ul className="flex flex-col justify-center items-center p-5 px-0 text-left pl-3 ">
        <a
          href="#"
          className=" hover:bg-white w-full p-3 pr-0 rounded-xl h-14 flex flex-row justify-center items-center py-2"
        >
          <li className="text-l  text-gray-700 w-full">Popular</li>
        </a>
        <a
          href="#"
          className=" hover:bg-white w-full p-3 pr-0 rounded-xl h-14 flex flex-row justify-center items-center py-2"
        >
          <li className="text-l  text-gray-700 w-full">Fresh</li>
        </a>
        <a
          href="#"
          className=" hover:bg-white w-full p-3 pr-0 rounded-xl h-14 flex flex-row justify-center items-center py-2"
        >
          <li className="text-l  text-gray-700 w-full">Rating TJ</li>
        </a>
        <a
          href="#"
          className=" hover:bg-white w-full p-3 pr-0 rounded-xl h-14 flex flex-row justify-center items-center py-2"
        >
          <li className="text-l  text-gray-700 w-full">Subscriptions</li>
        </a>
      </ul>
      {/* <ul className="flex flex-col justify-center items-center p-5 pr-0  border-color-black border-solid border-r-1 ">
        <h5 className=" w-5/6 p-3 pr-0 ">Subscriptions</h5>
      </ul> */}
    </nav>
  );
};
export default Sidebar;
