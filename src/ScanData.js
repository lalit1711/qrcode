import React, { useState } from "react";
import QrReader from "react-qr-reader";
import Service from "./Service";
//const service = new Service();

const ScanData = () => {
  const [SD, setSD] = useState({ show: false, data: "" });
  const handleScan = data => {
    if (data) {
      setSD({ show: true, data: data });
    }
  };
  const handleError = err => {
    console.error(err);
  };
  return (
    <div className="card">
      {(() => {
        if (!SD.show) {
          return (
            <div className="columns is-mobile is-centered">
              <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: "100%" }}
              />
            </div>
          );
        } else {
          return (
            <section className="section">
              <ScannedData data={SD} setSD={setSD} />
            </section>
          );
        }
      })()}
    </div>
  );
};

const ScannedData = props => {
  console.log(props.data.show);
  if (props.data.show) {
    return (
      <div className="card">
        <div className="card-content">
          <div className="content">{props.data.data}</div>
        </div>
        <footer className="card-footer">
          <a
            className="card-footer-item"
            onClick={e => {
              props.setSD({ show: false, data: "" });
            }}
          >
            Cancel
          </a>
          <a href="#" className="card-footer-item">
            CheckIn
          </a>
        </footer>
      </div>
    );
  } else {
    return <h2>No Data scanned</h2>;
  }
};

export default ScanData;
