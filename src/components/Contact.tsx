import React from "react";

const Contact = () => {
  return (
    <>
    <div id="contact" className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div style={{"opacity": 1, "transform": "none"}}>
          <h1>
            <span className="mb-6 block font-display text-base font-semibold text-lime-600">
              Contactez-nous
            </span>
            <span className="sr-only"> - </span>
            <span className="block font-display tracking-tight [text-wrap:balance] text-3xl font-medium sm:text-4xl text-blue-950">
              Une idée, un projet ? 
            </span>
          </h1>
          <div className="mt-6 max-w-3xl text-xl text-neutral-600">
            <p>Nous sommes à votre disposition pour discuter.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-24">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <ul role="list" className="grid gap-x-4 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          <li className="group">
            <div className="pt-6 group-[&amp;:nth-child(-n+2)]:-mt-px sm:group-[&amp;:nth-child(3)]:-mt-px lg:group-[&amp;:nth-child(4)]:-mt-px relative before:absolute after:absolute before:bg-lime-600 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-11 after:right-0 after:top-0 after:h-px">
              <div className="flex items-center gap-x-6" >
                <svg 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5}
                  className="w-6 h-6 fill-white stroke-neutral-700 group-hover:stroke-lime-600 min-w-6" >
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <div className="text-sm not-italic text-neutral-600 min-h-16">
                  <strong className="text-neutral-950">Email</strong>
                  <br />
                  <a className="text-neutral-600 hover:text-neutral-950" href="mailto:contact@innosense.fr">
                    contact@innosense.fr
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="pt-6 group-[&amp;:nth-child(-n+2)]:-mt-px sm:group-[&amp;:nth-child(3)]:-mt-px lg:group-[&amp;:nth-child(4)]:-mt-px relative before:absolute after:absolute before:bg-lime-600 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-11 after:right-0 after:top-0 after:h-px">
              <div className="flex items-center gap-x-6" >
                <svg 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-6 h-6  stroke-neutral-700 group-hover:stroke-lime-600  min-w-6">
                  <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <address className="text-sm not-italic text-neutral-600 min-h-16">
                  <strong className="text-neutral-950">Bois d'Arcy</strong>
                  <br />2 rue Maurice Ravel
                  <br />
                  78390, Bois d'Arcy, France
                </address>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="pt-6 group-[&amp;:nth-child(-n+2)]:-mt-px sm:group-[&amp;:nth-child(3)]:-mt-px lg:group-[&amp;:nth-child(4)]:-mt-px relative before:absolute after:absolute before:bg-lime-600 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-11 after:right-0 after:top-0 after:h-px">
              <div className="flex items-center gap-x-6" >
                <svg 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  className="w-6 h-6 fill-white stroke-neutral-700 group-hover:stroke-lime-600  min-w-6">
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <address className="text-sm not-italic text-neutral-600  min-h-16">
                  <strong className="text-neutral-950">Téléphone</strong>
                  <br />
                  <a className="text-neutral-600 hover:text-neutral-950" href="tel:+33987750822">
                    +33 9 87 75 08 22
                  </a>
                </address>
              </div>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
    </>
  );
};

export default Contact;
