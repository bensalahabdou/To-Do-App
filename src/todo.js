import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from './redux/action';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Todo = props => {
    const { todo, id, handleEdit, duration } = props;
    return (
       <div className="container">
            <div className="alert alert-dark d-flex justify-content-between" style={{textTransform:"uppercase", width:"90%"}} role="alert">
                <div 
                    className="d-flex align-items-center"
                    >{todo}
                </div>
                <div><strong style={{textTransform:"capitalize"}}>task's time:</strong><span className="badge badge-pill badge-light">{duration}</span></div>
                <div>
                    <span 
                        onClick= {() => {handleEdit(id)}} 
                        className= " border-0 mr-4"
                        style={{width: "70px", height: "50px", cursor:"pointer"}}  
                    ><FontAwesomeIcon icon="edit" size="1x" color="green"/></span>
                    <span 
                        onClick= {() => {props.removeNewTodo(id)}} 
                        className= "color-danger"
                        style={{width: "70px", height: "50px", cursor:"pointer"}}  
                    ><FontAwesomeIcon icon="trash" size="1x" color="red" /></span>
                    
                </div>
            </div>
         </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
      removeNewTodo: (id) => {
        dispatch(removeTodo(id))
      }
    }
  };
  
 export default connect(null, mapDispatchToProps)(Todo);