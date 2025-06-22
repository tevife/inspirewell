"use client";
import { useState } from 'react';
import { db, storage } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function AdminPanel() {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (file) {
      const storageRef = ref(storage, `images/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      await addDoc(collection(db, 'posts'), { title, imageUrl: url });
      setTitle('');
      setFile(null);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Título" className="border p-2 w-full"/>
      <input type="file" onChange={e => setFile(e.target.files[0])} className="border p-2 w-full"/>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Adicionar Post</button>
    </form>
}