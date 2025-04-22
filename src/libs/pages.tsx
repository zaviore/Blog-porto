// src/app/blog/index.tsx
import { FC } from "react";
import Link from "next/link";
import client from "@/libs/client";  // Import MongoDB client

type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  summary: string;
};

type BlogIndexProps = {
  blogPosts: BlogPost[];
};

const BlogIndex: FC<BlogIndexProps> = ({ blogPosts }) => (
    <div>
      <h1>All Blog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post._id}>
            <Link href={`/blog/${post.slug}`}>
              <a className="text-blue-500 hover:text-blue-700">{post.title}</a>
            </Link>
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );


export const getStaticProps = async () => {
  try {
    const database = (await client).db("blog");
    const blogCollection = database.collection("blog");

    const posts = await blogCollection.find({}).toArray();

    const blogPosts = posts.map((post) => ({
      _id: post._id.toString(),
      title: post.title,
      slug: post.slug,
      summary: post.summary,
    }));

    return {
      props: { blogPosts },
      revalidate: 60,  
    };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return {
      props: { blogPosts: [] },
    };
  }
};

export default BlogIndex;
