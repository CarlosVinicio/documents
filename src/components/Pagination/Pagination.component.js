import React, { useEffect, useState } from "react";
import { Selector } from "../selector/Selector.component";
import { PaginationStyled } from "./Pagination.styled";

export const Pagination = (props) => {
  const { pageLimit, onChangeLimit, totalRecords, onChangePage } =
    props;
  const [active, setActive] = useState(1);
  const [pages, setPages] = useState([]);
  const limits = [
    { id: 1, type: 5 },
    { id: 2, type: 10 },
  ];

  const total = Math.ceil(parseInt(totalRecords) / pageLimit  );

  useEffect(() => {
    defineNumbersInPages();
  }, [active, total]);

  const defineNumbersInPages = () => {
    if (total <= 7) {
      let numbers = [];
      for (let i = 1; i <= total; i++) {
        numbers.push(i);
      }
      setPages(numbers);
      return;
    }
    // case 1
    if (active <= 4) {
      setPages([1, 2, 3, 4, 5, "...", total]);
    }
    // case 2
    if (active > 4 && active < total - 3) {
      setPages([1, "...", active - 1, active, active + 1, "...", total]);
    }
    //case 3
    if (active > total - 4) {
      setPages([1, "...", total - 4, total - 3, total - 2, total - 1, total]);
    }
  };

  const handleClick = (e) => {
    if (e.target.value === 0) {
      return;
    }
    setActive(e.target.value);
    onChangePage(e.target.value);
  };

  return (
    <PaginationStyled>
      <div className="pagination">
        <div>
          <Selector
            options={limits}
            valueByDefault={limits[0].type}
            onToogleOption={(e) => onChangeLimit(e)}
          />
        </div>
        <ul>
          {pages.map((item, index) => (
            <li
              key={index}
              value={item}
              onClick={handleClick}
              className={active === item ? "active" : ""}
            >
              {item}
            </li>
          ))}
        </ul>
        <div>Total: {totalRecords}</div>
      </div>
    </PaginationStyled>
  );
};
