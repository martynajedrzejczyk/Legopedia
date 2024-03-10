import { useEffect, useState } from "react";
import "./TableSection.css";

const TableSection = () => {
    const [option, setOption] = useState("all");
    const [parts, setParts] = useState([]);
    const [sets, setSets] = useState([]);

    useEffect(() => {}, []); //todo - pobieranie z api

    return (
        <div className="table-container">
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
            />
            <div className="table-buttons">
                <button>PARTS</button>
                <button>SETS</button>
            </div>
            <table className="table">
                {option === "parts" ? (
                    <tr>
                        <th>Part Number</th>
                        <th>Part Name</th>
                        <th>Category</th>
                        <th className="th-options"> </th>
                    </tr>
                ) : (
                    <tr>
                        <th>Set Number</th>
                        <th>Set Name</th>
                        <th>Year</th>
                        <th>Number of parts</th>
                        <th>Theme</th>
                        <th className="th-options"> </th>
                    </tr>
                )}
                {option === "parts"
                    ? parts.map((part) => (
                          <tr key={part.part_num}>
                              <td>{part.part_num}</td>
                              <td>{part.name}</td>
                              <td>{part.category}</td>
                              <td className="td-options">
                                  <span class="material-symbols-outlined">
                                      edit
                                  </span>
                                  <span class="material-symbols-outlined">
                                      delete
                                  </span>
                              </td>
                          </tr>
                      ))
                    : sets.map((set) => (
                          <tr key={set.set_num}>
                              <td>{set.set_num}</td>
                              <td>{set.name}</td>
                              <td>{set.year}</td>
                              <td>{set.num_parts}</td>
                              <td>{set.theme_id}</td>
                              <td className="td-options">
                                  <span class="material-symbols-outlined">
                                      edit
                                  </span>
                                  <span class="material-symbols-outlined">
                                      delete
                                  </span>
                              </td>
                          </tr>
                      ))}
            </table>
            <button className="add-button">
                <span class="material-symbols-outlined">add</span>
            </button>
        </div>
    );
};

export default TableSection;
