import React from "react";
import styles from "../styles/Buttons.module.css";

const Buttons = ({ buttons,onButtonClick }) => {
  return (
    <div className={styles["b-container"]}>
      {buttons.map((button) => {
        return (
          <button onClick={()=>onButtonClick(button)} className="btn btn-success" key={button}>
            {button}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
