import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 w-full sm:mt-32 lg:mt-40" >
      <div className="mx-auto max-w-2xl lg:max-w-none" >
        <div className="mb-20 mt-24 flex flex-col items-center sm:flex-wrap sm:flex-row sm:items-end sm:justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <p className="text-sm text-neutral-700">Copyright © {new Date().getFullYear()} | Tous droits réservés.</p>
          <a aria-label="Home" className="max-w-fit" href="/">
            <img className="w-32" src="innosense-label.svg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
