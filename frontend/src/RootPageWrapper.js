import MainNavigation from "./components/MainNavigation";

import { Outlet } from "react-router-dom";
export const RootPageWrapper = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
