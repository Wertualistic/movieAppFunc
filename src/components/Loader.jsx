import React from "react";

function Loader() {
  return (
    <>
      <div className="progress" style={{width: '75%'}}>
        <div className="indeterminate"></div>
      </div>
    </>
  );
}

export default Loader;
