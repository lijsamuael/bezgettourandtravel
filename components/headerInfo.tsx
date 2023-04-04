export default function HeaderInfo() {
  return (
    <div className="relative px-4 py-16 sm:px-0 space-y-8">
      <div>
        {" "}
        <h2 className="w-64 mx-auto text-3xl text-primary-600 font-bold text-center">
          Our Services?
        </h2>
        <p className="max-w-36 mx-auto  text-primary-600  text-center">
          Bezget Tour and Travel Managed responsibly with fair prices and
          respect for culture. We are specialized in these popular services:
        </p>
      </div>
      <div className="text-primary-600 relative grid lg:grid-cols-4 sm:gap-4 md:gap-8 mx-auto overflow-hidden sm:max-w-screen-sm  lg:max-w-screen-lg">
        <div className="inline-block p-8 text-center rounded-lg shadow-lg w-48  mx-auto border ">
          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
            <img
              src="./icons/vacation.png"
              alt=""
              className="w-10 h-10 text-deep-purple-accent-400"
            />
          </div>
          <p className="font-bold tracking-wide ">Holiday/Vacation tours</p>
        </div>
        <div className="inline-block p-8 text-center rounded-lg shadow-lg w-48  mx-auto border  ">
          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
            <img
              src="./icons/ticket.png"
              alt=""
              className="w-10 h-10 text-deep-purple-accent-400"
            />
          </div>
          <p className="font-bold tracking-wide ">Flight ticket booking</p>
        </div>
        <div className="inline-block p-8 text-center rounded-lg shadow-lg w-48  mx-auto border ">
          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
            <img
              src="./icons/car-rent.png"
              alt=""
              className="w-10 h-10 text-deep-purple-accent-400"
            />
          </div>
          <p className="font-bold tracking-wide ">
            Car/Vehicle (rental) services
          </p>
        </div>
        <div className="inline-block p-8 text-center rounded-lg shadow-lg w-48  mx-auto border ">
          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
            <img
              src="./icons/business-2.png"
              alt=""
              className="w-10 h-10 text-deep-purple-accent-400"
            />
          </div>
          <p className="font-bold tracking-wide">Business tours and travel</p>
        </div>
      </div>
    </div>
  );
}
