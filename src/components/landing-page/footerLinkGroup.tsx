import React from "react";

export const FooterLinkGroup = ({ title, links }: any) => (
  <div>
    <h4 className="font-semibold mb-2">{title}</h4>
    <ul className="space-y-2">
      {links.map((link: any, index: any) => (
        <li key={index}>
          <a href={link.href} className="flex items-center hover:text-blue-300">
            {link.icon && <link.icon className="mr-2" size={16} />}
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
