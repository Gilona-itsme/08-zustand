"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote } from "@/lib/api";
import { useNoteDraftStore } from "@/lib/store/noteStore";
import { NOTE_TAGS } from "@/types/note";
import css from "./NoteForm.module.css";

export default function NoteForm() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { draft, setDraft, clearDraft } = useNoteDraftStore();
  const [isHydrated, setIsHydrated] = useState(false);

   useEffect(() => {
    const unsubscribe = useNoteDraftStore.persist.onFinishHydration(() => {
      setIsHydrated(true);
    });
    return unsubscribe;
  }, []);

  const createNoteMutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      clearDraft();     
      router.back();    
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createNoteMutation.mutate(draft);
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setDraft({
      ...draft,
      [name]: value,
    });
  };


  const handleCancel = () => {
    router.back();
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.formGroup}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          className={css.input}
          value={draft.title}
          onChange={handleChange}
        />
      </div>
      <div className={css.formGroup}>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows={8}
          className={css.textarea}
          value={draft.content}
          onChange={handleChange}
        />
      </div>
      <div className={css.formGroup}>
        <label htmlFor="tag">Tag</label>
        <select
          id="tag"
          name="tag"
          className={css.select}
          value={draft.tag}
          onChange={handleChange}
        >
          {NOTE_TAGS.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
      <div className={css.actions}>
        <button type="button" className={css.cancelButton} onClick={handleCancel}>
          Cancel
        </button>
        <button
          type="submit"
          className={css.submitButton}
          disabled={createNoteMutation.isPending}
        >
          Create note
        </button>
      </div>
    </form>
  );
}