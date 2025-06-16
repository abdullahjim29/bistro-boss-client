import { Link, NavLink } from "react-router";

const NavBar = () => {

    const navOptions = 
    <>
        <li className="font-inter"><NavLink to={'/'}>HOME</NavLink></li>
        <li className="font-inter"><NavLink to={'/contact-us'}>CONTACT US</NavLink></li>
        <li className="font-inter"><NavLink to={'/dashboard'}>DASHBOARD</NavLink></li>
        <li className="font-inter"><NavLink to={'/our-menu'}>OUR MENU</NavLink></li>
        <li className="font-inter"><NavLink to={'/our-shop'}>OUR SHOP</NavLink></li>
    </>
  return (
    <div className="navbar">
      <div className="navbar-start">

        {/* for small device */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <Link to={'/'} className="text-base md:text-2xl uppercase font-cinzel font-semibold leading-6">bistro boss <br /> <span className="text-base tracking-[0.3rem]">Restaurant</span></Link>
      </div>
      
      
      <div className="navbar-end">
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
