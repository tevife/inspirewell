"use client";
export default function PinCard({ post }) {
  return (
    <div className="break-inside mb-4 rounded shadow hover:opacity-90">
      <img src={post.imageUrl} alt={post.title} className="w-full" />
      <div className="p-2">
        <h2 className="font-semibold">{post.title}</h2>
      </div>
    </div>
  );
}