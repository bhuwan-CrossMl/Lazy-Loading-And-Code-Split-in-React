import React, { lazy, Suspense } from "react";
import Demo_Component from "../components/Demo";
const LazyLoading_Componant = lazy(() => import("../components/LazyLoading"));

const Home = () => {
  return (
    <>
      This is home page
      <hr></hr>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoading_Componant />
        {/*1- This Componant will show Loading in ui Till data/Componant Load fully 
       2- We Can use this method to optimse the app - by the method we have Control to Show/Load diffrent Components in page Accroding to Our Requriemen
       3- This will Show ONly Rendre/Show only That UI which we are USIng- Other PAGE/UI/Componants will not load/show/rendre - Bundle File
        */}
      </Suspense>
      <hr></hr>
      <Demo_Component />
    </>
  );
};

export default Home;
