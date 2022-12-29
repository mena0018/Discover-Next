import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-md mb-5">
      <div className="container flex gap-3 items-center justify-center p-6 mx-auto text-gray-200">
        <Link
          href="/"
          className="border-b-2 border-transparent hover:border-blue-500 hover:transition-all"
        >
          Home
        </Link>

        <Link
          href="/users"
          className="border-b-2 border-transparent hover:border-blue-500 hover:transition-all"
        >
          List
        </Link>

        <Link
          href="/users/create"
          className="border-b-2 border-transparent hover:border-blue-500 hover:transition-all"
        >
          Create
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
