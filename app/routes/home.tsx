import type { Route } from "./+types/home";

import { Banner, Chat, ServicesInfo, VideoInfo, Reviews } from '../components';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "All Smiles | Home" },
    ];
}

export default function Home() {
    return (
        <>
            <h1 className="visually-hidden">All smiles dental clinic</h1>
            <Banner />
            <ServicesInfo />
            <VideoInfo />
            <Reviews />
            <Chat />
        </>
    );
}
