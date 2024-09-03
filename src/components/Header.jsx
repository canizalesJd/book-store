import {Logo} from "./Logo"

function Header() {

  return (
    <header className="border-gray-100 border-y-2">
      <div className="logo-container flex justify-center items-center py-5">
        <Logo/>
        <h1 className="font-bold text-xl pl-2 text-gray-800">Bookstore</h1>
      </div>
      <nav className="flex justify-center items-center pb-5">
        <a href="#">
          <h2 className="text-lg font-normal text-gray-800 px-10 hover:text-slate-900 hover:font-semibold">Home</h2>
        </a>
        <a href="#">
          <h2 className="text-lg font-normal text-gray-800 px-10 hover:text-slate-900 hover:font-semibold">Shop</h2>
        </a>
        <a href="#">
          <h2 className="text-lg font-normal text-gray-800 px-10 hover:text-slate-900 hover:font-semibold">Bag</h2>
        </a>
      </nav>
    </header>
  );
}

export default Header;