import { NavLink, Outlet } from "react-router";

 

function AdminDeshBoardLayout() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      
      {/* Main Content Area */}
      <div className="drawer-content flex flex-col bg-gray-500">
        {/* Mobile Navbar */}
        <div className="navbar bg-white shadow-sm w-full lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-ghost btn-square"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current text-blue-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-lg font-semibold text-gray-700">Admin Dashboard</div>
        </div>
        
        {/* Page Content */}
        <div className="flex-1 p-4 md:p-6">
          <Outlet />
        </div>
      </div>
      
      {/* Sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        
        <aside className="menu bg-gradient-to-b from-purple-800 to-purple-900 text-white min-h-full w-80 p-0">
          {/* Logo Section */}
          
          
          {/* Navigation Menu */}
          <nav className="p-4">
            <ul className="space-y-1">
               <li>
                <NavLink 
                  to="/adminlayout/AdminCreatePoke"
                  className={({isActive}) => 
                    `flex items-center p-3 rounded-lg transition-all ${isActive ? 'bg-blue-700 text-white' : 'hover:bg-blue-700/50'}`
                  }
                >
                 
                  <span>Manage Applications</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
}

export default AdminDeshBoardLayout;