import Gallery from "./gallary";
import BookTIcketIcon from "./icons/bookTicket";
import CarRentalIcon from "./icons/carRental";
import ConnectedWorldICon from "./icons/connectedWorld";
import WaveBottomIcon from "./icons/waveBottom";
import WaveIcon from "./icons/waveBottom";
import WaveTopIcon from "./icons/waveTop";
import Populars from "./populars";

export default function Landing() {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-100 to-primary-500 px-4 py-16  w-full h-4/5 md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400"></div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
                BUZGET
                <br className="hidden md:block" />
                TOUR &{" "}
                <span className="inline-block text-deep-purple-accent-400">
                  TRAVEL
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Bezget Tours is an Ethiopian Tour Operator offering a variety of
                tours that highlight the country's indigenous cultures,
                fascinating history, and natural wonders.
              </p>
            </div>
            <div className="flex gap-x-8">
              <div className="text-center w-36 bg-secondary-300 rounded-lg">
                <a
                  href="/"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Learn more
                </a>
              </div>
              <div className="text-center w-42 bg-gray-100 rounded-lg">
                <a
                  href="/"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Popular Places
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="./images/lalibela.jpg"
                alt=""
              />
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="./images/dankil.jpg"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="./images/bluenile.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative ">
        <WaveTopIcon />
      </div>

      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Flight Ticket Booking
              </h3>
              <p className="text-gray-600 mb-8">
                We as a company will allow you to book your flight ticket with
                no hassel and save your precious time. Come to us and you will
                not regrete.
                <br />
                <br />
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <BookTIcketIcon />
            </div>
          </div>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <ConnectedWorldICon />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Business Tour & Travel
                </h3>
                <p className="text-gray-600 mb-8">
                  We provide different tour and travel services accross all over
                  the country Ethiopia. Come to us you will love our suggestion
                  and services.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Car & Vehicle rental services
              </h3>
              <p className="text-gray-600 mb-8">
                Different car rental services that are suitable for your tour
                and travel. We also provede luxuries cars that with a moderate
                payment.
                <br />
                <br />
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img src="./icons/carrental.png" alt="" />
            </div>
          </div>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <img src="./icons/cities.png" alt="" />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Addis Ababa City Tour with luxuries cars
                </h3>
                <p className="text-gray-600 mb-8">
                  We have a well sturcuted team that allows you to know the
                  capital city of africe Addis Ababa. And we have a full package
                  of car services.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white  py-8 text-primary-900">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
            Popular Tour Destinations
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <Populars />
        </div>
      </section>
      <div>
        <h2 className="text-center text-3xl pt-8 font-bold">Gallery</h2>
        <Gallery />
      </div>
      <WaveBottomIcon />
      <section className=" container w-full mx-auto text-center py-6 mb-12 bg-primary-500">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Call to Action
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <h3 className="my-4 text-3xl leading-tight">
          Main Hero Message to sell yourself!
        </h3>
        <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          Action!
        </button>
      </section>
    </>
  );
}
