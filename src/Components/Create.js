import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { App } from "../Firebase";
import { AuthContext } from "../Store/AuthContext";
import Spinner from "./Spinner";

const Create = () => {
  const [document, setDocument] = useState("");
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const upload = () => {
    App.storage()
      .ref(`/${user.uid}/${document.name}`)
      .put(document)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          App.firestore().collection("documents").add({
            name: document.name,
            url: url,
            id: user.uid,
          });
          history.push("/");
        });
      });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (document) {
      App.firestore()
        .collection("documents")
        .where("id", "==", user.uid)
        .where("name", "==", document.name)
        .get()
        .then((snap) => {
          const allPosts = snap;

          if (allPosts.length === 0) {
            upload();
          } else {
            console.log(allPosts.docs[0].id);
            App.firestore()
              .collection("documents")
              .doc(allPosts.docs[0].id)
              .delete()
              .then(() => {
                upload();
              });
          }
        });
    } else {
      setLoading(false);
      alert("Select any Document");
    }
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div class="py-20 h-screen bg-gray-300 px-2">
          <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
            <div class="md:flex">
              <div class="w-full">
                <div class="p-4 border-b-2">
                  {" "}
                  <span class="text-lg font-bold text-gray-600">
                    Add documents
                  </span>{" "}
                </div>
                <div class="p-3">
                  <div class="mb-2">
                    {" "}
                    <span>Attachments</span>
                    <div class="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                      <div class="absolute">
                        <div class="flex flex-col items-center ">
                          {" "}
                          <i class="fa fa-cloud-upload fa-3x text-gray-200"></i>{" "}
                          <span class="block text-gray-400 font-normal">
                            Attach you files here
                          </span>{" "}
                          <span class="block text-gray-400 font-normal">
                            or
                          </span>{" "}
                          <span class="block text-blue-400 font-normal">
                            Browse files
                          </span>{" "}
                        </div>
                      </div>{" "}
                      <input
                        onChange={(e) => {
                          setDocument(e.target.files[0]);
                        }}
                        type="file"
                        class="h-full w-full opacity-0"
                        name=""
                      />
                    </div>
                  </div>
                  <div class="mt-3 text-center pb-3">
                    {" "}
                    <button
                      onClick={handleSubmit}
                      class="w-full h-12 text-lg  bg-blue-600 rounded text-white hover:bg-blue-700"
                    >
                      Upload
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Create;
