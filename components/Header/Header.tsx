import Link from "next/link";
import User from "../User";
import classes from "./Header.module.css";

export default async function Header() {
  return (
    <div className={`${classes.header} bg-gray-900`}>
      <Link
        href={"/"}
        className="bg-gray-800 text-gray-200 px-3 py-2 rounded-lg hover:bg-gray-700 transition duration-200"
      >
        SupaAuth
      </Link>

      <User />
    </div>
  );
}
