import React from "react";

const Foreruner = ({ foreruner }) => {
  const { name, img, des } = foreruner;
  return (
    <>
      <div class="flex flex-col items-center justify-center bg-white my-3 p-4 shadow rounded-lg">
        <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
          <img src={img} alt="" class="h-full w-full" />
        </div>

        <h2 class="text-center mt-4 font-medium text-xl">{name}</h2>
        <h6 class="mt-2 text-sm font-medium">{des}</h6>

        <ul class="flex flex-row mt-4 space-x-2">
          <li>
            <a
              href="/"
              class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
            >
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="/"
              class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="/"
              class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Foreruner;
