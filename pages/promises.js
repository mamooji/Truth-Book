import Layout from "../components/layout";
import Cards from "../components/Cards";
import { useState, useEffect, useCallback } from "react";
import Search from "../components/Search";
const promises = () => {
  const [truthState, setTruthState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    console.log("Rendering Truths", truthState);
  }, [truthState]);

  const searchTruthsHandler = useCallback((searchResult) => {
    setTruthState(searchResult);
  }, []);

  return (
    <div
      style={
        {
          // backgroundColor: "rgb(112,168,251)",
          // objectFit: "cover",
          // width: "100vw",
          // height: "100%",
          // position: "fixed",
          // top: 0,
          // left: 0,
          // overflowX: "hidden",
          // overflowY: "scroll",
        }
      }
    >
      <Layout>
        <div style={{}}>
          <div
            style={{
              paddingTop: "5vh",
            }}
          >
            <Search
              onLoadTruths={searchTruthsHandler}
              // style={{
              //   position: "relative",
              //   height: "50vh",
              //   textAlign: "center",
              //   display: "flex",
              //   alignItems: "center",
              //   justifyContent: "center",
              // }}
            />
            <div>
              <Cards
                truths={truthState}
                // className="flex flex-wrap justify-center max-w-screen-xl pb-12 mx-auto"
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default promises;
