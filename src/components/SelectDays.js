import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const handleLabel = (days) => {
  if (days) {
    switch (days) {
      case "2":
        return "يومين";
      case "3":
        return "ثلاثة ايام";
      case "5":
        return "دوام كامل";
      default:
        return "دوام كامل";
    }
  } else return "اختر عدد الايام";
};
function SelectDays({ days, setDays }) {
  return (
    <Menu as="div" className="relative inline-block text-left w-1/2">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-lg font-medium text-secondary hover:bg-gray-50 focus:outline-none ">
          {handleLabel(days)}
          <ChevronDownIcon className="absolute right-4 -mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top right-0 w-full p-2 absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 w-full">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={(e) => setDays(e.target.value)}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "w-full px-4 py-2 text-lg"
                  )}
                  value={2}
                >
                  يومين
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={(e) => setDays(e.target.value)}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "w-full px-4 py-2 text-lg"
                  )}
                  value={3}
                >
                  ثلاثة ايام
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={(e) => setDays(e.target.value)}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "w-full px-4 py-2 text-lg"
                  )}
                  value={5}
                >
                  دوام كامل
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default SelectDays;
