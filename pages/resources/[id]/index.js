import Layout from "components/Layout";
import Link from "next/link";
import axios from "axios";
import moment from "moment";
import ResourceLabel from "./../../../components/ResourceLabel";

const ResourceDetail = ({ resource }) => {
  const activateResource = () => {
    axios
      .patch("/api/resources/", { ...resource, status: "active" })
      .then((_) => location.reload())
      .catch((_) => alert("Cannot activate resource."));
  };

  return (
    <Layout>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">
                      {moment(resource.createdAt).format("LLL")}
                      <ResourceLabel status={resource.status} />
                    </h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                    <p>Time to finish: {resource.timeToFinish} minutes</p>
                    {resource.status === "inactive" && (
                      <>
                        <Link href={`/resources/${resource.id}/edit`}>
                          <a className="button is-warning">Update</a>
                        </Link>
                        <button
                          className="button is-success ml-1"
                          onClick={activateResource}
                        >
                          Activate
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  // params gives you just the url param (:id)
  // query gives you both the param and the query (https://www.semrush.com/blog/url-parameters/)
  const dataRes = await fetch(`${process.env.API_URL}/resources/${params.id}`);
  const resource = await dataRes.json();

  return {
    props: { resource },
    // Tell the server to rebuild the page after X seconds
  };
}

export default ResourceDetail;

// getInitialProps is run both on the server and on the client
// ResourceDetail.getInitialProps = async ({ query }) => {
//   const dataRes = await fetch(
//     "http://localhost:3001/api/resources/" + query.id
//   );
//   const resource = await dataRes.json();

//   return {
//     resource,
//   };
// };

// export async function getStaticPaths() {
//   const dataRes = await fetch("http://localhost:3001/api/resources");
//   const data = await dataRes.json();

//   // WATCH OUT for this very specific format the data needs to be in
//   const paths = data.map((resource) => {
//     return { params: { id: resource.id } };
//   });

//   return {
//     paths,
//     // fallback: false means that other routes will resolve to a 404 page

//     // fallback: true means that a route that does not resolve to a page
//     // will ask the server to find the page.
//     fallback: true,
//   };
// }

// // This will run on build time.
// // We need to tell it ALL the :ids it will need to pre-render
// // We do that with getStaticPaths
// export async function getStaticProps({ params }) {
//   // params gives you just the url param (:id)
//   // query gives you both the param and the query (https://www.semrush.com/blog/url-parameters/)
//   const dataRes = await fetch(
//     "http://localhost:3001/api/resources/" + params.id
//   );
//   const resource = await dataRes.json();

//   return {
//     props: { resource },
//     // Tell the server to rebuild the page after X seconds
//     revalidate: 1, //second
//   };
// }
