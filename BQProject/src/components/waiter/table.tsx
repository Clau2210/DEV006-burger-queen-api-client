import React, { Fragment, useEffect, useState } from "react";
import { Listbox } from '@headlessui/react';
import { Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';


export interface Table {
  id: number;
  name: string;
  avatar: string;
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

type TableSelectProps = {
  onChangeTable: (table: Table) => void,
}

const TableSelect: React.FC<TableSelectProps> = ({ onChangeTable }) => {
  const people: Table[] = [
    {
      id: 1,
      name: "Mesa 1",
      avatar:
        "https://e7.pngegg.com/pngimages/488/544/png-clipart-coffee-tables-round-table-wood-side-table-glass-angle.png",
    },
    {
      id: 2,
      name: "Mesa 2",
      avatar:
        "https://e7.pngegg.com/pngimages/488/544/png-clipart-coffee-tables-round-table-wood-side-table-glass-angle.png",
    },
    {
      id: 3,
      name: "Mesa 3",
      avatar:
        "https://e7.pngegg.com/pngimages/488/544/png-clipart-coffee-tables-round-table-wood-side-table-glass-angle.png",
    },
    {
      id: 4,
      name: "Mesa 4",
      avatar:
        "https://e7.pngegg.com/pngimages/488/544/png-clipart-coffee-tables-round-table-wood-side-table-glass-angle.png",
    },
    {
      id: 5,
      name: "Mesa 5",
      avatar:
        "https://e7.pngegg.com/pngimages/488/544/png-clipart-coffee-tables-round-table-wood-side-table-glass-angle.png",
    },
    {
      id: 6,
      name: "Mesa 6",
      avatar:
        "https://e7.pngegg.com/pngimages/488/544/png-clipart-coffee-tables-round-table-wood-side-table-glass-angle.png",
    },
    {
      id: 7,
      name: "Mesa 7",
      avatar:
        "https://e7.pngegg.com/pngimages/488/544/png-clipart-coffee-tables-round-table-wood-side-table-glass-angle.png",
    },
    {
      id: 8,
      name: "Mesa 8",
      avatar:
        "https://e7.pngegg.com/pngimages/488/544/png-clipart-coffee-tables-round-table-wood-side-table-glass-angle.png",
    },
    {
      id: 9,
      name: "Mesa 9",
      avatar:
        "https://e7.pngegg.com/pngimages/488/544/png-clipart-coffee-tables-round-table-wood-side-table-glass-angle.png",
    },
    {
      id: 10,
      name: "Mesa 10",
      avatar:
        "https://e7.pngegg.com/pngimages/488/544/png-clipart-coffee-tables-round-table-wood-side-table-glass-angle.png",
    },
  ];

  const [selected, setSelected] = useState<Table>(people[3]);

  useEffect(() => {
    onChangeTable(selected);
  }, [selected]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-2 bg-[#292D32]">
            <Listbox.Button className="relative w-100 ml-3 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img
                  src={selected.avatar}
                  alt=""
                  className="h-5 w-5 flex-shrink-0 rounded-full"
                />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-100 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={person.avatar}
                            alt=""
                            className="h-5 w-5 flex-shrink-0 rounded-full"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default TableSelect;
