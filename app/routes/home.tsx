import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "All Smiles | Home" },
    ];
}

export default function Home() {
    return (
        <>
            <section>Section 1</section>
            <section>Section 2</section>
        </>
    );
}
