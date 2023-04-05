import LargeCard from "@/components/largeCard";
import data from "../../models/data.json";

export default function Destination() {
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto ">
    //   {data.destinations.map((item, index) =>
    //     index % 2 == 0 ? (
    //       <div className=" max-w-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //         <img
    //           className="rounded-t-lg h-64 w-full"
    //           src={`./images/${item.image}`}
    //           alt=""
    //         />
    //         <div className="p-5">
    //           <a href="#">
    //             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
    //               {item.title}
    //             </h5>
    //           </a>
    //           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400  line-clamp-3">
    //             {item.description}
    //           </p>
    //           <a
    //             href="#"
    //             className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary-300 rounded-lg hover:bg-secondary-200 focus:ring-4 focus:outline-none focus:ring-secondary-100 "
    //           >
    //             Read more
    //             <svg
    //               aria-hidden="true"
    //               className="w-4 h-4 ml-2 -mr-1"
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
    //                 clip-rule="evenodd"
    //               ></path>
    //             </svg>
    //           </a>
    //         </div>
    //       </div>
    //     ) : (
    //       <div className=" max-w-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //         <img
    //           className="rounded-t-lg h-64 w-full"
    //           src={`./images/${item.image}`}
    //           alt=""
    //         />
    //         <div className="p-5">
    //           <a href="#">
    //             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
    //               {item.title}
    //             </h5>
    //           </a>
    //           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400  line-clamp-3">
    //             {item.description}
    //           </p>
    //           <a
    //             href="#"
    //             className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary-300 rounded-lg hover:bg-secondary-200 focus:ring-4 focus:outline-none focus:ring-secondary-100 "
    //           >
    //             Read more
    //             <svg
    //               aria-hidden="true"
    //               className="w-4 h-4 ml-2 -mr-1"
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
    //                 clip-rule="evenodd"
    //               ></path>
    //             </svg>
    //           </a>
    //         </div>
    //       </div>
    //     )
    //   )}
    // </div>
    <LargeCard />
  );
}
