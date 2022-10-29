import React from "react";
import styles from "./Agentes.module.css";
import { useEffect } from "react";
import { getAllTypes } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import mapa from "../tools/mapa.png";

const Agentes = (props) => {
    const dispatch = useDispatch();
    const info = useSelector(state => state.agentes)
    useEffect(() => {
        dispatch(getAllTypes())
        console.log(info)
    },[]);
    useEffect(() => {
        console.log(info)
    });

    if(Object.keys(info).length !==0 ){
    return (
        <React.Fragment>
            <div className={styles.background}>

                <div className={styles.titulo}>AGENTES </div>
               
                <div className={styles.region}>REGION: {info.region}
                    <img
                    className={styles.mapa}
                    // src={mapa}
                    alt="mapa"
                    />
                </div>
                <div className={styles.agentes}>Name:  {info.detail.eventBody.service.name}</div>
                <div className={styles.agentes}>Description: {info.detail.eventBody.service.description}</div>
                <div className={styles.agentes}>Metrics
                    <div className={styles.agentes}>Total de usuarios en el servicio:{info.detail.eventBody.data.metrics[0].stats.count} </div> 
                    <div className={styles.agentes}>Total de usuarios activos en el servicio:{info.detail.eventBody.data.metrics[1].stats.count} </div>
                    <div className={styles.agentes}>Se encuentran en una llamada activa:{info.detail.eventBody.data.metrics[2].stats.count} </div> 
                    <div className={styles.agentes}>Se encuentran en una llamada en espera:{info.detail.eventBody.data.metrics[3].stats.count} </div>  
                </div>       
            </div>          
        </React.Fragment>
    )
    }
};

export default Agentes;