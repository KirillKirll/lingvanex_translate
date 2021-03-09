import React from "react";
import "../styles/styles.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="mainTitle">
        <Name />
      </div>
    </div>
  );
};

const Name = () => {
  return (
    <svg
      width="280"
      height="45"
      viewBox="0 0 390 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <path
          d="M100.844 52.6875H121.5V59H92.9375V13.5H100.844V52.6875ZM134.906 59H127.312V25.1875H134.906V59ZM126.844 16.4062C126.844 15.2396 127.208 14.2708 127.938 13.5C128.688 12.7292 129.75 12.3438 131.125 12.3438C132.5 12.3438 133.562 12.7292 134.312 13.5C135.062 14.2708 135.438 15.2396 135.438 16.4062C135.438 17.5521 135.062 18.5104 134.312 19.2812C133.562 20.0312 132.5 20.4062 131.125 20.4062C129.75 20.4062 128.688 20.0312 127.938 19.2812C127.208 18.5104 126.844 17.5521 126.844 16.4062ZM150.25 25.1875L150.469 29.0938C152.969 26.0729 156.25 24.5625 160.312 24.5625C167.354 24.5625 170.938 28.5938 171.062 36.6562V59H163.469V37.0938C163.469 34.9479 163 33.3646 162.062 32.3438C161.146 31.3021 159.635 30.7812 157.531 30.7812C154.469 30.7812 152.188 32.1667 150.688 34.9375V59H143.094V25.1875H150.25ZM177.5 41.8438C177.5 36.5938 178.729 32.4062 181.188 29.2812C183.667 26.1354 186.948 24.5625 191.031 24.5625C194.885 24.5625 197.917 25.9062 200.125 28.5938L200.469 25.1875H207.312V57.9688C207.312 62.4062 205.927 65.9062 203.156 68.4688C200.406 71.0312 196.688 72.3125 192 72.3125C189.521 72.3125 187.094 71.7917 184.719 70.75C182.365 69.7292 180.573 68.3854 179.344 66.7188L182.938 62.1562C185.271 64.9271 188.146 66.3125 191.562 66.3125C194.083 66.3125 196.073 65.625 197.531 64.25C198.99 62.8958 199.719 60.8958 199.719 58.25V55.9688C197.531 58.4062 194.615 59.625 190.969 59.625C187.01 59.625 183.771 58.0521 181.25 54.9062C178.75 51.7604 177.5 47.4062 177.5 41.8438ZM185.062 42.5C185.062 45.8958 185.75 48.5729 187.125 50.5312C188.521 52.4688 190.448 53.4375 192.906 53.4375C195.969 53.4375 198.24 52.125 199.719 49.5V34.625C198.281 32.0625 196.031 30.7812 192.969 30.7812C190.469 30.7812 188.521 31.7708 187.125 33.75C185.75 35.7292 185.062 38.6458 185.062 42.5ZM227.062 49.375L234.219 25.1875H242.062L230.344 59H223.75L211.938 25.1875H219.812L227.062 49.375ZM266.531 59C266.198 58.3542 265.906 57.3021 265.656 55.8438C263.24 58.3646 260.281 59.625 256.781 59.625C253.385 59.625 250.615 58.6562 248.469 56.7188C246.323 54.7812 245.25 52.3854 245.25 49.5312C245.25 45.9271 246.583 43.1667 249.25 41.25C251.938 39.3125 255.771 38.3438 260.75 38.3438H265.406V36.125C265.406 34.375 264.917 32.9792 263.938 31.9375C262.958 30.875 261.469 30.3438 259.469 30.3438C257.74 30.3438 256.323 30.7812 255.219 31.6562C254.115 32.5104 253.562 33.6042 253.562 34.9375H245.969C245.969 33.0833 246.583 31.3542 247.812 29.75C249.042 28.125 250.708 26.8542 252.812 25.9375C254.938 25.0208 257.302 24.5625 259.906 24.5625C263.865 24.5625 267.021 25.5625 269.375 27.5625C271.729 29.5417 272.938 32.3333 273 35.9375V51.1875C273 54.2292 273.427 56.6562 274.281 58.4688V59H266.531ZM258.188 53.5312C259.688 53.5312 261.094 53.1667 262.406 52.4375C263.74 51.7083 264.74 50.7292 265.406 49.5V43.125H261.312C258.5 43.125 256.385 43.6146 254.969 44.5938C253.552 45.5729 252.844 46.9583 252.844 48.75C252.844 50.2083 253.323 51.375 254.281 52.25C255.26 53.1042 256.562 53.5312 258.188 53.5312ZM316.688 59H312.844L286.688 20.0625V59H282.812V13.5H286.688L312.875 52.4688V13.5H316.688V59ZM340.469 59.625C337.594 59.625 334.99 58.9167 332.656 57.5C330.344 56.0833 328.542 54.1146 327.25 51.5938C325.958 49.0521 325.312 46.2083 325.312 43.0625V41.7188C325.312 38.4688 325.938 35.5417 327.188 32.9375C328.458 30.3333 330.219 28.2917 332.469 26.8125C334.719 25.3125 337.156 24.5625 339.781 24.5625C343.885 24.5625 347.135 25.9688 349.531 28.7812C351.948 31.5729 353.156 35.3958 353.156 40.25V42.3438H329.031V43.0625C329.031 46.8958 330.125 50.0938 332.312 52.6562C334.521 55.1979 337.292 56.4688 340.625 56.4688C342.625 56.4688 344.385 56.1042 345.906 55.375C347.448 54.6458 348.844 53.4792 350.094 51.875L352.438 53.6562C349.688 57.6354 345.698 59.625 340.469 59.625ZM339.781 27.75C336.969 27.75 334.594 28.7812 332.656 30.8438C330.74 32.9062 329.573 35.6771 329.156 39.1562H349.438V38.75C349.333 35.5 348.406 32.8542 346.656 30.8125C344.906 28.7708 342.615 27.75 339.781 27.75ZM371.062 38.9062L380.188 25.1875H384.625L373.156 41.7812L385.125 59H380.719L371.094 44.6875L361.469 59H357.062L369 41.7812L357.531 25.1875H361.938L371.062 38.9062Z"
          fill="black"
        />
      </g>
      <circle cx="33" cy="33" r="33" fill="url(#paint0_linear)" />
      <rect x="33" y="33" width="33" height="33" fill="url(#paint1_linear)" />
      <defs>
        <filter
          id="filter0_d"
          x="88.9375"
          y="12.3438"
          width="300.188"
          height="67.9688"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="70.5"
          y1="3.77055e-06"
          x2="7.99999"
          y2="61.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#36CCFC" />
          <stop offset="0.662609" stopColor="#2196F3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="66"
          y1="33"
          x2="33"
          y2="66"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#21B4F3" />
          <stop offset="0.78125" stopColor="#2196F3" />
        </linearGradient>
      </defs>
    </svg>
  );
};
