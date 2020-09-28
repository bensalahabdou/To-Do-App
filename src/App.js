import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, editTodo } from './redux/action';
import "./FontAwesomeIcons";
import uuid from 'uuid/dist/v4';
import TodoInput from './todoInput';
import Todo from './todo';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
     edit: false,
     input:'',
     id: uuid()
    }
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
    };
  
    handleClick = (event) => {
      event.preventDefault();
      const newTodo = {id: this.state.id, todo: this.state.input};
      this.props.newHandleClick(newTodo);
      this.setState({
        input: '',
        edit: false,
        id: uuid()
      })
    }

  handleEdit = (id) => {
    this.props.newHandleEdit(id);
    let selectedItem = this.props.todos.find(todo => todo.id === id)
    let textEdited = selectedItem.todo
    this.setState({
      edit: true,
      input: textEdited,
      id: id
    })
  }

  render() {
    const ListTodo = this.props.todos.map(todo => <li key={todo.id}><Todo todo={todo.todo} id={todo.id} handleEdit={this.handleEdit} /></li>)
    return (
      <div className="App">
        <div className="container bg-primary">
          <h1 className="text-center text">
            TODO APP
          </h1>
        </div>
        <div className="container">
            <TodoInput  
              input={this.state.input} 
              edit={this.state.edit}
              handleChange={this.handleChange}
              handleClick={this.handleClick}
            />  
        </div>
        <div>
          {this.props.todos.length === 0 ? 
          <div className="alert alert-info text-center font-italic container" style={{fontSize: "20px"}} role="alert">There is no Tasks</div> :
          <ul>{ListTodo}</ul> }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = dispatch=> {
  return {
    newHandleClick: (newTodo) => {
      dispatch(addTodo(newTodo))
    },
    newHandleEdit: id => {
      dispatch(editTodo(id))
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);