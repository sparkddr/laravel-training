import { Dialog } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { SearchIcon, XIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

const Modal = (props) => {
  return (
    <Transition show={props.isModalOpen} as={Fragment}>
      <Dialog onClose={() => props.setIsModalOpen(false)}>
        <div className="fixed inset-0 flex items-start justify-center p-4 z-30 bg-zinc-900/80 text-[#B5B5BD]">
          <XIcon className="w-6 absolute right-8 top-10  cursor-pointer " />
          <Transition.Child
            enter="transition-all   duration-100"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="transition-all ease-in duration-50"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-80"
            as={Fragment}
          >
            <Dialog.Panel className="relative w-full max-w-3xl rounded bg-gray-900 mt-16 pb-48 px-8 py-8">
              <div className="flex border-b border-[#B5B5BD]/50 pb-1">
                <label htmlFor="search">
                  <SearchIcon className="w-6 mr-3 cursor-pointer" />
                </label>
                <input
                  name="search"
                  id="search"
                  type="search"
                  className="  outline-none bg-inherit w-full "
                  placeholder="Search Docs (Press '/')"
                />
              </div>
              <p className="mt-8">
                Enter a search term to find results in the documentation.
              </p>
              <img
                src="https://laravel.com/img/icons/algolia.dark.min.svg"
                alt="algolia"
                className="absolute right-2 bottom-2"
              />
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
