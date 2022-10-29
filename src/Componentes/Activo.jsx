import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { getAllTypes } from "../redux/actions";
import css from "./Activo.module.css"

const Activo=()=>{
    const [userA,setUserA]=useState([]);
    const [asesorA,setasesorA]=useState([]);
    const [asesorE,setasesorE]=useState([]);
    const [asesorACW,setasesorACW]=useState([]);
    const dispatch=useDispatch();
    const info=useSelector(state=>state.agentes)

    useEffect(()=>{
        dispatch(getAllTypes())
    },[])
    useEffect(()=>{   
        if(Object.keys(info).length!==0){
            console.log(info.detail.eventBody.data)
            activosUsers()
            activosAsesoresA()
            activosAsesoresE()
            activosAsesoresACW()
        }
    },[info])
    const activosUsers=()=>{
        const users =info.detail.eventBody.service.users
        const metrics =info.detail.eventBody.data.metrics
        metrics[1].usersId.map(us=>{
            users.map(user=>{
                if(user.id===us){
                    const esta= userA.filter(use=>use===user.name)
                    if (!esta.length){
                        setUserA([...userA,user.name])
                    }
                }
            })
        })
        console.log(userA)
    }
    const activosAsesoresA=()=>{
        const users =info.detail.eventBody.service.users
        const metrics =info.detail.eventBody.data.metrics
        metrics[2].usersId.map(us=>{
            users.map(user=>{
                if(user.id===us){
                    const esta= asesorA.filter(use=>use===user.name)
                    if (!esta.length){
                    setasesorA([...asesorA,user.name])
                    }
                }
            })
        })
        console.log(asesorA)
    }
    const activosAsesoresE=()=>{
        const users =info.detail.eventBody.service.users
        const metrics =info.detail.eventBody.data.metrics
        metrics[3].usersId.map(us=>{
            users.map(user=>{
                if(user.id===us){
                    const esta= asesorE.filter(use=>use===user.name)
                    if (!esta.length){
                    setasesorE([...asesorE,user.name])
                    }
                }
            })
        })
        console.log(asesorE)
    }
    const activosAsesoresACW=()=>{
        const users =info.detail.eventBody.service.users
        const metrics =info.detail.eventBody.data.metrics
        metrics[3].usersId.map(us=>{
            users.map(user=>{
                if(user.id===us){
                    const esta= asesorACW.filter(use=>use===user.name)
                    if (!esta.length){
                    setasesorACW([...asesorACW,user.name])
                    }
                }
            })
        })
        console.log(asesorACW)
    }
    return(
            <div className={css.container}>
                <div className={css.card}>
                    <h3 className={css.title}>Los Usuarios que estan activos en el servicio son:</h3>
                    <div className={css.bar}>
                    <div className={css.emptybar}></div>
                    <div className={css.filledbar}></div>
                    </div>
                    <div className={css.circle}>
                    {userA.length? 
                        userA.map(user=>{
                            return (
                                <p>{user}</p>
                            )
                        })
                    : <p>No hay usuarios</p>}
                    </div>
                </div>
                <div className={css.card}>
                    <h3 className={css.title}>Los Usuarios que estan activos en llamada son:</h3>
                    <div className={css.bar}>
                    <div className={css.emptybar}></div>
                    <div className={css.filledbar}></div>
                    </div>
                    <div className={css.circle}>
                    {asesorA.length? 
                        asesorA.map(user=>{
                            return (
                                <p>{user}</p>
                            )
                        })
                    : <p>No hay usuarios</p>}
                    </div>
                </div>
                <div className={css.card}>
                    <h3 className={css.title}>Los Usuarios que estan activos con llamada en espera son:</h3>
                    <div className={css.bar}>
                    <div className={css.emptybar}></div>
                    <div className={css.filledbar}></div>
                    </div>
                    <div className={css.circle}>
                    {asesorE.length? 
                        asesorE.map(user=>{
                            return (
                                <p>{user}</p>
                            )
                        })
                    : <p>No hay usuarios</p>}
                    </div>
                </div>
                <div className={css.card}>
                    <h3 className={css.title}>Los Usuarios que estan activos con llamada ACW son:</h3>
                    <div className={css.bar}>
                    <div className={css.emptybar}></div>
                    <div className={css.filledbar}></div>
                    </div>
                    <div className={css.circle}>
                    {asesorACW.length? 
                        asesorACW.map(user=>{
                            return (
                                <p>{user}</p>
                            )
                        })
                    : <p>No hay usuarios</p>}
                    </div>
                </div>
            </div>
    )
}

export default Activo;