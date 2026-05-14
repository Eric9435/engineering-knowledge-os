"use client";

import { useEffect, useState } from "react";

type Note = {
  id: number;
  title: string;
  content: string;
};

export default function NotebookClient() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("engineering-notes");
    if (saved) setNotes(JSON.parse(saved));
  }, []);

  function saveNotes(next: Note[]) {
    setNotes(next);
    localStorage.setItem("engineering-notes", JSON.stringify(next));
  }

  function addNote() {
    if (!title.trim() && !content.trim()) return;
    const next = [{ id: Date.now(), title, content }, ...notes];
    saveNotes(next);
    setTitle("");
    setContent("");
  }

  function deleteNote(id: number) {
    saveNotes(notes.filter((n) => n.id !== id));
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[420px_1fr]">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black text-blue-950">Add Technical Note</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title..."
          className="mt-5 w-full rounded-2xl border border-slate-200 px-4 py-3 font-bold outline-none focus:border-blue-950"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write concept, formula, project idea, troubleshooting case..."
          className="mt-4 h-56 w-full rounded-2xl border border-slate-200 px-4 py-3 font-semibold outline-none focus:border-blue-950"
        />
        <button
          onClick={addNote}
          className="mt-4 w-full rounded-2xl bg-blue-950 px-5 py-4 text-sm font-black text-white hover:bg-blue-900"
        >
          Save Note
        </button>
      </section>

      <section className="space-y-4">
        {notes.length === 0 && (
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center font-bold text-slate-500 shadow-sm">
            No notes yet.
          </div>
        )}

        {notes.map((note) => (
          <article key={note.id} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black text-blue-950">{note.title || "Untitled Note"}</h3>
                <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-600">{note.content}</p>
              </div>
              <button
                onClick={() => deleteNote(note.id)}
                className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-black text-slate-500 hover:bg-slate-50"
              >
                Delete
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
