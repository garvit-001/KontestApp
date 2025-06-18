import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { paginate } from "../api/Pagination";
import { fetchFromClist } from "../api/clist";
import Searching from "../Searching";
import "../App.css"
import "./Contests.css"

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searching, setSearching] = useState(true);

  const itemsPerPage = 20;
  const { currentPageItems, pageCount } = paginate(accounts, pageNumber, itemsPerPage);

  const changePage = ({ selected }) => setPageNumber(selected);

  useEffect(() => {
    setSearching(true);
    fetchFromClist("/account/")
      .then(data => {
        console.log("data objj", data.objects);
        setAccounts(data.objects || []);
        setSearching(false);
      })
      .catch(err => {
        console.error("Failed to fetch accounts:", err);
        setSearching(false);
      });
    }, []);
    
    if (searching) return <Searching pageName={"accounts"}/>;

    return (
      <div className="table-wrapper">
      <h2>Accounts</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Handle</th>
            <th>Name</th>
            <th>Rating</th>
            <th>Number of Contests</th>
            <th>Platform</th>
          </tr>
        </thead>
        <tbody>
          {currentPageItems.map((Accounts, index) => (
            <tr key={Accounts.id}>
              <td>{pageNumber * itemsPerPage + index + 1}</td>
              <td>{Accounts.handle}</td>
              <td>{Accounts.name || "-"}</td>
              <td>{Accounts.rating || "NA"}</td>
              <td>{Accounts.n_contests || "N/A"}</td>
              <td>{Accounts.resource}</td>
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

export default AccountList;
