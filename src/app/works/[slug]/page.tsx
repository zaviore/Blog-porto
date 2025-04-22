/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { GetStaticPaths } from "next";
import client from "@/libs/client";  

type BlogPageProps = {
  blogPost: { title: string; content: string };
};

const BlogPage: FC<BlogPageProps> = ({ blogPost }) => {
  return (
    <div>
      <h1>{blogPost?.title}</h1>
      <div>{blogPost?.content}</div>
    </div>
  );
};


export const getStaticPaths: GetStaticPaths = async () => {
  const database = (await client).db("blog");
  const blogCollection = database.collection("blog");

  const posts = await blogCollection.find({}).toArray();
  const paths = posts.map((post:any) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};


export const Page = async ({ params }: any) => {
  const { slug } = params as { slug: string };
  const database = (await client).db("blog");
  const blogCollection = database.collection("blogs");

  const post = await blogCollection.findOne({ slug });

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      blogPost: {
        title: post.title,
        content: post.content,
      },
    },
    revalidate: 60,  // Rebuild page every 60 seconds
  };
};

export default BlogPage;
