import React from "react";

/**

A component representing a search button with an icon and label
@param {Object} props - The component props
@param {string} props.label - The label to display next to the search icon
@param {string} props.to - The URL to navigate to when the button is clicked
@returns {JSX.Element} - A button element with an icon and label
*/

function SearchButton({ label, to }) {
  // redirect to the search page
  function handleClick() {
    //console.log("done");
  }

  return (
    <button className="search-button" onClick={handleClick}>
      <svg className="svg-icon" viewBox="0 0 24 24">
        <path d="M10 14c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm3.5.9c-1 .7-2.2 1.1-3.5 1.1-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 1.3-.4 2.5-1.1 3.4l5.1 5.1-1.5 1.5-5-5.1z"></path>
      </svg>
      <span className="label">{label}</span>
    </button>
  );
}

export default SearchButton;