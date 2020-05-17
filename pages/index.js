import Layout from "../src/components/Layout";
import Home from "../src/views/Home";
export default function (props) {
  return (
    <Layout title="My Home">
      <Home {...props} />
    </Layout>
  );
}
