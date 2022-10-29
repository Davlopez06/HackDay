import React from "react";
import styles from "./Agentes.module.css";
import { useEffect } from "react";
import { getAllTypes } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import mapa from "../tools/mapa.png";
import logo from "../tools/logo2.png";


const Agentes = () => {
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

                <div className={styles.backLogo}>
                <img
                    className={styles.logo}
                    src={logo}
                    alt="mapa"
                />
                </div>
               
                <div className={styles.region}>

                <div className={styles.contMetrics}>REGION: {info.region}</div> 
                    
                    <img
                    className={styles.mapa}
                    src={mapa}
                    alt="mapa"
                    />
                </div>
            <div className={styles.informacion}>
            <div className={styles.metrics}>
                    <div className={styles.contMetrics}>TOTAL DE USUARIOS EN EL SERVICIO:{info.detail.eventBody.data.metrics[0].stats.count} </div> 
                    <div className={styles.contMetrics}>Total de usuarios activos en el servicio:{info.detail.eventBody.data.metrics[1].stats.count} </div>
                    <div className={styles.contMetrics}>Se encuentran en una llamada activa:{info.detail.eventBody.data.metrics[2].stats.count} </div> 
                    <div className={styles.contMetrics}>Se encuentran en una llamada en espera:{info.detail.eventBody.data.metrics[3].stats.count} </div>  
                </div>
                <div className={styles.servicio}>
                    <div className={styles.contMetrics}>Name:  {info.detail.eventBody.service.name}</div>
                    <div className={styles.contMetrics}>Description: {info.detail.eventBody.service.description}</div>      
                </div>

            </div>
                
                
            </div>          
        </React.Fragment>
    )
    }
};

export default Agentes;