import React from "react";
import Link from "next/link";

const Sidebar = ({ links = [] }) => {
  return (
    <div id="sidebar" className=" my-8 space-y-3 lg:mt-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="uppercase block hover:underline"
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
