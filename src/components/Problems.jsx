import React from 'react'
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { paginate } from "../api/Pagination";
import { fetchFromClist } from "../api/clist";
import Searching from "../Searching";
import "../App.css"
import "./Contests.css"

const Problems = () => {
    const [problems, setProblems] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [searching, setSearching] = useState(true);

    const itemsPerPage = 20;
    const { currentPageItems, pageCount } = paginate(problems, pageNumber, itemsPerPage);

    const changePage = ({ selected }) => setPageNumber(selected);

    useEffect(() => {
        setSearching(true);
        fetchFromClist("/problem/?url__regex=co")
            .then(data => {
                console.log("problem", data.objects);
                setProblems(data.objects || []);
                setSearching(false);
            })
            .catch(err => {
                console.error("Failed to fetch problems:", err);
                setSearching(false);
            });
    }, []);

    if (searching) return <Searching pageName={"problems"} />;
    return (

        <div className="table-wrapper">
            <h2>problems</h2>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Handle</th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>link</th>
                        <th>Platform</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPageItems
                    
                    .map((problems, index) => (
                        <tr key={problems.id}>
                            <td>{pageNumber * itemsPerPage + index + 1}</td>
                            <td>{problems.handle}</td>
                            <td>{problems.name || "-"}</td>
                            <td>{problems.rating || "."}</td>
                            <td>{problems.url?<a href={problems.url} target='_blank'>link</a>:"-"}</td>
                            <td>{problems.resource}</td>
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

    )
}

export default Problems