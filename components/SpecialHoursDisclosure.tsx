'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

export default function SpecialHoursDisclosure({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full max-w-md mx-auto rounded-2xl">
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <DisclosureButton className="flex justify-between w-full px-4 py-2 font-medium text-left rounded-lg text-cyan-900 bg-cyan-100 hover:bg-cyan-200 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-cyan-500/75">
              <span>Orari speciali</span>
              <ChevronUpIcon
                className={`${open ? 'rotate-180' : ''} w-5 h-5 text-cyan-500`}
              />
            </DisclosureButton>
            <DisclosurePanel className="pt-4 pb-2 text-gray-500">
              {children}
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
