"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import {
  useQuery,
} from '@tanstack/react-query'

export const Form = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['getDownload'],
    queryFn: () =>
      fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
        (res) => res.json(),
      ),
  })

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>An error has occurred:</p>

  return (
    <form className="w-full flex items-center gap-3 md:flex-row flex-col">
      <input
        type="text"
        className="text-white max-w-[500px] w-full rounded-md p-2 focus:outline-none focus:ring focus:ring-white transition border border-white bg-transparent placeholder:text-gray-400"
        placeholder="Link do vídeo"
      />
      <Menu as="div" className="relative inline-block text-left">
        <div className="w-full">
          <Menu.Button className="inline-flex w-full justify-center rounded-md border border-white py-[10px] px-2 text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
            Converter
            <HiChevronDown
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-slate-300 rounded-md bg-white shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-slate-800 text-white" : "text-gray-800"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Vídeo(MP4)
                  </button>
                )}
              </Menu.Item>
            </div>

            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-slate-800 text-white" : "text-gray-800"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Música(MP3)
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </form>
  );
};
