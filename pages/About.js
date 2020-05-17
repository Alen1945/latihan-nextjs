import Layout from "../src/components/Layout";
import About from "../src/views/About";
export default function (props) {
  return (
    <Layout title="My Home">
      <About {...props} />
    </Layout>
  );
}
