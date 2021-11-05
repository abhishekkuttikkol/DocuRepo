import React from "react";
import Header from "../Components/Header";
import Doc from "../Components/Home";

const Home = () => {
  return (
    <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
      <Header />
      <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
        <div class="flex flex-col flex-wrap sm:flex-row ">
          <Doc />
        </div>
      </div>
    </div>
  );
};

export default Home;
