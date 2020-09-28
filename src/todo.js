import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from './redux/action';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Todo = props => {
    const { todo, id, handleEdit } = props;
    return (
       <div className="container">
            <div className="alert alert-dark d-flex justify-content-between" style={{textTransform:"uppercase", width:"90%"}} role="alert">
                <div 
                    className="d-flex align-items-center"
                    >{todo}
                </div>
                <div>
                    <button 
                        onClick= {() => {handleEdit(id)}} 
                        className= "btn btn-info"
                        style={{width: "70px", height: "50px"}}  
                    ><FontAwesomeIcon icon="edit" /></button>
                    <button 
                        onClick= {() => {props.removeNewTodo(id)}} 
                        className= "btn btn-danger"
                        style={{width: "70px", height: "50px"}}  
                    ><FontAwesomeIcon icon="trash" /></button>
                    
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