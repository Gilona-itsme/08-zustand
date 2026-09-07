import CreateNoteClient from "./CreateNote.client";
import css from "./CreateNote.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create note | NoteHub",
  description: "Create a new note in NoteHub",
  openGraph: {
    title: "Create note | NoteHub",
    description: "Create a new note in NoteHub",
    url: "https://notehub.com/notes/action/create",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub",
      },
    ],
  },
};

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <CreateNoteClient />
      </div>
    </main>
  );
}