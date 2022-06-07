import React, { useRef, useState } from "react";

const AppInti = () => {
  const valRef = useRef(null);
  const [showNumber, setShowNumber] = useState(0);
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-3xl px-6 py-16 mx-auto text-center">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Selamat datang di Aplikasi Deret Taylor
        </h1>
        <p className="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400 text-xl font-bold">
          {showNumber}
        </p>
        <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
          <input
            ref={valRef}
            id="email"
            type="text"
            className="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            placeholder="Masukkan Angka Anda disini"
          />
          <button
            onClick={() => {
              import("../fnCustom/deretTaylorFN").then((mod) => {
                mod.deretTaylorFN({
                  setShowNumber: setShowNumber,
                  valRef: valRef,
                });
              });
            }}
            className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Process
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppInti;
