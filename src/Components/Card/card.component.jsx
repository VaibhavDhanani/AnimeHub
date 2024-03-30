import React from "react";
export const Card = (props) => (
  <div>
    <div className="relative flex w-96 flex-col rounded-x bg-clip-border text-gray-100 shadow-md bg-cyan-600">
      <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img
          src={props.character.character.images.jpg.image_url}
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-black text-red-900 leading-snug tracking-normal text-blue-gray-900 antialiased">
          {props.character.character.name}
        </h5>
        <p className="block font-sans text-base font-semibold text-black leading-relaxed text-inherit antialiased">
          Role : {props.character.role}
        </p>
        <p className="block font-sans text-base font-bold text-white leading-relaxed text-inherit antialiased">
          Popularity : {props.character.favorites}
        </p>
      </div>
      <div className="p-6 pt-0">
        <a
          className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          href={props.character.character.url}
          data-ripple-light="true"
          target="blank"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
);
