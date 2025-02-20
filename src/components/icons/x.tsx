import React from "react";

export const X = () => {
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black text-white transition duration-150 ease-in-out hover:bg-gray-900 shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 512 512"
        className="w-3 h-3"
      >
        {/* Font Awesome Free 6.5.1 - X (formerly Twitter) Icon */}
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
      </svg>
    </span>
  );
};
