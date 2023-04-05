import Link from "next/link";
import data from "../models/data.json";

export default function LargeCard() {
  return (
    <div className="container mx-auto max-w-[1200px] p-10 md:py-20  md:p-20 md:px-0 antialiased text-gray-100 px-[5%]">
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-x-10 gap-y-20 ">
        {data.destinations.map((item, index) => (
          <Link href={`/destinations/${item.id}`} key={index}>
            <div
              className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
              style={{
                ["background-image" as any]: `url(./images/${item.image})`,
              }}
            >
              <div className="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pb-8 pt-64 hover:bg-opacity-75 transform duration-300">
                <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                  {item.title}
                </h1>
                <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 line-clamp-6">
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
