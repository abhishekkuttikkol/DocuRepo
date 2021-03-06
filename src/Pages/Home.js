import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Header";
import Doc from "../Components/Home";
import { App } from "../Firebase";
import { AuthContext } from "../Store/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    App.firestore()
      .collection("documents")
      .where("id", "==", user.uid)
      .onSnapshot((response) => {
        const allPosts = response.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setDocuments(allPosts);
      });
  }, []);

  const [documents, setDocuments] = useState([]);

  return (
    <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
      <Header />
      <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
        <div class="flex mt-8 flex-col flex-wrap sm:flex-row ">
          {documents.map((doc) => {
            console.log(doc);
            return <Doc id={doc.id} name={doc.name} url={doc.url} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
