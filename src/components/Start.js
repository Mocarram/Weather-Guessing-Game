import React, { useEffect } from "react";
import styles from "./Start.module.css";

function Start() {
  useEffect(() => {
    // get the cities and push them to redux store
  }, []);

  return <div className={styles.start}></div>;
}

export default Start;
