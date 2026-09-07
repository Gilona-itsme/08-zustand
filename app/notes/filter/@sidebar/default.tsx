"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import css from "./SidebarNotes.module.css";
import { NOTE_TAGS } from "@/types/note";

export default function SidebarNotes() {
  const pathname = usePathname();

  return (
    <ul className={css.menuList}>
      <li  className={css.menuItem}>
            <Link
              href="/notes/filter/all"
              className={clsx(css.menuLink, {
                [css.active]: pathname === "/notes/filter/all",
              })}
            >
              All notes
            </Link>
          </li>
      {NOTE_TAGS.map((tag) => {
        const href = `/notes/filter/${tag}`;
        const isActive = pathname === href;

        return (
          <li key={tag} className={css.menuItem}>
            <Link
              href={href}
              className={clsx(css.menuLink, {
                [css.active]: isActive,
              })}
            >
              {tag}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

