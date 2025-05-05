import type { Route } from "./+types/blog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "All Smiles | Blog" },
  ];
}

const Blog = () => {
  return (
    <div>Blog page</div>
  )
}

export default Blog