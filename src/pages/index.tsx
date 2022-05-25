import AppLayout from "../layouts/AppLayout";
import { NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout = () => {
  return <h1>Hello World</h1>;
};

HomePage.getLayout = (page: React.ReactElement) => <AppLayout page={page} />;

export default HomePage;
