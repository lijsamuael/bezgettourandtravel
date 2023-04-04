import data from "../models/data.json";

export default function Gallery() {
  return (
    <section className="overflow-hidden text-primary-500">
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-16">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            {data.leftGallery.map(
              (photo, index) =>
                index! > 2 && (
                  <div className={photo.class}>
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={`./images/${photo.image}`}
                    />
                  </div>
                )
            )}
          </div>
          <div className="flex w-1/2 flex-wrap">
            {data.rightGallery.map(
              (photo, index) =>
                index! > 2 && (
                  <div className={photo.class}>
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={`./images/${photo.image}`}
                    />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
