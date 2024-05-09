import React from "react";

const Client = () => {
  return (
    <>
      <div
        id="clients"
        className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40"
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div style={{ opacity: 1, transform: "none" }}>
            <h1>
              <span className="mb-6 block font-display text-base font-semibold text-lime-600">
                Nos Clients
              </span>
              <span className="sr-only"> - </span>
              <span className="block font-display tracking-tight [text-wrap:balance] text-3xl font-medium sm:text-4xl text-blue-950">
                Ils nous font confiance
              </span>
            </h1>
            <div className="mt-6 max-w-3xl text-xl text-neutral-600">
              <p>Découvrez ceux qui nous ont choisi.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-24">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-3"
          >
            <li className="group">
              <div className="overflow-hidden">
                <div className="pt-12 group-[&amp;:nth-child(-n+2)]:-mt-px sm:group-[&amp;:nth-child(3)]:-mt-px lg:group-[&amp;:nth-child(4)]:-mt-px relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                  <img
                    alt="Airbus"
                    loading="lazy"
                    width="184"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    src="logo-airbus.svg"
                  />
                </div>
              </div>
            </li>
            <li className="group">
              <div
                className="overflow-hidden"
              >
                <div className="pt-12 group-[&amp;:nth-child(-n+2)]:-mt-px sm:group-[&amp;:nth-child(3)]:-mt-px lg:group-[&amp;:nth-child(4)]:-mt-px relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                  <img
                    alt="Allianz"
                    loading="lazy"
                    width="184"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    src="logo-allianz.svg"
                  />
                </div>
              </div>
            </li>
            <li className="group">
              <div className="overflow-hidden">
                <div className="pt-12 group-[&amp;:nth-child(-n+2)]:-mt-px sm:group-[&amp;:nth-child(3)]:-mt-px lg:group-[&amp;:nth-child(4)]:-mt-px relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                  <img
                    alt="BNP Paribas"
                    loading="lazy"
                    width="184"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    src="logo-bnp-paribas.svg"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Client;
