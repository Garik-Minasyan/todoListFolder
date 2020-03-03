import React from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

const App = ()=> {
   const todoData =[
   {label:'Drink Coffee' ,important:false,id:1},
   {label:'Make Awesome App' ,important:true,id:2},
   {label:'Have a Lanch',important:false,id:3}
   ];
   return(
      <div className='todo-app'> 
         <AppHeader toDo={1} done={3} />
         <div className='top-panel d-flex'>
         <SearchPanel />
         <ItemStatusFilter />
         </div>
         <TodoList todos={todoData} />
         

      </div>
   );
};

export default App;