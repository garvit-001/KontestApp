import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Contest from "./Contest";
import "./Contests.css";
import Header from "../Title";
import Searching from "../Searching";
import { paginate } from "../api/Pagination";
import { fetchFromClist } from "../api/clist";

const Contests = () => {
  const [contests, setContests] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searching, setSearching] = useState(true);

  const contentPerPage = 10;
  const { currentPageItems, pageCount } = paginate(contests, pageNumber, contentPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    setSearching(true);
    fetchFromClist("/contest/?upcoming=true")
      .then(data => {
        setContests(data.objects || []);
        setSearching(false);
      })
      .catch(err => {
        console.error("Failed to fetch contests:", err);
        setSearching(false);
      });
  }, []);

  if (searching) return <Searching pageName={"contests"}/>;

  return (
    <section className="main">
      <Header />
      <div className="container">
        <div className="container-small">
          {currentPageItems.map((contest, i) => (
            <Contest contest={contest} key={i} />
          ))}
        </div>
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

export default Contests;
