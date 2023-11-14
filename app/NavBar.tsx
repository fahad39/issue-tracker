import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex space-x-6 mb-2 border-b p-10">
      <Link href={"/"}>Logo</Link>
      <ul className="flex space-x-6">
        <li>
          <Link href={"/"}>Dashboard</Link>
        </li>
        <li>
          <Link href={"/issues"}>Issues</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
