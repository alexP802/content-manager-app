import axios from "axios";
import Layout from "components/Layout";
import React from "react";
import ResourceForm from "./../../../components/ResourceForm";

const ResourceEdit = ({ resource }) => {
  const updateResource = (form) => {
    axios
      .patch(`/api/resources/`, form)
      .then((_) => console.log(`Updated ${resource.title}`))
      .catch((error) => {
        alert(error?.response?.data);
      });
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <ResourceForm
              title={`Update ${resource.title}`}
              resource={resource}
              onFormSubmit={updateResource}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  let resource = {};
  try {
    const response = await fetch("http://localhost:3001/api/resources/" + id);
    resource = await response.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: { resource },
  };
}

export default ResourceEdit;
