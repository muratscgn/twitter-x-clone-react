import { Popover, Transition } from "@headlessui/react";
import { useAccount } from "../../../../store/auth/hooks";
import MoreAccount from "./more-account";

export default function Account() {

  const account = useAccount()

  return (
    <div className="mt-auto">
      <Popover className="relative">
        <Popover.Button
          className="my-5 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex text-left items-center"
        >
          <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />
          <div className="mx-3 text-[15px] ">
            <h6 className="font-bold leading-[20px]">{account.fullName}</h6>
            <div className="text-[#71767b]">
              @{account.username}
            </div>
          </div>
          <svg viewBox="0 0 24 24" className="ml-auto h-[1.172rem]">
            <path
              fill="currentColor"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            />
          </svg>
        </Popover.Button>
        <Transition
          enter="transition duration-200 ease-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
        >
          <Popover.Panel className="absolute bottom-[85px] w-[300px] left-1/2 -translate-x-1/2 bg-black shadow-box rounded-xl overflow-hidden py-3">
            {({ close }) => (
              <MoreAccount close={close} />
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}