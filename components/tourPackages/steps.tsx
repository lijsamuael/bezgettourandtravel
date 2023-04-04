import DownArrowIcon from "../icons/downArrow";
import data from "../../models/data.json";

export const Step = () => {
  return data.semienSteps.map((tour, index) => (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1>{tour.place}</h1>
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
        {tour.tours.map((item, index) => (
                  <div className="lg:py-6 lg:pr-16">
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div>
                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                          <DownArrowIcon />
                        </div>
                      </div>
                      <div className="w-px h-full bg-gray-300" />
                    </div>
                    <div className="pt-1 pb-8">
                      <p className="mb-2 text-lg font-bold">Step 1</p>
                      <p className="text-gray-700">
                        All recipes are written using certain conventions, which define
                        the characteristics of common ingredients. The rules vary from
                        place to place.
                      </p>
                    </div>
                  </div>
                </div>
        ))}
        <div className="relative">
          <img
            className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
            src={`./images/semien/${tour.images}`}
            alt=""
          />
        </div>
      </div>
    </div>
  ));
};
