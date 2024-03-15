import React, { useState } from 'react'
import styles from "../styles/Display.module.css"


const Display = ({dispVal}) => {

  return (
    <div className={`${styles["display-container"]} btn-success`} >
        <input readOnly value={dispVal} type="text" className={styles.display}/>
    </div>
  )
}

export default Display