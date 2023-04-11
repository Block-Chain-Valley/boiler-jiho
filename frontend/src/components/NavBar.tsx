import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { makeShortAddress } from "../utils/transform";
import { useConnectWallet } from "../states/wallet";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const { account, chainId, connect, disconnect } = useConnectWallet();

  return (
    <header className="flex  items-center">
      <div className="block md:hidden fixed top-5 right-5 ">
        <button
          className="flex mr-2 items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
          </svg>
        </button>
      </div>
      <div className={`flex md:flex  ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col md:flex-row max-md:fixed max-md:w-24 max-md:bg-gray-800 max-md:top-16 max-md:right-0  max-md:items-center max-md:justify-center ">
          <Link
            to="/"
            className={`flex  md:inline-block md:mt-0 text-gray-200 hover:text-white mr-2 max-md:m-2
            ${location.pathname === "/" ? "bg-slate-400 rounded" : ""}
            `}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`flex  md:inline-block md:mt-0 text-gray-200 hover:text-white mr-2 max-md:m-2
            ${location.pathname === "/about" ? "bg-slate-400 rounded" : ""}
            `}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`flex  md:inline-block md:mt-0 text-gray-200 hover:text-white mr-2 max-md:m-2
            ${location.pathname === "/contact" ? "bg-slate-400 rounded" : ""}
            `}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/trade"
            className={`flex  md:inline-block md:mt-0 text-gray-200 hover:text-white mr-2 max-md:m-2
            ${location.pathname === "/trade" ? "bg-slate-400 rounded" : ""}
            `}
            onClick={() => setMobileMenuOpen(false)}
          >
            Trade
          </Link>
          <Link
            to="/pools"
            className={`flex  md:inline-block md:mt-0 text-gray-200 hover:text-white mr-2 max-md:m-2
            ${location.pathname === "/pools" ? "bg-slate-400 rounded" : ""}
            `}
            onClick={() => setMobileMenuOpen(false)}
          >
            Pools
          </Link>
          {account ? (
            <div className="flex items-center">
              <div className="mr-2 max-md:hidden">
                Connected to {makeShortAddress(account)}
              </div>
              <button className="mr-2 max-md:m-2" onClick={disconnect}>
                Disconnect
              </button>
            </div>
          ) : (
            <div>
              <button className="mr-2 max-md:m-2" onClick={connect}>
                Connect
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
