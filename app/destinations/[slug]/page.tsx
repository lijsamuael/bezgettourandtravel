"use client";
import { usePathname } from "next/navigation";
import data from "../../../models/data.json";

export default function DestinationDetail() {
  const router = usePathname();
  const slug = router.split("/").pop();
  return (
    <>
      {data.destinations.map((destination, index) =>
        destination.id.toString() == slug ? (
          <div className=" max-w-[1200px] mx-auto my-8  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg h-[600px] w-full"
              src={`./images/${destination.image}`}
              alt=""
            />
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {destination.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
                {destination.description}
              </p>
            </div>
            <div className="grid grid-cols-1 ssm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
              {data.gallery.map((item, index) =>
                item.id.toString() == slug
                  ? item.images.map((photo, index) => (
                      <div>
                        <img
                          className="h-full w-full sm:max-w-full rounded-lg"
                          src={`./images/${item.place}/${photo}`}
                          alt=""
                        />
                      </div>
                    ))
                  : null
              )}
            </div>
          </div>
        ) : null
      )}
    </>
  );
}
