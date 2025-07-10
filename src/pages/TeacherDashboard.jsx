import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export default function TeacherDashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const snapshot = await getDocs(collection(db, "events"));
      setEvents(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchEvents();
  }, []);

  const handleCreate = async () => {
    await addDoc(collection(db, "events"), { title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Create Event</h1>
      <input
        className="border p-2 mb-2 block"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 mb-2 block"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={handleCreate}
      >
        Create
      </button>

      <h2 className="text-lg mt-6">All Events</h2>
      {events.map((event) => (
        <div key={event.id} className="border p-3 mb-2 rounded">
          <h2 className="text-lg font-bold">{event.title}</h2>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}
