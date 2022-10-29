import React from "react";
import styles from "./inndicadores.module.css";
import { getAllTypes } from "../redux/actions";
import { useDispatch, useSelector } from 'react-redux';

import { useState, useEffect } from 'react';

const Indicadores = (props) => {


    const dispatch = useDispatch();
    const info=useSelector(state=>state.indicadores);

    useEffect(() => {
        dispatch(getAllTypes());
        console.log(info)
      }, [dispatch]);

    if(Object.keys(info).length!==0){
      
        return (
            <div>
      
                  <div className={styles.indicadores}>Region: {info.region}</div>
                  <div className={styles.indicadores}>Name {info.detail.eventBody.service.name}</div>
                  <div className={styles.indicadores}>Users {info.detail.eventBody.service.users[1].name}</div>
                  
                    <h2>Metricas</h2>

                    <p>Número de eventos/llamadas/interacciones: </p>
                  <div className={styles.indicadores}>{info.detail.eventBody.data.metrics[0].metric} </div>
                  <div className={styles.indicadores}>producido desde el ultimo evento: {info.detail.eventBody.data.metrics[0].stats.count} </div>
                  <div className={styles.indicadores}>total eventos: {info.detail.eventBody.data.metrics[0].stats.sum} </div>

                <p> Número de llamadas de teléfono</p>
                  <div className={styles.indicadores}>{info.detail.eventBody.data.metrics[1].metric} </div>
                  <div className={styles.indicadores}>producido desde el ultimo evento: {info.detail.eventBody.data.metrics[1].stats.count} </div>
                  <div className={styles.indicadores}>total eventos: {info.detail.eventBody.data.metrics[1].stats.sum} </div>

                 <p>indicador del tiempo de ACW</p>
                  <div className={styles.indicadores}>{info.detail.eventBody.data.metrics[2].metric} </div>
                  <div className={styles.indicadores}>producido desde el ultimo evento: {info.detail.eventBody.data.metrics[2].stats.count} </div>
                  <div className={styles.indicadores}>total eventos: {info.detail.eventBody.data.metrics[2].stats.sum} </div>

                
                  <p> Número de ventas</p>
                  <div className={styles.indicadores}>{info.detail.eventBody.data.metrics[3].metric} </div>
                  <div className={styles.indicadores}>producido desde el ultimo evento: {info.detail.eventBody.data.metrics[3].stats.count} </div>
                  <div className={styles.indicadores}>total eventos: {info.detail.eventBody.data.metrics[3].stats.sum} </div>

                  
                  <p>llamadas programadas desde el último evento</p>
                  <div className={styles.indicadores}>{info.detail.eventBody.data.metrics[4].metric} </div>
                  <div className={styles.indicadores}>producido desde el ultimo evento: {info.detail.eventBody.data.metrics[4].stats.count} </div>
                  <div className={styles.indicadores}>total eventos: {info.detail.eventBody.data.metrics[4].stats.sum} </div>

                  <p> Errores genéricos cometidos por el sistema de eventos</p>
                  <div className={styles.indicadores}>{info.detail.eventBody.data.metrics[5].metric} </div>
                  <div className={styles.indicadores}>producido desde el ultimo evento: {info.detail.eventBody.data.metrics[5].stats.count} </div>
                  <div className={styles.indicadores}>total eventos: {info.detail.eventBody.data.metrics[5].stats.sum} </div>
            </div>
                );  
    }
   
              
    }

export default Indicadores;