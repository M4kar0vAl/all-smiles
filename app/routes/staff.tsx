import type { Route } from "./+types/staff";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "All Smiles | Staff" },
  ];
}

const Staff = () => {
  return (
    <div>Staff page</div>
  )
}

export default Staff