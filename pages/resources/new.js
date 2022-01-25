import React from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import ResourceForm from "./../../components/ResourceForm";

const ResourceCreate = () => {
  const router = useRouter();

  const createResource = (form) => {
    // You can use relative paths when you make calls your NextJS server,
    // but not on your node server.
    // "/api/resources" id equal to  "http://localhost:3000/api/resources"

    axios
      .post("/api/resources", form)
      .then((_) => {
        router.push("/");
      })
      .catch((error) => alert(error?.response?.data));
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <ResourceForm onFormSubmit={createResource} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
