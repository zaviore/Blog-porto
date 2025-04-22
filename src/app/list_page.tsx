import PageHome from "./components/home/pageHome";
import BlogPage from "./components/blog/pageBlog";

export const pages = [
    { id: 0, title: "Homepage", bg: "bg-blue-500", content: <PageHome /> },
    { id: 1, title: "Work", content: <BlogPage/>, bg: "bg-green-500" },
    { id: 2, title: "About Me", content: "Learn More About Me", bg: "bg-purple-500" },
  ];
