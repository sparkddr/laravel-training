import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Library from "../components/Library";
import Testimony from "../components/Testimony";
import Footer from "../components/Footer";
import Cube from "../components/Cube";

import testimonyList from "../assets/testimony";

import IconData from "../assets/ICONS/DATABASE.svg";

import WriteCode from "../assets/WriteCode.jsx";
import Monolith from "../assets/Monolith";
import MoveFast from "../assets/MoveFast";

import AboutYouLogo from "../assets/ICONS/Companies/about-you.png";
import WweLogo from "../assets/ICONS/Companies/wwe.png";
import JudeLogo from "../assets/ICONS/Companies/st-jude.png";
import TwitchLogo from "../assets/ICONS/Companies/twitch.png";
import BankrateLogo from "../assets/ICONS/Companies/bankrate.png";
import WarnerLogo from "../assets/ICONS/Companies/warner-bros.png";
import NytLogo from "../assets/ICONS/Companies/the-new-york-times.png";
import DisneyLogo from "../assets/ICONS/Companies/disney.png";

import Laracon from "../assets/Pictures/laracon.png";
import Partners from "../assets/Pictures/partners.png";

function Home() {
  return (
    <div className="App">
      <Navbar />
      {/* HERO */}
      <section className="relative overflow-y-visible overflow-x-hidden py-10 z-10">
        <Cube className="-left-2 top-16 md:hidden" />
        <Cube className="-right-2 top-8 md:hidden" />
        <Cube className="right-10 bottom-36 md:hidden" />
        <div className="relative max-w-6xl mx-auto ">
          <Cube className=" hidden md:block md:left-24 md:-top-10 " />
          <Cube className=" hidden md:block md:right-52 md:-top-16 " />
          <Cube className=" hidden md:block md:right-8 md:bottom-16 " />
          <div className="relative text-center max-w-screen-xl mx-auto my-20 z-0  ">
            <h1 className=" relative text-5xl md:text-6xl lg:text-7xl font-bold z-10 ">
              The PHP Framework <br className="hidden lg:block" />
              <span className="text-larared">for Web Artisans</span>
            </h1>
            <p className="  px-5 md:max-w-xl mx-auto md:text-lg mt-5 lg:mt-10 leading-relaxed">
              Laravel is a web application framework with expressive, elegant
              syntax. We’ve already laid the foundation — freeing you to create
              without sweating the small things.
            </p>
            <div className="max-w-sm m-auto mt-5 md:mt-8 lg:md-10 flex sm:flex-row flex-col justify-around px-5">
              <Button
                link="https://laravel.com/docs"
                color="red"
                className="w-full"
              >
                GET STARTED
              </Button>
              <Button
                link="https://laracasts.com/"
                className="w-full"
                hidden="mt-4 sm:mt-0"
              >
                WATCH LARACASTS
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* COMPANIES ICONS */}
      <div className="hidden md:flex justify-center h-[60px] max-w-8xl mx-auto items-center  gap-10 mb-20 py-20 xl:py-32 overflow-hidden">
        <img src={AboutYouLogo} alt="aboutyou logo" className="h-8" />
        <img src={WweLogo} alt="wwe logo" className="h-10" />
        <img src={JudeLogo} alt="jude logo" className="h-14" />
        <img src={TwitchLogo} alt="twitch logo" className="h-8" />
        <img src={BankrateLogo} alt="bankrate logo" className="h-7" />
        <img src={DisneyLogo} alt="bankrate logo" className="h-9" />
        <img src={WarnerLogo} alt="warner-bros logo" className="h-9" />
        <img src={NytLogo} alt="New York Timex logo" className="h-7" />
      </div>
      {/* Section 1 Write code for the joy */}
      <section className="relative  overflow-x-clip lg:pt-28">
        <div className="hidden absolute bg-gradientred opacity-[.15] pointer-events-none lg:block right-[-20%] top-0 w-[640px] h-[640px]"></div>
        <Cube className="hidden lg:block lg: top-16 lg:right-1/3" />
        <Cube className="hidden lg:block lg:-right-2 lg:bottom-20" />
        <Cube className="hidden lg:block lg:top-52 lg:right-2/4" />
        <div className="relative lg:flex lg:flex-row-reverse justify-between max-w-7xl lg:m-auto pl-5 overflow-hidden ">
          <div className="ml-10  mb-10 -translate-x-20 sm:translate-x-0 lg:translate-x-20">
            <WriteCode />
          </div>
          <div className="sm:max-w-lg sm:m-auto lg:mx-0 ">
            <h2>Write code for the joy of it.</h2>
            <p className="my-6 ">
              Laravel values beauty. We love clean code just as much as you do.
              Simple, elegant syntax puts amazing functionality at your
              fingertips. Every feature has been thoughtfully considered to
              provide a wonderful developer experience.
            </p>
            <div className="flex">
              <Button link="https://laravel.com/docs">START LEARNING</Button>
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 Monolith or Api  */}
      <section className="mt-40 lg:flex lg:flex-row xl:mt-60 max-w-6xl lg:mx-auto ">
        <div className="overflow-hidden lg:flex lg:items-center mx-auto  mb-10 ">
          <Monolith />
        </div>
        <div className="px-5 mt-20 lg:mt-0 lg:pl-10  sm:max-w-lg mx-auto">
          <h2>Monolith or API — the choice is yours.</h2>
          <p className="my-6 ">
            Build robust, full-stack applications in PHP using Laravel and{" "}
            <a href="https://laravel-liverwire.com" className="underline">
              Livewire
            </a>
            . Love JavaScript? Build a monolithic React or Vue driven frontend
            by pairing Laravel with{" "}
            <a href="https://inertiajs.com" className="underline">
              Inertia
            </a>{" "}
            .
          </p>
          <p className="mb-6">
            Or, let Laravel serve as a robust backend API for your Next.js
            application, mobile application, or other frontend. Either way, our
            starter kits will have you productive in minutes.
          </p>

          <Button link="https://laravel.com/docs/starter-kits">
            STARTER KITS
          </Button>
        </div>
      </section>
      {/* Section 3 Everything you need */}
      <section className="relative overflow-x-clip ">
        <div className="hidden absolute bg-gradientred opacity-[.15] pointer-events-none lg:block right-[-20%] -top-32 w-[640px] h-[640px]"></div>
        <div className="mt-36 xl:mt-44 md:pt-10 max-w-7xl mx-auto">
          <h2 className=" mt-14 lg:mt-0 px-5   sm:max-w-xl ">
            Everything you need to be amazing.
          </h2>
          <div className="md:grid md:grid-cols-2 md:mt-8 lg:grid-cols-4 md:grid-flow-row text-sm leading-6">
            <div className="px-5 mt-8">
              <img
                src={IconData}
                width="32px"
                height="32px"
                alt="databaseicon"
              />
              <h3 className="text-xl font-bold mt-4">Database</h3>
              <p className="mt-4">
                Laravel's{" "}
                <a
                  href="https://laravel.com/docs/eloquent"
                  className="underline"
                >
                  "Eloquent" ORM
                </a>{" "}
                provides best-in-class database abstraction without the
                headaches. Query and update your data without breaking a sweat.
                Eloquent pairs perfectly with MySQL, Postgres, SQLite, and SQL
                Server.
              </p>
            </div>
            <div className="px-5 mt-8 ">
              <img
                src={IconData}
                width="32px"
                height="32px"
                alt="databaseicon"
              />
              <h3 className="text-xl font-bold mt-4">Queues</h3>
              <p className="mt-4 text-sm leading-6">
                Dispatch background jobs to perform slow tasks like sending
                emails and generating reports while maintaining blazing fast
                response times. Laravel's{" "}
                <a href="https://laravel.com/docs/queues" className="underline">
                  robust queue system
                </a>{" "}
                can process jobs using Redis, Amazon SQS, or even MySQL and
                Postgres.
              </p>
            </div>
            <div className="px-5 mt-8">
              <img
                src={IconData}
                width="32px"
                height="32px"
                alt="databaseicon"
              />
              <h3 className="text-xl font-bold mt-4">WebSockets</h3>
              <p className="mt-4">
                <a
                  href="https://laravel.com/docs/broadcasting"
                  className="underline"
                >
                  Laravel Echo
                </a>{" "}
                and event broadcasting make it a cinch to build modern, realtime
                user experiences. Create amazing realtime applications while
                powering your WebSockets with pure PHP, Node.js, or serverless
                solutions like{" "}
                <a href="https://pusher.com/" className="underline">
                  Pusher
                </a>{" "}
                and <a href="https://ably.com/">Ably</a> .
              </p>
            </div>
            <div className="px-5 mt-8">
              <img
                src={IconData}
                width="32px"
                height="32px"
                alt="databaseicon"
              />
              <h3 className="text-xl font-bold mt-4">Authentication</h3>
              <p className="mt-4">
                Stop sweating authentication. Laravel provides scaffolding for
                secure, session based authentication, while{" "}
                <a
                  href="https://laravel.com/docs/sanctum"
                  className="underline"
                >
                  Laravel Sanctum
                </a>{" "}
                provides painless authentication for APIs and mobile
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 Move fast */}
      <section className="relative">
        <Cube className="hidden lg:block lg:-top-4 lg:right-2/4" />
        <Cube className="hidden lg:block lg:left-1/3 lg:-bottom-16" />
        <Cube className="hidden lg:block lg:top-20 lg:left-2" />
        <div className="hidden absolute bg-gradientred opacity-[.15] pointer-events-none lg:inline-flex left-[-20%] -top-52 w-[640px] h-[640px]"></div>
        <div className=" relative mt-60 mb-36 lg:flex lg:flex-row lg:justify-between max-w-7xl lg:mx-auto px-5 overflow-hidden">
          <div className=" lg:flex justify-center lg:w-1/2 mx-auto lg:-translate-x-4 ">
            <MoveFast />
          </div>
          <div className=" mt-14 lg:mt-0    lg:w-1/2 mx-auto">
            <div className="sm:max-w-[480px] m-auto">
              <h2 className="text-4xl md:text-5xl">
                Move fast... <br /> with confidence.
              </h2>
              <p className="my-6 ">
                Laravel is committed to delivering the best testing experience
                you can imagine. No more brittle tests that are a nightmare to
                maintain. Beautiful testing APIs, database seeding, and painless
                browser testing let you ship with confidence.
              </p>
              <Button link="https://laravel.com/docs/http-tests">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 Entreprise Scale*/}
      <section className="pt-1 lg:pt-32 max-w-7xl m-auto">
        <h2 className=" mt-14 lg:mt-0 pl-5 sm:max-w-xl">
          Enterprise scale without the enterprise complexity.
        </h2>
        <p className="pl-5 mt-8 sm:max-w-xl">
          Our vast library of meticulously maintained packages means you're
          ready for anything. Let{" "}
          <a href="https://laravel.com/docs/octane" className="underline">
            Laravel Octane
          </a>{" "}
          supercharge your application's performance, and experience infinite
          scale on{" "}
          <a href="https://vapor.laravel.com/" className="underline">
            Laravel Vapor
          </a>
          , our serverless deployment platform powered by AWS Lambda.
        </p>
        <div>
          <div className="grid md:grid-cols-2 px-5 gap-6 mt-10 text-sm">
            <Library
              link="https://forge.laravel.com/"
              title="Forge"
              color="bg-emerald-400 "
              pb="pb-5"
            >
              Server management doesn't have to be a nightmare. Provision and
              deploy unlimited PHP applications on DigitalOcean, Linode, Vultr,
              Amazon, Hetzner and more.
            </Library>
            <Library
              link="https://vapor.laravel.com/"
              title="Vapor"
              color="bg-cyan-400	"
              pb="pb-5"
            >
              Laravel Vapor is a serverless deployment platform for Laravel,
              powered by AWS. Launch your Laravel infrastructure on Vapor and
              fall in love with the scalable simplicity of serverless.
            </Library>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 px-5 gap-6 mt-10 text-sm">
            <Library
              link="https://laravel.com/docs/9.x/starter-kits#laravel-breeze"
              title="Breeze"
              color="bg-amber-400	"
            >
              Lightweight starter kit scaffolding for new applications with
              Blade or Inertia.
            </Library>
            <Library
              link="https://laravel.com/docs/9.x/billing"
              title="Cashier"
              color="bg-lime-300	"
            >
              Take the pain out of managing subscriptions on Stripe or Paddle.
            </Library>
            <Library
              link="https://laravel.com/docs/9.x/dusk"
              title="Dusk"
              color="bg-fuchsia-700	"
            >
              Take the pain out of managing subscriptions on Stripe or Paddle.
            </Library>
            <Library
              link="https://laravel.com/docs/9.x/broadcasting"
              title="Echo"
              color="bg-teal-400	"
            >
              Listen for WebSocket events broadcast by your Laravel application.
            </Library>
            <Library
              link="https://envoyer.io/"
              title="Envoyer"
              color="bg-red-400	"
            >
              Deploy your Laravel applications to customers with zero downtime.
            </Library>
            <Library
              link="https://laravel.com/docs/9.x/horizon"
              title="Horizon"
              color="bg-violet-400	"
            >
              Beautiful UI for monitoring your Redis driven Laravel queues.
            </Library>
            <Library
              link="https://jetstream.laravel.com/"
              title="Jetstream"
              color="bg-indigo-500	"
            >
              Robust starter kit including authentication and team management.
            </Library>
            <Library
              link="https://laravel.com/docs/9.x/mix"
              title="Mix"
              color="bg-blue-900	"
            >
              Compile your JavaScript and CSS using Webpack with zero
              configuration.
            </Library>
            <Library
              link="https://nova.laravel.com/"
              title="Nova"
              color="bg-sky-600	"
            >
              Thoughtfully designed administration panel for your Laravel
              applications.
            </Library>
            <Library
              link="https://laravel.com/docs/9.x/octane"
              title="Octane"
              color="bg-orange-700	"
            >
              Supercharge your application's performance by keeping it in
              memory.
            </Library>
            <Library
              link="https://laravel.com/docs/9.x/sail"
              title="Sail"
              color="bg-cyan-400	"
            >
              Hand-crafted Laravel local development experience using Docker.
            </Library>
            <Library
              link="https://laravel.com/docs/9.x/sanctum"
              title="Sanctum"
              color="bg-teal-900	"
            >
              API and mobile application authentication without wanting to pull
              your hair out.
            </Library>
            <Library
              link="https://laravel.com/docs/9.x/scout"
              title="Scout"
              color="bg-red-400	"
            >
              Lightning fast full-text search for your application's Eloquent
              models.
            </Library>
            <Library
              link="https://laravel.com/docs/9.x/socialite"
              title="Socialite"
              color="bg-pink-300	"
            >
              Social authentication via Facebook, Twitter, GitHub, LinkedIn, and
              more.
            </Library>
            <Library
              link="https://spark.laravel.com/"
              title="Spark"
              color="bg-violet-400	"
            >
              Launch your next business with our fully-featured, drop-in billing
              portal.
            </Library>
            <Library
              link="https://laravel.com/docs/9.x/telescope"
              title="Telescope"
              color="bg-indigo-700	"
            >
              Debug your application using our debugging and insight UI.
            </Library>
            <Library
              link="https://laravel.com/docs/9.x/valet"
              title="Valet"
              color="bg-violet-800	"
            >
              The fastest Laravel local development experience - exclusively for
              macOS.
            </Library>
          </div>
        </div>
      </section>

      {/* Section 6 Loved by thousands of developers */}
      <section className=" relative pt-40 px-5 xl:px-0 max-w-7xl mx-auto ">
        <Cube className=" -left-7 top-48" />
        <Cube className=" right-20 top-20" />
        <Cube className=" right-0 -bottom-20" />
        <h2 className="text-4xl md:text-5xl text-center max-w-4xl mx-auto">
          Loved by thousands of developers around the world.
        </h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5 mt-14">
          {testimonyList.map((testimony) => {
            return (
              <Testimony
                key={testimony.author + testimony.description}
                author={testimony.author}
                img={testimony.img}
                description={testimony.description}
                entreprise={testimony.entreprise}
                link={testimony.link}
              >
                {testimony.text}
              </Testimony>
            );
          })}
        </div>
      </section>
      {/* Section 7 A community */}
      <section className="relative">
        <div className="hidden absolute bg-gradientred opacity-[.15] pointer-events-none lg:block left-[-20%] -top-0 w-[640px] h-[640px]"></div>
        <div className="relative pt-40 px-5 lg:flex xl:px-0 max-w-7xl justify-between m-auto">
          <div className="flex flex-col  justify-center  sm:max-w-xl  xl:ml-0 mx-auto lg:mx-0 lg:justify-self-start ">
            <h2>A community built for people like you.</h2>
            <p className="mt-7">
              Laravel is for everyone — whether you have been programming for 20
              years or 20 minutes. It's for architecture astronauts and weekend
              hackers. For those with degrees and for those who dropped out to
              chase their dreams. Together, we create amazing things.
            </p>
            <ul className="mt-14 text-laragrey grid grid-cols-2 gap-9 md:grid-cols-3">
              <li className="flex space-x-3 items-center ">
                <svg
                  className="text-red-600 w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="currentColor" d="M.5.5h31v31H.5z"></path>
                  <path
                    d="M10 9c7.18 0 13 5.82 13 13m-13-7a7 7 0 0 1 7 7m-6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <a href="https://blog.laravel.com/">Blog</a>
              </li>
              <li className="flex space-x-3 items-center ">
                <svg
                  className="text-red-600 w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="currentColor" d="M.5.5h31v31H.5z"></path>
                  <path
                    d="M11 12h10-10Zm0 4h4-4Zm5 8-4-4H9a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3l-4 4Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <a href="https://laracasts.com/discuss">Forums</a>
              </li>
              <li className="flex space-x-3 items-center ">
                <svg
                  className="text-red-600 w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="currentColor" d="M.5.5h31v31H.5z"></path>
                  <path
                    d="M25 17.255A23.93 23.93 0 0 1 16 19c-3.183 0-6.22-.62-9-1.745M16 16h.01M20 10V8a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2h8ZM9 24h14a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <a href="https://larajobs.com/">Jobs</a>
              </li>
              <li className="flex space-x-3 items-center ">
                <svg
                  className="text-red-600 w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="currentColor" d="M.5.5h31v31H.5z"></path>
                  <path
                    d="M23 24H9a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V11m2 13a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2m-4-3h-4m-2 12h6m-6-8h6v4h-6v-4Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <a href="https://laravel-news.com/">Laravel News</a>
              </li>
              <li className="flex space-x-3 items-center ">
                <svg
                  className="text-red-600 w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="currentColor" d="M.5.5h31v31H.5z"></path>
                  <path
                    d="m18.752 15.168-3.197-2.132A1 1 0 0 0 14 13.87v4.263a1 1 0 0 0 1.555.832l3.197-2.132a.998.998 0 0 0 0-1.664v-.001Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M25 16a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <a href="https://laracasts.com/">Laracasts</a>
              </li>
            </ul>
          </div>
          <div className="-rotate-1 border border-gray-200 lg:border-red-500 max-w-sm mx-auto lg:mx-0 self-end mt-16 lg:mt-0 py-8 px-6 ">
            <img src={Laracon} alt="laracon" className="max-w-[220px] m-auto" />
            <h3 className="text-xs text-red-500 font-bold mt-8">
              WATCH US ON LARACASTS
            </h3>
            <h2 className="mt-3 text-4xl">Tune In</h2>
            <p className="mt-4 mb-6">
              Laracasts includes free videos and tutorials covering the entire
              Laravel ecosystem. Stay up to date by watching our latest videos.
            </p>
            <Button link="https://laracasts.com/">START WATCHING</Button>
          </div>
        </div>
      </section>

      {/* Section 8 Partner for your next project */}

      <section className="px-6 pt-40 max-w-7xl m-auto grid lg:grid-cols-2">
        <div className="relative max-w-[480px] m-auto  ">
          <Cube className="right-24 lg:-right-24 -top-16" />
          <Cube className="-left-12 -bottom-6" />
          <img src={Partners} alt="partners" className="lg:rotate-2" />
        </div>
        <div className=" sm:max-w-md mx-auto mt-14 lg:mx-0 lg:justify-self-end">
          <h2 className="text-4xl">Hire a partner for your next project</h2>
          <p className="mt-4 mb-8">
            Laravel Partners are elite shops providing top-notch Laravel
            development and consulting. Each of our partners can help you craft
            a beautiful, well-architected project.
          </p>
          <Button link="https://partners.laravel.com/">BROWSE PARTNERS</Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
