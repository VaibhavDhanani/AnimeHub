import React from "react"
export const SearchBox = ({placeholder,handleChange}) => (
    <input
    className="w-full px-5 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 word-spacing-2"
    type="search"
    placeholder={placeholder}
    onChange= {handleChange}
    />
)