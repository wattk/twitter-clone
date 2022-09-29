import { useEffect, useRef, useContext } from "react";
import Link from "next/link";
import Profile from "./atomic/Profile";
import Modal from "../Modal";
import TwitterContext from "../context/TwitterContext";

function Sidebar({ open, onClose }) {
  const { user } = useContext(TwitterContext);
  const sidebarRef = useRef(null);

  const handleClose = () => {
    onClose?.();
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        handleClose?.();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => window.removeEventListener("mousedown", handleClick);
  });

  return (
    <Modal>
      <div
        className={`fixed top-0 ease-in-out duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } bg-white w-96 h-screen pt-5 pl-8 shadow-gray-200 drop-shadow-md rounded-r z-50`}
        ref={sidebarRef}
      >
        <Profile img={user.profile} size="4.5rem" />
        <h5 className="font-bold text-2xl mb-2 mt-5">{user.name}</h5>
        <span className="text-gray-500 my-2">@{user.id}</span>
        <div className="mb-5 my-2">
          <span className="font-bold text-lg">Following</span>
          <span className="ml-2 text-gray-500">{user.following}</span>
          <span className="ml-3 font-bold text-lg">Follower</span>
          <span className="ml-2 text-gray-500">{user.follower}</span>
        </div>
        <ul>
          <li className="text-xl my-2">
            <Link href="/">Home</Link>
          </li>
          <li className="text-xl my-2">
            <Link href="/user">Profile</Link>
          </li>
          <li className="text-xl my-2">
            <Link href="/search">Search</Link>
          </li>
        </ul>
      </div>
    </Modal>
  );
}

export default Sidebar;
