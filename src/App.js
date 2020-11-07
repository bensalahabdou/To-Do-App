import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, editTodo } from './redux/action';
import "./FontAwesomeIcons";
import uuid from 'uuid/dist/v4';
import TodoInput from './todoInput';
import Todo from './todo';
import Counter from './counter';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     edit: false,
     input:'',
     duration:'',
     id: uuid()
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    };
  
    handleClick = (event) => {
      event.preventDefault();
      const newTodo = {id: this.state.id, todo: this.state.input, duration: this.state.duration};
      this.props.newHandleClick(newTodo);
      this.setState({
        input: '',
        duration: '',
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
    const ListTodo = this.props.todos.map(todo => <li key={todo.id}><Todo  duration={todo.duration} todo={todo.todo} id={todo.id} handleEdit={this.handleEdit} /></li>)
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
              duration={this.state.duration}
              edit={this.state.edit}
              handleChange={this.handleChange}
              handleClick={this.handleClick}
            />  
        </div>
        <div>
          {this.props.todos.length === 0 ? 
          <div className="alert alert-info text-center font-italic container" style={{fontSize: "20px"}} role="alert">There is no Tasks</div> :
          <div>
            <div><Counter hour={Number(this.props.todos[0].duration.slice(0,2))} minute={Number(this.props.todos[0].duration.slice(3))}  firstId={this.props.todos[0].id} /></div>
            <ul>{ListTodo}</ul>
            </div> }
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

const mapDispatchToProps = dispatch => {
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