import React from "react";
import { App } from "../Firebase";

const Home = ({ name, url, id }) => {
  const handleDelete = () => {
    let imageRef = App.storage().refFromURL(url);
    imageRef
      .delete()
      .then(() => {
        App.firestore()
          .collection("documents")
          .doc(id)
          .delete()
          .then(() => {
            alert("Deleted");
          });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div class=" lg:w-full mb-4 p-2 cursor-pointer">
        <div class="shadow-xl rounded-2xl p-5 bg-white dark:bg-gray-700 w-full">
          <div className="group relative">
            <div className="relative  w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src="https://thumbs.dreamstime.com/b/documents-icon-trendy-documents-logo-concept-white-backgroun-documents-icon-trendy-documents-logo-concept-white-background-131173398.jpg"
                alt="Document"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg text-gray-700">
                  <a onClick={() => window.open(url)}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {name}
                  </a>
                </h3>
              </div>
            </div>
            <button
              onClick={() => handleDelete()}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
