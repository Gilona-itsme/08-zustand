"use client";
import { fetchNoteById } from "@/lib/api";
import css from "./NoteDetails.module.css";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

export default function NoteDetailsClient() {
  const params = useParams();
  const id = params.id as string;

  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  return (
    <main className={css.main}>
      <div className={css.container}>
        {isLoading && <p>Loading, please wait...</p>}
        {(isError || (!isLoading && !note)) && <p>Something went wrong.</p>}
        {note && (
          <div className={css.item}>
            <div className={css.header}>
              <h2>{note.title}</h2>
            </div>
            <p className={css.tag}>{note.tag}</p>
            <p className={css.content}>{note.content}</p>
            <p className={css.date}>{note.createdAt}</p>
          </div>
        )}
      </div>
    </main>
  );
}
