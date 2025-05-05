import type { Route } from "./+types/landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "All Smiles | Landing" },
  ];
}

const Landing = () => {
  return (
    <div>Landing page</div>
  )
}

export default Landing