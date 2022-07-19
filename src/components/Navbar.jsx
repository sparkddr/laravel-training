import {
  SearchIcon,
  MenuAlt4Icon,
  ChevronDownIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import Logoimg from "../assets/logomark.min.svg";
import Logotype from "../assets/logotype.min.svg";
import Button from "./Button";
import { LibraryTwo } from "./Library";

import { Transition } from "@headlessui/react";
import Modal from "./Modal";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showEcosystem, setshowEcosystem] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rotate, setRotate] = useState(false);

  const hideScroll = () => {
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  const clickHandler = () => {
    setNav(!nav);
    hideScroll();
  };

  const ecoHandler = () => {
    setshowEcosystem(!showEcosystem);
    setRotate(!rotate);
  };

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <nav className=" relative flex justify-between max-w-7xl m-auto z-30 ">
      <div className=" hidden absolute bg-gradientred opacity-[.15] pointer-events-none lg:inline-flex left-[-20%] -top-24 w-[640px] h-[640px] z-10"></div>
      <div className="flex  mx-5 my-4 ">
        <img src={Logoimg} alt="logo" className="w-15" />
        <img src={Logotype} alt="logo" className="w-15 mx-6" />
      </div>
      <ul className="hidden lg:flex items-center text-laragrey lg:gap-6 xl:gap-10 relative z-20">
        <li>
          <a href="https://forge.laravel.com/">Forge</a>
        </li>
        <li>
          <a href="https://vapor.laravel.com/">Vapor</a>
        </li>
        <li>
          <Transition
            show={showEcosystem}
            enter="transition-all   ease-out duration-350"
            enterFrom="opacity-0 -translate-y-4"
            enterTo="opacity-100 "
            leave="transition-all ease-in duration-250"
            leaveFrom="opacity-100 "
            leaveTo="opacity-0 -translate-y-4"
            className="absolute top-20 -left-44"
          >
            <div className=" grid grid-cols-3 w-[860px] text-xs  bg-white z-20 drop-shadow-xl pb-10 px-5 leading-relaxed">
              <LibraryTwo
                link="https://laravel.com/docs/9.x/starter-kits#laravel-breeze"
                title="Breeze"
                color="bg-amber-400	"
              >
                Lightweight starter kit scaffolding for new applications with
                Blade or Inertia.
              </LibraryTwo>
              <LibraryTwo
                link="https://laravel.com/docs/9.x/billing"
                title="Cashier"
                color="bg-lime-300	"
              >
                Take the pain out of managing subscriptions on Stripe or Paddle.
              </LibraryTwo>
              <LibraryTwo
                link="https://laravel.com/docs/9.x/dusk"
                title="Dusk"
                color="bg-fuchsia-700	"
              >
                Take the pain out of managing subscriptions on Stripe or Paddle.
              </LibraryTwo>
              <LibraryTwo
                link="https://laravel.com/docs/9.x/broadcasting"
                title="Echo"
                color="bg-teal-400	"
              >
                Listen for WebSocket events broadcast by your Laravel
                application.
              </LibraryTwo>
              <LibraryTwo
                link="https://envoyer.io/"
                title="Envoyer"
                color="bg-red-400	"
              >
                Deploy your Laravel applications to customers with zero
                downtime.
              </LibraryTwo>
              <LibraryTwo
                link="https://envoyer.io/"
                title="Forge"
                color="bg-emerald-400	"
              >
                Server management doesn't have to be a nightmare.
              </LibraryTwo>
              <LibraryTwo
                link="https://laravel.com/docs/9.x/horizon"
                title="Horizon"
                color="bg-violet-400	"
              >
                Beautiful UI for monitoring your Redis driven Laravel queues.
              </LibraryTwo>
              <LibraryTwo
                link="https://jetstream.laravel.com/"
                title="Jetstream"
                color="bg-indigo-500	"
              >
                Robust starter kit including authentication and team management.
              </LibraryTwo>
              <LibraryTwo
                link="https://laravel.com/docs/9.x/mix"
                title="Mix"
                color="bg-blue-900	"
              >
                Compile your JavaScript and CSS using Webpack with zero
                configuration.
              </LibraryTwo>
              <LibraryTwo
                link="https://nova.laravel.com/"
                title="Nova"
                color="bg-sky-600	"
              >
                Thoughtfully designed administration panel for your Laravel
                applications.
              </LibraryTwo>
              <LibraryTwo
                link="https://laravel.com/docs/9.x/octane"
                title="Octane"
                color="bg-orange-700	"
              >
                Supercharge your application's performance by keeping it in
                memory.
              </LibraryTwo>
              <LibraryTwo
                link="https://laravel.com/docs/9.x/sail"
                title="Sail"
                color="bg-cyan-400	"
              >
                Hand-crafted Laravel local development experience using Docker.
              </LibraryTwo>
              <LibraryTwo
                link="https://laravel.com/docs/9.x/sanctum"
                title="Sanctum"
                color="bg-teal-900	"
              >
                API and mobile application authentication without wanting to
                pull your hair out.
              </LibraryTwo>
              <LibraryTwo
                link="https://laravel.com/docs/9.x/scout"
                title="Scout"
                color="bg-red-400	"
              >
                Lightning fast full-text search for your application's Eloquent
                models.
              </LibraryTwo>
              <LibraryTwo
                link="https://laravel.com/docs/9.x/socialite"
                title="Socialite"
                color="bg-pink-300	"
              >
                Social authentication via Facebook, Twitter, GitHub, LinkedIn,
                and more.
              </LibraryTwo>
              <LibraryTwo
                link="https://spark.laravel.com/"
                title="Spark"
                color="bg-violet-400	"
              >
                Launch your next business with our fully-featured, drop-in
                billing portal.
              </LibraryTwo>
              <LibraryTwo
                link="https://laravel.com/docs/9.x/telescope"
                title="Telescope"
                color="bg-indigo-700	"
              >
                Debug your application using our debugging and insight UI.
              </LibraryTwo>
              <LibraryTwo
                link="https://laravel.com/docs/9.x/valet"
                title="Valet"
                color="bg-violet-800	"
              >
                The fastest Laravel local development experience - exclusively
                for macOS.
              </LibraryTwo>
              <LibraryTwo
                link="https://vapor.laravel.com/"
                title="Vapor"
                color="bg-cyan-400	"
              >
                Laravel Vapor is a serverless deployment platform for Laravel,
                powered by AWS.
              </LibraryTwo>
              <p></p>
              <p></p>
            </div>
          </Transition>
          <div
            className="group flex items-center cursor-pointer"
            onClick={ecoHandler}
          >
            Ecosystem{" "}
            <ChevronDownIcon
              className={
                "w-5 ml-2 transition-transform duration-300 rotate-0 " +
                (rotate && "rotate-180")
              }
            />
          </div>
        </li>
        <li>
          <a href="https://laravel-news.com/">News</a>
        </li>
        <li>
          <a href="https://partners.laravel.com/">Partners</a>
        </li>
      </ul>

      <div className="flex mx-7 text-laragrey items-center">
        <div onClick={modalHandler}>
          <SearchIcon className="w-6 mr-3 cursor-pointer" />
        </div>
        {!nav ? (
          <MenuAlt4Icon
            onClick={clickHandler}
            className="w-6 lg:hidden cursor-pointer "
          />
        ) : (
          <XIcon
            onClick={clickHandler}
            className="w-6 lg:hidden cursor-pointer "
          />
        )}
        <Button
          className="h-9 mb-0"
          hidden="hidden lg:inline-block "
          link="https://laravel.com/docs"
        >
          DOCUMENTATION
        </Button>
      </div>
      <div
        className={
          !nav
            ? "hidden"
            : "absolute h-screen mt-20 px-5 text-laragrey bg-white w-screen"
        }
      >
        <ul>
          <li className="mt-6">
            <a href="https://forge.laravel.com/">Forge</a>
          </li>
          <li className="mt-6">
            <a href="https://vapor.laravel.com/">Vapor</a>
          </li>
          <li className="mt-6">
            <a href="https://laravel-news.com/">News</a>
          </li>
          <li className="mt-6">
            <a href="https://partners.laravel.com/">Partners</a>
          </li>
          <li className="mt-6 flex">
            <Button
              link="https://laravel.com/docs"
              hidden="block w-5/6 sm:w-2/4 m-auto  text-center"
              className="block m-auto w-full"
            >
              DOCUMENTATION
            </Button>
          </li>
        </ul>
      </div>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </nav>
  );
};

export default Navbar;
