import React, {Component} from "react"
import '../App.css'

class ItemList extends Component {
    constructor(props) {
        super(props)

            this.state = {
                list: []
            }
    }
    render() {
        const {list} = this.state
       return(
            list.length === 0 ?  (<div className="empty"> Add Items! </div>)  : null
       ) 
    }
}



export default ItemList;