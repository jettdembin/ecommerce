import React, {useState} from "react";
import "./Subscribe.css";
import { EmailIcon } from "../mui/index";

import { useMediaQuery } from "react-responsive";

function Subscribe() {
  const [val, setVal] = useState("");
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const reset = () => {
    setVal("");
  };


  const checkIfMediumPlus = useMediaQuery({
    query: "(min-width: 850px)",
  });

  return (
    <div className="Subscribe-desktop">
      {checkIfMediumPlus ? 
        <div className="Subscribe-cntr-desktop">
            <h2 className="Subscribe-header">
              <EmailIcon style={{width:"2em", height:"2em", marginRight:"10px"}}/>
              Sign Up and Stay Connected
            </h2>
            <div className="Subscribe-info-cntr">
              <p className="Subscribe-info-desktop">
                Sign up for the newsletter and get 20% off! Gain access to exclusive
                offers and be the first to know when new stuff drops!
              </p>
              <form onSubmit={(e)=> {
                e.preventDefault();
                reset();
              }}>
                <input type="text" value={val} placeholder="Enter Your Email Address" onChange={handleChange} />
              </form>
              <button className="Subscribe-btn">SUBSCRIBE</button>
            </div>
        </div>
      :
      <>
        <div>
          <h2 className="Subscribe-header">
            <EmailIcon className="Subscribe-icon" style={{marginRight:"10px"}}/>
            Sign Up and Stay Connected
          </h2>
          <p className="Subscribe-info">
            Sign up for the newsletter and get 20% off! Gain access to exclusive
            offers and be the first to know when new stuff drops!
          </p>
        </div>
        <button className="Subscribe-btn">SUBSCRIBE</button>
      </>
      }
    </div>
  );
}

export default Subscribe;
