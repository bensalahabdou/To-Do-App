import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { connect } from 'react-redux';
// import { addTodo } from './redux/action';


class TodoInput extends React.Component {

    render() {
      const {input, handleChange, handleClick, edit, duration} = this.props;
        return (
           <div className="container">
               <div className="input-group mb-3">
                <input 
                        type="text" 
                        value={input} 
                        onChange={handleChange}
                        id="input-todo"  
                        className="form-control input-lg"
                        placeholder="Enter Your Tasks"
                        aria-label="Enter Your Tasks"
                        autoComplete='off'
                        name= "input"
                    />
                <input 
                        type="time" 
                        value={duration}
                        onChange={handleChange}
                        id="duration-todo"  
                        className="form-control input-sm"
                        placeholder="Enter Your Tasks"
                        aria-label="Enter Your Tasks"
                        autoComplete='off'
                        name= "duration"
                    />

                <div className="input-group-append">
                <button 
                    className={!edit ? "btn btn-secondary" : "btn btn-success"}
                    type="button" 
                    onClick={handleClick}
                    disabled={input=== '' || duration === '' ? "disabled" : null}
        >{!edit ? <Fragment><FontAwesomeIcon icon="paper-plane" size="1x" /> Add Todo</Fragment> : <Fragment><FontAwesomeIcon icon="edit"  size="1x" /> Edit Todo</Fragment> }
                </button>
                </div>
                </div>
                    
           </div>
        );
    }
}

export default TodoInput;
