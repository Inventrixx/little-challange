import React from "react"
import "../App.css"

const ModalForm = ({showOrHide, closeModal}) => {
            console.log({closeModal})
    return(
            <div className={showOrHide}>
                <div className="modal-container">
                   <div className="modal-text-container">
                    <h1>Hola</h1>
                   <span onClick={closeModal} className="close">X</span> 
                   </div>
                </div>
            </div>

        )
    
}

export default ModalForm;