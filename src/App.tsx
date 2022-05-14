import { Footer, Loader, Nav, Routelist } from "frontend/component";
import { useAppSelector } from "frontend/utility";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useEffect } from "react";
import { useAppDispatch } from "./frontend/utility/hooks";
import { getToken, getUser } from "frontend/redux/Slice/UserSlice";
import { getAllUserHandler } from "./frontend/service/UserService";
import { useLocation } from "react-router-dom";

function App() {
  const { loader } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0 });
      }, 0);
    }, [pathname]);
    return null;
  };

  useEffect(() => {
    const localStorageAuth = localStorage.getItem("authToken");
    if (localStorageAuth) {
      dispatch(getToken(localStorageAuth));
      const localStorageUser = localStorage.getItem("authUser");
      dispatch(getUser(localStorageUser ? JSON.parse(localStorageUser) : null));
    }
    dispatch(getAllUserHandler());
  }, [dispatch]);

  console.log(pathname);

  return (
    <div className="App">
      {pathname !== "/result" && <ScrollToTop />}
      <Nav />
      <Routelist />
      <Footer />
      {loader && <Loader />}
      <ToastContainer />
    </div>
  );
}

export default App;
