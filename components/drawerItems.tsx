import Link from "next/link";

export default function DrawerItems() {
  return (
    <ul className="flex flex-col items-center  space-y-8 text-primary-900">
      <li>
        <Link
          href="/"
          aria-label="Our product"
          title="Our product"
          className=" tracking-wide  transition-colors duration-200 hover:text-primary-400"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/tourPackages"
          aria-label="Our product"
          title="Our product"
          className=" tracking-wide  transition-colors duration-200 hover:text-primary-400"
        >
          Tour Packages
        </Link>
      </li>
      <li>
        <Link
          href="/destinations"
          aria-label="Product pricing"
          title="Product pricing"
          className=" tracking-wide  transition-colors duration-200 hover:text-primary-400"
        >
          Destinations
        </Link>
      </li>
      <li>
        <Link
          href="/"
          aria-label="About us"
          title="About us"
          className="tracking-wide  transition-colors duration-200 hover:text-primary-400"
        >
          Gallery
        </Link>
      </li>
      <li>
        <Link
          href="/"
          aria-label="About us"
          title="About us"
          className="tracking-wide  transition-colors duration-200 hover:text-primary-400"
        >
          Ethiopia
        </Link>
      </li>
      <li>
        <Link
          href="/"
          aria-label="About us"
          title="About us"
          className="tracking-wide  transition-colors duration-200 hover:text-primary-400"
        >
          Visotor Info
        </Link>
      </li>
      <li>
        <Link
          href="/"
          aria-label="About us"
          title="About us"
          className="tracking-wide  transition-colors duration-200 hover:text-primary-400"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
