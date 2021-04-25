import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import tasks from "./reducers/tasks";
import TodoList from "./components/ToDoList";
import AddTask from "components/AddTask";
import Header from "components/Header";
import Footer from "components/Footer";

const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer,
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <div className='wrapper'>
        <img
          src={require("./images/floral-background.png")}
          alt='floral-background'
        />
        <div className='list-wrapper'>
          <Header />
          <AddTask />
          <TodoList />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
