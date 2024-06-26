"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "../styles/navigation.module.css";

export default function Nav() {
  const path = usePathname();

  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="about-us">About-us</Link>
        </li>
      </ul>
    </nav>
  );
}
