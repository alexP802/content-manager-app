import React, { useEffect } from "react";
import Newsletter from "components/Newsletter";
import ResourceHighlight from "components/ResourceHighlight";
import Footer from "components/Footer";
import ResourceList from "components/ResourceList";
import Layout from "./../components/Layout";

function Home({ resources }) {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0, 2)} />
      <Newsletter />
      <ResourceList resources={resources.slice(2)} />
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps() {
  let resources = [];
  try {
    const res = await fetch(`${process.env.API_URL}/resources`);
    resources = await res.json();
  } catch (error) {
    console.log(error);
  }

  return { props: { resources } };
}

export default Home;
