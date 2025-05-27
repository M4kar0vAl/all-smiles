import type { Route } from "./+types/home";

import {
    Banner,
    Chat,
    ServicesInfo,
    VideoInfo,
    Reviews,
    DiscountBanner,
    Services,
    Team,
    Appointment,
    News,
    Partners,
} from '../components';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "All Smiles | Home" },
    ];
}

export async function action({
    request
}: Route.ActionArgs) {
    const formData = await request.formData()

    // make a post request to the backend
}

export default function Home() {
    return (
        <>
            <h1 className="visually-hidden">All smiles dental clinic</h1>
            <Banner />
            <ServicesInfo />
            <VideoInfo />
            <Reviews />
            <DiscountBanner />
            <Services />
            <Team />
            <Appointment />
            <News />
            <Partners />
            <Chat />
        </>
    );
}
