import React, { useState } from "react";

const NewTruth = () => {
  const [truthInfo, setTruthInfo] = useState({
    promise: "",
    timing: 1,
    duration: 55,
    notify: false,
  });
  const changeTiming = (e) => {
    setTruthInfo({ ...truthInfo, timing: e.target.value });
  };

  const changeDuration = (e) => {
    setTruthInfo({ ...truthInfo, duration: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Submit a New Truth</h1>
      <form onSubmit={submitHandler}>
        <label>Truth You Will Uphold</label>
        <br />
        <input type="text" />
        <br />
        <br />
        <label>Reconfirm Your Truth After {truthInfo.timing} Days</label>
        <br />
        <input
          type="range"
          min={1}
          max={7}
          value={truthInfo.timing}
          onChange={changeTiming}
        />
        <br />
        <br />
        <label>Keep This Truth for {truthInfo.duration} Days</label>
        <br />
        <input
          type="range"
          min={1}
          max={365}
          value={truthInfo.duration}
          onChange={changeDuration}
        />
        <br />
        <br />
        <label>Turn on Notifications?</label>
        <br />
        <input type="checkbox" value={truthInfo.notify} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewTruth;
