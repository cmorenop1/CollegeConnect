import React from 'react'; 
import { HiBadgeCheck, HiOutlineCalendar } from "react-icons/hi";
import { LocationMarkerIcon } from '@heroicons/react/solid'

const LobbyHeader = () => {
  return (
    <div class="px-3 py-3" className="lg:flex lg:items-center lg:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Business Technology Management</h2>
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Toronto Metropolitan University, Toronto Campus
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <HiOutlineCalendar className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Summer 2022
          </div>
        </div>
      </div>
    </div>
  )
}

export default LobbyHeader;
