import Link from "next/link";

export default function NavbarItems() {
  return (
    <ul className="hidden items-center  space-x-8 lg:flex text-primary-900">
      <li>
        <Link
          href="/"
          aria-label="Our product"
          title="Our product"
          className=" tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/tourPackages"
          aria-label="Our product"
          title="Our product"
          className=" tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
        >
          Tour Packages
        </Link>
      </li>
      <li>
        <Link
          href="/destinations"
          aria-label="Product pricing"
          title="Product pricing"
          className=" tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
        >
          Destinations
        </Link>
      </li>
      <li>
        <Link
          href="/gallery"
          aria-label="About us"
          title="About us"
          className="tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
        >
          Gallery
        </Link>
      </li>
      <li>
        <Link
          href="/"
          aria-label="About us"
          title="About us"
          className="tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
        >
          Ethiopia
        </Link>
      </li>
      <li>
        <Link
          href="/"
          aria-label="About us"
          title="About us"
          className="tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
        >
          Visotor Info
        </Link>
      </li>
      <li>
        <Link
          href="/"
          aria-label="About us"
          title="About us"
          className="tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
