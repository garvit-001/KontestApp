import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Contest from "./Contest";
import "./Contests.css";
import Header from "./Title";
const Contests = () => {
  const [items, setItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const contentPerPage = 10;
  const pagesVisited = pageNumber * contentPerPage;
  const pageCount = Math.ceil(items.length / contentPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayContent = items
    .slice(pagesVisited, pagesVisited + contentPerPage)
    .map((item, i) => {
      return <Contest contest={item} key={i} />;
    });

  useEffect(() => {
    // setSearching(true);
    const getContests = async () => {
      const details = await fetch(`https://kontests.net/api/v1/all`, {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      });
      const data = await details.json();
      setItems(data);
      //   setSearching(false);
    };

    getContests();
  }, []);
  //   if (searching === true) {
  //     return <Searching />;
  //   } else {
  return (
    <section className=" main">
      <Header />
      {/* <Info /> */}
      <div className="container">
        <div className="container-small">{displayContent}</div>
        <div className="card pages">
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationContainer"}
            disabledClassName={"previousBtn"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            activeClassName={"activeBtn"}
          />
        </div>
      </div>
    </section>
  );
};
// };

export default Contests;
