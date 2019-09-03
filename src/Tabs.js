import React, { useState } from "react";
import ScanData from "./ScanData";
import List from "./List";
const Tabs = () => {
  const [tab, setTab] = useState(true);
  return (
    <div className="coulmns">
      <div className="tabs is-toggle is-centered">
        <ul>
          <li className={!tab ? "" : "is-active"}>
            <a
              onClick={e => {
                setTab(true);
              }}
            >
              <span className="icon is-small">
                <i className="fa fa-camera" aria-hidden="true"></i>
              </span>
              <span>Scan</span>
            </a>
          </li>
          <li className={!tab ? "is-active" : ""}>
            <a
              onClick={e => {
                setTab(false);
              }}
            >
              <span className="icon is-small">
                <i className="fa fa-list" aria-hidden="true"></i>
              </span>
              <span>Attenddes</span>
            </a>
          </li>
          <li></li>
        </ul>
      </div>
      <div className="container ">
        <div className="box">
          <article className="media">
            <div className="media-content">
              <div className="content"></div>
              <nav className="">
                {(() => {
                  if (tab) {
                    return <ScanData />;
                  } else {
                    return <List />;
                  }
                })()}
              </nav>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
