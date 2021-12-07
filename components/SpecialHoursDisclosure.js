import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/outline'

export default function SpecialHoursDisclosure({ children }) {
  return (
    <div className="w-full max-w-md mx-auto rounded-2xl">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left rounded-lg text-cyan-900 bg-cyan-100 hover:bg-cyan-200 focus:outline-none focus-visible:ring focus-visible:ring-cyan-500 focus-visible:ring-opacity-75">
              <span>Orari speciali</span>
              <ChevronUpIcon
                className={`${
                  open ? 'transform rotate-180' : ''
                } w-5 h-5 text-cyan-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="pt-4 pb-2 text-gray-500">
              {children}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
