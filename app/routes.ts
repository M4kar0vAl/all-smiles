import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./layouts/basic.tsx", [
        index("routes/home.tsx"),
        route("pages", "routes/pages.tsx"),
        route("staff", "routes/staff.tsx"),
        route("blog", "routes/blog.tsx"),
        route("shop", "routes/shop.tsx"),
        route("landing", "routes/landing.tsx"),
    ])
] satisfies RouteConfig;
