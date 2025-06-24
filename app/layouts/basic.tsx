import { Outlet } from "react-router"
import { Header, Footer } from "@components/."

const BasicLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default BasicLayout