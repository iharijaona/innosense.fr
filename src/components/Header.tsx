import React from "react";

const Header = () => {
  return (
    <header>
      <div className="absolute left-0 right-0 top-2 z-40 pt-14">
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:max-w-none'>
            <div className='flex items-center justify-between' >
              <a aria-label='Home' href='/'>
                <img alt="INNOSENSE LOGO"  className="w-48" src="innosene-logo.svg" />
              </a>
              <div className="flex items-center gap-x-8">
                <a className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800" >
                  Contact
                </a>
                <button type='button' className="group -m-2.5 rounded-full p-2.5 transition hover:bg-neutral-950/10">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-neutral-950 group-hover:fill-neutral-700">
                    <path d="M2 6h20v2H2zM2 16h20v2H2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
