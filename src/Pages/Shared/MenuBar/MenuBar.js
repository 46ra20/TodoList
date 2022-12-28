import React, { useContext } from "react";
import { AuthContext } from "../../../UserContext/UserContext";
import { Link } from "react-router-dom";
import {CiLight, CiDark} from "react-icons/ci";
import { Tooltip } from 'react-tooltip'

const MenuBar = () => {
  const { user,logOut,theme, setTheme } = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then()
    .catch(err=>console.log(err.code))
  }
  const menu = (
    <>
      {
        theme?
        <li onClick={()=>setTheme(!theme)} data-tooltip-content="Make Dark" data-tooltip-place="top" title="Dark"><p className="text-2xl"><CiDark/></p></li>:
        <li onClick={()=>setTheme(!theme)} data-tooltip-content="Make Light" data-tooltip-place="top" title="Light"><p className="text-2xl"><CiLight/></p></li>
      }
      <li>
        <Link to={"/"}>Add Task</Link>
      </li>
      <li>
        <Link to={"/my-task"}>My Task</Link>
      </li>
      <li>
        <Link to={"/finished-task"}>Finished Task</Link>
      </li>
      {user?.uid ? (
        <li>
          <Link onClick={handleLogOut}>Log Out</Link>
        </li>
      ) : (
        <>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="shadow">
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Todo List</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
      </div>
      <Tooltip anchorId="my-anchor-element" />
    </div>
  );
};

export default MenuBar;
