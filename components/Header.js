import React from "react";

import Link from "next/link";

function NavLink({ href, title, external = false }) {
  return (
    <li className="nav-item">
      {external && (
        <a href={href} target="_blank" rel="noreferrer" className="nav-link">
          {title}
        </a>
      )}
      {!external && (
        <Link href={href} passHref>
          <a className="nav-link">{title}</a>
        </Link>
      )}
    </li>
  );
}

export default function Header() {
  const links = [
    {
      href: "/", // /categories/photo/
      title: "Photography",
    },
    {
      href: "/", // /categories/photo/
      title: "Radio Control",
    },
    {
      href: "/", // /categories/photo/
      title: "3D Printing",
    },
  ];

  const rightLinks = [
    {
      href: "/keys/",
      title: "Cryptographic Keys",
      external: false,
    },
    {
      href: "https://about.me/chrissearle/",
      title: "Other Sites",
      external: true,
    },
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link href="/" passHref>
            <div>
              <img className="logo" src="/logo.png" alt="Logo" />
              <a className="navbar-brand">Chris Searle</a>
            </div>
          </Link>
          <ul className="navbar-nav">
            {links.map((link, index) => (
              <NavLink
                key={`link-${index}`}
                href={link.href}
                title={link.title}
              />
            ))}
          </ul>
          <ul className="navbar-nav ms-auto">
            {rightLinks.map((link, index) => (
              <NavLink
                key={`link-${index}`}
                href={link.href}
                title={link.title}
                external={link.external}
              />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
