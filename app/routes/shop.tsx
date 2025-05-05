import type { Route } from "./+types/shop";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "All Smiles | Shop" },
  ];
}

const Shop = () => {
  return (
    <div>Shop page</div>
  )
}

export default Shop