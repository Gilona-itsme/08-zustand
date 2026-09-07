export interface Note {
    id: number;
    content: string;
    tag: string;
    title: string;
    updatedAt: string;
    createdAt: string;
}

export const NOTE_TAGS = ['Todo' , 'Work', 'Personal', 'Meeting', 'Shopping'] as const;

export type NoteTag = (typeof NOTE_TAGS)[number];


// export type NoteTag ='Todo' | 'Work'| 'Personal'| 'Meeting'| 'Shopping'

