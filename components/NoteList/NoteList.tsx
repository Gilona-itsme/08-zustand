import css from "./NoteList.module.css";
import { Note } from "@/types/note";
import NoteItem from "../NoteItem/NoteItem";

interface NoteListProps {
	notes: Note[];
}

const NoteList = ({ notes }: NoteListProps) => {
	return (
		<ul className={css.list}>
			{notes.map((note) => (
				<NoteItem key={note.id} note={note} />
			))}
		</ul>
	);
};

export default NoteList;
