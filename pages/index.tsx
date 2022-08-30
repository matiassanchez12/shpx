import type { NextPage } from "next";

import { Layout } from "../components/layout";
import { GetQuotation, Presentation, Products, Showcase } from "../screens/Home";

const HomePage: NextPage = () => (
  <Layout
    headProps={{
      title: "SHPX",
      description: "SHPX home page",
      url: "https://shpx-ten.vercel.app",
    }}
  >
    <Presentation />
    <Products />
    <Showcase />
    <GetQuotation />
  </Layout>
);

export default HomePage;
