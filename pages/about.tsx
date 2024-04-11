import React, { Suspense, lazy } from "react";
import { getBlogLayout } from "../layouts/BlogLayout";
const Home = () => {
    const Component = lazy(() => import(`../content/about.mdx`));

    return (
        <Suspense fallback={<div>Loading...</div>}>{<Component />}</Suspense>
    );
};
Home.getLayout = getBlogLayout();
export default Home;
