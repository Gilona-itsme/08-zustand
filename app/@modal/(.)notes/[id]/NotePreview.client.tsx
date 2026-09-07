"use client";
import { fetchNoteById } from "@/lib/api";
import css from "./NotePreview.module.css";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Modal from"@/components/Modal/Modal"

export default function NotePreview() {
    const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const handleClose = () => router.back();

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
   
      <Modal onClose={handleClose}>
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
            <button type='button' className={css.backBtn} onClick={handleClose}>
						Cancel
					</button>
          </div>
        )}
      </Modal>
   
  );
}
