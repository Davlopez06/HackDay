import React from "react";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <React.Fragment>
            <div className={styles.background}>

                <Link to="/home">
                    <button>Go!</button>
                </Link> 

            </div>           
        </React.Fragment>
    )
};

export default LandingPage;