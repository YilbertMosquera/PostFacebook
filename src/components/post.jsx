import React, { useState, useEffect } from "react";
import Commentform from "./commentform";
import ListComments from "./listcomments";

let Post = () => {
    // manejo de estados de los likes
    let [likes, setLike] = useState(0);
    let updateLikes = () => {
        setLike(likes+1);
    };
    //manejo del boton de comentario
    let [btnComment, setBtnComment] = useState(false);
    let isShowComment = () => setBtnComment(!btnComment);
    //console.log(btnComment);
    //funcion para obtener comentario del formulario
    let [textComment, setTextComment] = useState("");
    let getCommentData = (Comment)=>{
        setTextComment(Comment);
    }
     //listado de comentaros
     let ListCom = [
        {id:1, text: "El astro argentino"},
        {id:2, text: "8 veces ganador del balon de oro y el actaul campeon de la copa del mundo"}
    ];
    let nextID = 3;
    let [listData, setlistData] = useState(ListCom);
    //comprobar si hay un nuevo comentario
    useEffect(()=>{
        if(textComment){
            setlistData([
                ...listData,
                {id: nextID++, text: textComment}
            ]);
        }
    }, [textComment]);
 
    //console.log(ListCom);
    //console.log(listData)
    return(
        <div className="card" style={{"width": "18rem"}}> 
            <div className="card-body">
                 <h4 className="card-title">El mejor jugador del mundo</h4>
                 <p className="card-text">Lionel Andrés Messi Cuccittini, conocido como Leo Messi, es un futbolista argentino que juega como delantero o centrocampista. Desde 2023, integra el plantel del Inter Miami de la MLS canadoestadounidense.</p>
                 <img src="https://tmssl.akamaized.net/images/foto/galerie/lionel-messi-1711467863-132837.jpg?lm=1711467875" className="card-img-top" alt="..." />
            </div>
            <ul className="list-group list-group-flush">
               <li className="list-group-item d-flex justify-content-around">
                    <span className="">👍😂😁 {likes} </span> <span>{listData.length} 💬</span>
               </li>
               <li className="list-group-item d-flex justify-content-around">
                    <button className="btn btn-primary"
                    onClick={updateLikes}
                    >👍Likes</button>
                     <button className="btn btn-primary"
                     onClick={isShowComment}
                     >💬comment</button>
               </li>
            </ul>
            <div className="card-footer">
                { btnComment && <Commentform getCommentData = {getCommentData} />}
            </div>
            <ListComments ListComData = {listData} />
            {/* Botón para cambiar la imagen del post */}
            {/* <button className="btn btn-primary" onClick={() => changeImageAndResetComments("./../assets/Nueva-imagen.jpg")}>Cambiar Imagen</button> */}
        </div>
    );
};

export default Post;
