import { useRouter } from "next/router";

export default function DestinationDetail() {
  const router = useRouter();
  const { title, description, image } = router.query;
  return (
    <div className="max-w-screen-xl mx-auto">
      <main className="mt-10">
        <div
          className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style={{ ["height" as any]: "24em;" }}
        >
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{
              ["background-image" as any]:
                "linear-gradient(180deg,transparent,rgba(0,0,0,.7));",
            }}
          ></div>
          <img
            src={`./images/${image}`}
            className="absolute left-0 top-0 w-full h-full z-0 object-cover"
          />
        </div>

        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <h1 className="text-3xl">{title}</h1>
          <p>{description}</p>
        </div>
      </main>
    </div>
  );
}
