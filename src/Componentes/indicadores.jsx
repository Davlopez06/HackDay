import React from "react";
import styles from "./Agentes.module.css";


const Indicadores = () => {
    return (
        <React.Fragment>
            <div className={styles.background}>

                <div className={styles.agentes}>Region</div>
                <div className={styles.agentes}>Name</div>
                <div className={styles.agentes}>Users</div>
                <div className={styles.agentes}>Metrics</div>

            </div>           
        </React.Fragment>
    )
};

export default Indicadores;