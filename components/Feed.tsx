"use client";
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import PinCard from './PinCard';

export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function load() {
      const snapshot = await getDocs(collection(db, 'posts'));
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }
    load();
  }, []);
  return (
    <div className="columns-1 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {posts.map(post => (
        <PinCard key={post.id} post={post} />
      ))}
    </div>
  );
}