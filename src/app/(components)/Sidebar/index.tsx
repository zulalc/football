type SidebarProps = {
  isSidebarOpen: boolean;
};

const Sidebar = ({ isSidebarOpen }: SidebarProps) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-darkgreen text-white transition-all duration-300 md:hidden
        ${isSidebarOpen ? "w-64" : "w-0"} 
        md:w-72 md:block`}
    >
      <ul className="space-y-6 mt-20 text-center">
        <li className="px-4">
          <a href="/" className="text-3xl">
            Home
          </a>
        </li>
        <li className="px-4">
          <a href="/teams" className="text-3xl">
            Teams
          </a>
        </li>
        <li className="px-4">
          <a href="/players" className="text-3xl">
            Players
          </a>
        </li>
        <li className="px-4">
          <a href="/search" className="text-3xl">
            Search
          </a>
        </li>
        <li className="px-4">
          <a href="/about" className="text-3xl">
            About
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
