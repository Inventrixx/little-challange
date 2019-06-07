import React, {Component} from "react"
import ItemList from "./itemList"
import ModalForm from "./modalForm"
import "../App.css"

class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalState:  "display-off"
        }
    }

    

    displayModal() {
        console.log("estoy en la función")
        this.setState({
            modalState: "display-on"
        })
    }

    hideModal() {
        this.setState({
            modalState: "display-off"
        })
    }


    render() {
       const {modalState} = this.state
        return (
            <div>
                <input type="button" value="Add!" 
                onClick={() => this.displayModal()}
                
                 />
              
                <ModalForm showOrHide={modalState} closeModal={() => this.hideModal()} />
               
                <ItemList /> 

            </div>
        )
    }
}

export default Container;