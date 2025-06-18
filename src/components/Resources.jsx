import React from 'react'
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { paginate } from "../api/Pagination";
import { fetchFromClist } from "../api/clist";
import Searching from "../Searching";
import "../App.css"
import "./Contests.css"

const Resources = () => {
    const [resources, setResources] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [searching, setSearching] = useState(true);

    const itemsPerPage = 20;
    const { currentPageItems, pageCount } = paginate(resources, pageNumber, itemsPerPage);

    const changePage = ({ selected }) => setPageNumber(selected);

    useEffect(() => {
        setSearching(true);
        fetchFromClist("/resource/")
            .then(data => {
                const sortedResources = (data.objects || []).sort((a, b) => (b.n_accounts || 0) - (a.n_accounts || 0));
                console.log("resources", sortedResources)
                setResources(sortedResources);
                setSearching(false);
            })
            .catch(err => {
                console.error("Failed to fetch resources:", err);
                setSearching(false);
            });
    }, []);

    if (searching) return <Searching pageName={"resources"} />;

    return (
        <div className="table-wrapper">
            <h2>Resources</h2>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Number of Contests</th>
                        <th>Number of Accounts</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPageItems.map((coder, index) => (
                        <tr key={coder.id}>
                            <td>{pageNumber * itemsPerPage + index + 1}</td>
                            <td>
                                <a
                                    href={`https://clist.by/resource/${coder.name}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        textDecoration: "none",
                                        color: "#3b82f6", // Tailwind's blue-500
                                        fontWeight: "500"
                                    }}
                                >
                                    <img
                                        src={`https://clist.by/${coder.icon}`}
                                        alt="icon"
                                        style={{
                                            width: "24px",
                                            height: "24px",
                                            borderRadius: "4px",
                                            objectFit: "contain"
                                        }}
                                    />
                                    {coder.name}
                                </a>
                            </td>

                            <td>{coder.n_contests || "N/A"}</td>
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
}

export default Resources