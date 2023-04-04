export default function DownArrowIcon(){
    return(
        <svg
        className="w-4 text-gray-600"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <line
          fill="none"
          strokeMiterlimit="10"
          x1="12"
          y1="2"
          x2="12"
          y2="22"
        />
        <polyline
          fill="none"
          strokeMiterlimit="10"
          points="19,15 12,22 5,15"
        />
      </svg>
    );
}