import React from "react"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Header from "../components/Header"
import GridPattern from '../components/GridPattern'
import Client from "../components/Client"

export default function Home() {
  return (
    <>
    <Header />
    <div style={{borderTopLeftRadius:40, borderTopRightRadius:40}} className='relative flex flex-auto overflow-hidden bg-white pt-14' >
      <div className='relative isolate flex w-full flex-col pt-9' >
        <GridPattern />
        <main className='w-full flex-auto' >
          <div id="about" className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-3xl">
                <h1 className="font-display text-4xl font-medium tracking-tight text-blue-950 [text-wrap:balance] sm:text-6xl">
                  Libérez votre potentiel digital
                </h1>
                <p className="mt-6 text-xl text-neutral-600">
                  Nous accompagnons les entreprises dans leur transformation digitale grâce à des solutions innovantes et sur mesure.
                </p>
              </div>
            </div>
          </div>
          <div id="services" className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-2xl" >
                <h2>
                  <span className="mb-6 block font-display text-base font-semibold text-lime-600">
                    Nos Services
                  </span>
                  <span className="sr-only"> - </span>
                  <span className="block font-display tracking-tight [text-wrap:balance] text-3xl font-medium sm:text-4xl text-blue-950">
                    Accompagnement à l'Innovation et Transformation Digitale
                  </span>
                </h2>
                <div className="mt-6 text-xl text-neutral-600">
                  <p>
                    Nous vous accompagnons dans la transformation digitale de votre entreprise en mettant en place des solutions innovantes pour optimiser vos processus de production, accélérer votre croissance et maximiser votre potentiel.
                  </p>
                  </div>
                </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="lg:flex lg:items-center lg:justify-end">
                <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                  <div className="w-[33.75rem] flex-none lg:w-[45rem]">
                    <div className="justify-center lg:justify-end lg:group-even/section:justify-start relative flex aspect-[719/680] w-full grayscale">  
                      <svg viewBox="0 0 655 680" fill="none" className="h-full">
                        <g clip-path="url(#:S1:-clip)" className="group">
                          <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                            <foreignObject width="655" height="900">
                              <img 
                                alt="" 
                                loading="lazy" 
                                width="2400" 
                                height="1800" 
                                decoding="async" 
                                data-nimg="1" 
                                className="w-full bg-neutral-100 object-cover"
                                style={{ color: "transparent", aspectRatio: "655 / 680" }}
                                src="whiteboard.jpg" />
                            </foreignObject>
                          </g>
                          <use href="#:S1:-shape" stroke-width="2" className="stroke-neutral-950/10">
                          </use>
                        </g>
                        <defs>
                          <clipPath id=":S1:-clip">
                            <path id=":S1:-shape" d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z" fill-rule="evenodd" clipRule="evenodd"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <ul role="list" className="text-base text-neutral-600 mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                    <li className="group mt-10 first:mt-0">
                      <div>
                        <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-lime-600 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-10 after:right-0 after:top-0 after:h-px">
                          <strong className="font-semibold text-blue-950">Régie et Délégation de talents. </strong>
                          Nous vous proposons des consultants experts, parfaitement adaptés à vos exigences, pour une gestion flexible de votre personnel et une optimisation du développement de vos activités.
                        </div>
                      </div>
                    </li>
                    <li className="group mt-10 first:mt-0">
                      <div>
                        <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-lime-600 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-10 after:right-0 after:top-0 after:h-px">
                          <strong className="font-semibold text-blue-950">Développement d'une solution sur mesure. </strong>
                          Nous concevons des applications personnalisées qui s'adaptent précisément à vos exigences professionnelles, garantissant ainsi une intégration parfaite avec vos processus existants. 
                          </div>
                        </div>
                    </li>
                    <li className="group mt-10 first:mt-0">
                      <div>
                        <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-lime-600 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-10 after:right-0 after:top-0 after:h-px">
                          <strong className="font-semibold text-blue-950">Maintenance évolutive & corrective. </strong>
                          Nous garantissons non seulement la résolution des problèmes techniques, mais également de l'amélioration continue de ses fonctionnalités pour s'adapter aux changements dans le business.
                          </div>
                        </div>
                    </li>
                    <li className="group mt-10 first:mt-0">
                      <div>
                        <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-lime-600 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-10 after:right-0 after:top-0 after:h-px">
                          <strong className="font-semibold text-blue-950">Audit et conseil. </strong>
                          Nous réalisons un audit approfondi de vos applications pour identifier les axes d'amélioration et vous offrons des conseils personnalisés afin d'optimiser vos processus et renforcer votre infrastructure technologique.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="expertises" className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-2xl" >
                <h2>
                  <span className="mb-6 block font-display text-base font-semibold text-lime-600">
                    Domaines d'expertise
                  </span>
                  <span className="sr-only"> - </span>
                  <span className="block font-display tracking-tight [text-wrap:balance] text-3xl font-medium sm:text-4xl text-blue-950">
                    Développement d'application web et mobile sur mesure
                  </span>
                </h2>
                <div className="mt-6 text-xl text-neutral-600">
                  <p>
                    Maintenance d'applications, architecture de solutions et infrastructure cloud. 
                    Proposant des services DevOps, nous répondons à tous les besoins pour une transformation digitale réussie.
                  </p>
                  </div>
                </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="lg:flex lg:items-center lg:justify-end">
                <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                  <div className="w-[33.75rem] flex-none lg:w-[45rem]">
                    <div className="justify-center lg:justify-end relative flex aspect-[719/680] w-full ">
                      <svg viewBox="0 0 655 680" fill="none" className="h-full">
                        <g clip-path="url(#:S1:-clip)" className="group">
                        <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                          <foreignObject width="655" height="680">
                            <img 
                              alt="" 
                              loading="lazy" 
                              width="2400" 
                              height="3000" 
                              decoding="async" 
                              data-nimg="1" 
                              className="w-full bg-neutral-100 object-cover" 
                              sizes="(min-width: 1024px) 41rem, 31rem"
                              src="worker-laptop.jpg" />
                          </foreignObject>
                        </g>
                        <use href="#:S1:-shape" stroke-width="2" className="stroke-neutral-950/10">
                        </use>
                        </g>
                        <defs>
                          <clipPath id=":S1:-clip">
                            <path id=":S1:-shape" d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z" fill-rule="evenodd" clipRule="evenodd"></path>
                          </clipPath>
                          </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <ul role="list" className="text-base text-neutral-600 mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                    <li className="group mt-10 first:mt-0">
                      <div>
                        <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-lime-600 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-10 after:right-0 after:top-0 after:h-px">
                          <strong className="font-semibold text-blue-950">Ingénierie Logicielle. </strong>
                          Des solutions innovantes propulsent la croissance de votre entreprise grâce à des pratiques de développement logiciel efficientes.
                          Notre expertise garantit des résultats exceptionnels.
                        </div>
                      </div>
                    </li>
                    <li className="group mt-10 first:mt-0">
                      <div>
                        <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-lime-600 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-10 after:right-0 after:top-0 after:h-px">
                          <strong className="font-semibold text-blue-950">Architecture de Solutions. </strong>
                          Conception de solutions résilientes, performantes, sécurisées et optimisées sur le cloud AWS. 
                          Nous personnalisons chaque solution en fonction de vos besoins pour assurer un succès optimal.
                          </div>
                        </div>
                    </li>
                    <li className="group mt-10 first:mt-0">
                      <div>
                        <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-lime-600 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-10 after:right-0 after:top-0 after:h-px">
                          <strong className="font-semibold text-blue-950">Développement d'Application. </strong>
                          Construisez des solutions web robustes et évolutives, alimentées par les meilleures pratiques et les outils de pointe. 
                          Notre savoir-faire garantit des sites performants et adaptés à vos besoins spécifiques.
                          </div>
                        </div>
                    </li>
                    <li className="group mt-10 first:mt-0">
                      <div>
                        <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-lime-600 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-10 after:right-0 after:top-0 after:h-px">
                            <strong className="font-semibold text-blue-950">DevOps. </strong>
                            Optimisez votre pipeline de livraison et assurez une disponibilité maximale grâce à l'automatisation et à l'infrastructure en tant que code. 
                            Notre expertise garantit une efficacité opérationnelle et une fiabilité exceptionnelles.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Client />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
    </>
  )
}
