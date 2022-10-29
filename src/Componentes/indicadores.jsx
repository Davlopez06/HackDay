import React from "react";
import styles from "./inndicadores.module.css";
import { getAllTypes } from "../redux/actions";
import { useDispatch, useSelector } from 'react-redux';

import { useState, useEffect } from 'react';
import Navbar from "./Navbar";

const Indicadores = (props) => {


    const dispatch = useDispatch();
    const info=useSelector(state=>state.indicadores);

    useEffect(() => {
        dispatch(getAllTypes());
        console.log(info)
      }, [dispatch]);

    if(Object.keys(info).length!==0){
      
        return (
            <div className={styles.background}>
                    <Navbar/>
                  <div className={styles.indicado}>Region: {info.region}</div>
                  <div className={styles.indicado}>Name {info.detail.eventBody.service.name}</div>
                  <div className={styles.indicado}>Users {info.detail.eventBody.service.users[1].name}</div>
                  
                    <h2 className={styles.t}>METRICS SCREEN.</h2>
                    <div className={styles.displ}>

                    <p className={styles.subtitles}>
                        
                        <h3 className={styles.titl}>N. eventos llamada </h3>
                  <div className={styles.indicadores}>{info.detail.eventBody.data.metrics[0].metric} </div>
                  <div className={styles.indicadores}>producido desde  ultimo evento: {info.detail.eventBody.data.metrics[0].stats.count} </div>
                  <div className={styles.indicadores}>total eventos: {info.detail.eventBody.data.metrics[0].stats.sum} </div>
                  </p>

                <p className={styles.subtitles}>
                <h3 className={styles.titl}>N. llamadas telefonicas</h3> 
                  <div className={styles.indicadores}>{info.detail.eventBody.data.metrics[1].metric} </div>
                  <div className={styles.indicadores}>llamadas de telefono concurrentes: {info.detail.eventBody.data.metrics[1].stats.count} </div>
                  <div className={styles.indicadores}>Total de llamadas telefónicas: {info.detail.eventBody.data.metrics[1].stats.sum} </div>
                  <div className={styles.indicadores}>Mínimo de llamadas concurrentes: {info.detail.eventBody.data.metrics[1].stats.min} </div>
                  <div className={styles.indicadores}>Máximo de llamadas concurrentes: {info.detail.eventBody.data.metrics[1].stats.max} </div>
                  </p>
                 <p className={styles.subtitles}>
                 <h3 className={styles.titl}>tiempo de ACW</h3>
                  <div className={styles.indicadores}>{info.detail.eventBody.data.metrics[2].metric} </div>
                  <div className={styles.indicadores}>Media de ACW: {info.detail.eventBody.data.metrics[2].stats.count} </div>
                  <div className={styles.indicadores}>Total de segundos que los asesores han estando en el estado de ACW: {info.detail.eventBody.data.metrics[2].stats.sum} </div>
                  <div className={styles.indicadores}>Minimma media de ACW: {info.detail.eventBody.data.metrics[2].stats.min} </div>
                  <div className={styles.indicadores}>Máxima media de ACW: {info.detail.eventBody.data.metrics[2].stats.max} </div>
                  </p>
                
                  <p className={styles.subtitles}> 
                  <h3 className={styles.titl}>N. de ventas</h3>
                  <div className={styles.indicadores}>{info.detail.eventBody.data.metrics[3].metric} </div>
                  <div className={styles.indicadores}>Ventas producidas desde el último evento: {info.detail.eventBody.data.metrics[3].stats.count} </div>
                  <div className={styles.indicadores}>Total de ventas: {info.detail.eventBody.data.metrics[3].stats.sum} </div>
                  <div className={styles.indicadores}>Mínimo de ventas del historico: {info.detail.eventBody.data.metrics[3].stats.min} </div>
                  <div className={styles.indicadores}>Máximo de ventas del historico: {info.detail.eventBody.data.metrics[3].stats.max} </div>

                  </p>
                  
                  <p className={styles.subtitles}>
                  <h3 className={styles.titl}>N. llamadas programadas</h3>
                  <div className={styles.indicadores}>{info.detail.eventBody.data.metrics[4].metric} </div>
                  <div className={styles.indicadores}>Total de llamadas programadas : {info.detail.eventBody.data.metrics[4].stats.count} </div>
                  <div className={styles.indicadores}>Total de llamadas programadas desde que el sistema emepezó a emitir eventos: {info.detail.eventBody.data.metrics[4].stats.sum} </div>
                  <div className={styles.indicadores}>minimo llamadas programadas desde que el sistema emepezó a emitir eventos: {info.detail.eventBody.data.metrics[4].stats.min} </div>
                  <div className={styles.indicadores}>maximo llamadas programadas desde que el sistema emepezó a emitir eventos: {info.detail.eventBody.data.metrics[4].stats.max} </div>
                  </p>

                  <p className={styles.subtitles}>
                  <h3 className={styles.titl}>errores por sist de eventos</h3>
                  <div className={styles.indicadores}>{info.detail.eventBody.data.metrics[5].metric} </div>
                  <div className={styles.indicadores}>Cantidad de errores desde que el sistema empezó a emitir eventos: {info.detail.eventBody.data.metrics[5].stats.count} </div>
                  <div className={styles.indicadores}>total errores: {info.detail.eventBody.data.metrics[5].stats.sum} </div>
                  <div className={styles.indicadores}>maximo de errores: {info.detail.eventBody.data.metrics[5].stats.min} </div>
                  <div className={styles.indicadores}>minimo de errores: {info.detail.eventBody.data.metrics[5].stats.max} </div>
                  </p>
                  </div>
            </div>
                );  
    }
   
              
    }

export default Indicadores;