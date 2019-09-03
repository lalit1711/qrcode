import React, { useState } from "react";

const List = () => {
  const _data = [
    "lalit",
    "khelawan",
    "dharmendra",
    "akash",
    "bholu",
    "randa",
    "lalit",
    "khelawan",
    "dharmendra",
    "akash",
    "bholu",
    "randa",
    "lalit",
    "khelawan",
    "dharmendra",
    "akash",
    "bholu",
    "randa"
  ];
  const [data, setData] = useState(_data);

  const filterData = v => {
    setData(() => {
      return _data.filter(e => {
        return e.toLowerCase().indexOf(v.toLowerCase()) > -1;
      });
    });
  };
  return (
    <div className="card">
      <header class="card-header">
        <p class="card-header-title">List</p>
      </header>
      <div className="field">
        <p className="control has-icons-left ">
          <input
            className="input"
            type="text"
            placeholder="Search.."
            onChange={e => {
              filterData(e.target.value);
            }}
          />
          <span className="icon is-small is-left">
            <i className="fa fa-search"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fa fa-check"></i>
          </span>
        </p>
      </div>
      <div className="list is-hoverable">
        {data.map(e => {
          return <a className="list-item">{e}</a>;
        })}
      </div>
    </div>
  );
};

export default List;
