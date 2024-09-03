import {Logo} from "./Logo"

function Sidebar() {

  return (
    <div className="flex flex-col w-[210px] max-w-[40vw] justify-start items-center py-5">
        <div className="flex pb-2 px-10 items-center">
          <h2 className="font-bold text-gray-700">Categories</h2>
        </div>
        <div className="flex flex-col items-center">
          <a href="#" className="px-10 w-full p-1 text-gray-600 hover:text-gray-900">
            <h3>All books</h3>
          </a>
          <a href="#" className="px-10 w-full p-1 text-gray-600 hover:text-gray-900">
            <h3>Academic</h3>
          </a>
          <a href="#" className="px-10 w-full p-1 text-gray-600 hover:text-gray-900">
            <h3>Drama</h3>
          </a>
          <a href="#" className="px-10 w-full p-1 text-gray-600 hover:text-gray-900">
            <h3>Music</h3>
          </a>
          <a href="#" className="px-10 w-full p-1 text-gray-600 hover:text-gray-900">
            <h3>Fiction</h3>
          </a>
          <a href="#" className="px-10 w-full p-1 text-gray-600 hover:text-gray-900">
            <h3>Paranormal</h3>
          </a>
        </div>
    </div>
  );
}

export default Sidebar;