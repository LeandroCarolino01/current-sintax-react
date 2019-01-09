import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'read a book',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'go for a run',
        completed: false
      },
      {
        id: uuid.v4(),
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
      id:uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
  }
  render() {
    //console.log(this.state.todos) for testing purposes
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" render={props => (
            <React.Fragment>
              
            </React.Fragment>
          )} />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </Router>
    );
  }
}

export default App;
