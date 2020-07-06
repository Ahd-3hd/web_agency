/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

function SvgComponent(props) {
  return (
    <svg
      width={70}
      height={70}
      viewBox="0 0 70 70"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.833 35C5.833 18.9 18.9 5.834 35 5.834S64.167 18.9 64.167 35 51.1 64.167 35 64.167 5.834 51.1 5.834 35zm40.834 0l-17.5-13.125v26.25L46.667 35z"
        fill="#F2F2F2"
      />
    </svg>
  )
}

export default SvgComponent
