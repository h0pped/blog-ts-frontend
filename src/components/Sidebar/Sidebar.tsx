interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <nav className={`${className} border-solid h-screen`}>
      <ul className="flex flex-col justify-center items-center p-5 px-0 text-left pl-3 ">
        <li className="hover:bg-white w-full p-3 pr-0 rounded-xl h-14 flex flex-row justify-center items-center">
          <a href="#" className="text-xl  text-gray-700 w-full">
            Popular
          </a>
        </li>
        <li className="hover:bg-white w-full p-3 pr-0 rounded-xl h-14 flex flex-row justify-center items-center py-2">
          <a href="#" className="text-xl  text-gray-700 w-full">
            Fresh
          </a>
        </li>
        <li className="hover:bg-white w-full p-3 pr-0 rounded-xl h-14 flex flex-row justify-center items-center py-2">
          <a href="#" className="text-xl  text-gray-700 w-full">
            Rating TJ
          </a>
        </li>
        <li className="hover:bg-white w-full p-3 pr-0 rounded-xl h-14 flex flex-row justify-center items-center py-2">
          <a href="#" className="text-xl  text-gray-700 w-full">
            Subscriptions
          </a>
        </li>
      </ul>
      {/* <ul className="flex flex-col justify-center items-center p-5 pr-0  border-color-black border-solid border-r-1 ">
        <h5 className=" w-5/6 p-3 pr-0 ">Subscriptions</h5>
      </ul> */}
    </nav>
  );
};
export default Sidebar;
