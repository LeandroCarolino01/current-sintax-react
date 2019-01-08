import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'read a book',
        completed: false
      },
      {
        id: 2,
        title: 'go for a run',
        completed: false
      },
      {
        id: 3,
        title: 'program',
        completed: false
      }
      
    ]
  }
  //toggle todo
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
}

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  addTodo = (title) => {
    const newTodo = {
      id:4,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
  }
  render() {
    //console.log(this.state.todos) for testing purposes
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
