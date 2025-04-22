import Link from "next/link";
import client from "@/libs/client"; // MongoDB client

export const revalidate = 60; // Atur ISR ke 60 detik

async function fetchWorks() {
  const database = (await client).db("blog");
  const worksCollection = database.collection("blog");

  const posts = await worksCollection.find({}).toArray();

  return posts.map((post) => ({
    _id: post._id.toString(),
    title: post.title,
    slug: post.slug,
    description: post.description,
  }));
}

export default async function BlogPage() {
  const workPosts = await fetchWorks();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Works</h1>
      <ul className="space-y-4">
        {workPosts.map((post) => (
          <li key={post._id} className="border-b pb-4">
            <Link href={`/works/${post.slug}`}>
              <p className="text-blue-500 hover:text-blue-700 text-xl">
                {post.title}
              </p>
            </Link>
            <p className="text-gray-600">{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
