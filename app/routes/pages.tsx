import type { Route } from "./+types/pages";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "All Smiles | Pages" },
  ];
}

const Pages = () => {
  return (
    <div>Pages page</div>
  )
}

export default Pages