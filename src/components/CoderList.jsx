import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { paginate } from "../api/Pagination";
import { fetchFromClist } from "../api/clist";
import Searching from "../Searching";
import "../App.css"
import "./Contests.css"

const CoderList = () => {
  const [coders, setCoders] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searching, setSearching] = useState(true);

  const itemsPerPage = 20;
  const { currentPageItems, pageCount } = paginate(coders, pageNumber, itemsPerPage);

  const changePage = ({ selected }) => setPageNumber(selected);

  useEffect(() => {
    setSearching(true);
    fetchFromClist("/coder/")
      .then(data => {
        setCoders(data.objects || []);
        setSearching(false);
      })
      .catch(err => {
        console.error("Failed to fetch coders:", err);
        setSearching(false);
      });
  }, []);

  if (searching) return <Searching pageName={"coders"}/>;

  return (
    <div className="table-wrapper">
      <h2>Coders</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Handle</th>
            <th>Country</th>
            <th># Accounts</th>
          </tr>
        </thead>
        <tbody>
          {currentPageItems.map((coder, index) => (
            <tr key={coder.id}>
              <td>{pageNumber * itemsPerPage + index + 1}</td>
              <td>{coder.handle}</td>
              <td>{coder.country || "N/A"}</td>
              <td>{coder.n_accounts}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
  );
};

export default CoderList;
