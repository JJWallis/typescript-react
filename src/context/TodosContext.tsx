import React, { createContext, Dispatch, useEffect, useReducer } from 'react'
import { Todo, TodoActions } from '../types/App.interface'

export type TodosReducer = (state: Todo[], action: TodoActions) => Todo[]

export const TodosContext = createContext<Todo[] | null>(null)
export const DispatchContext = createContext<Dispatch<TodoActions> | null>(null)

const retrieveTodos = () => {
   const prevTodos = localStorage.getItem('todos')
   return prevTodos ? (JSON.parse(prevTodos) as Todo[]) : []
}

export const TodosProvider = ({
   children,
   reducer,
}: {
   children: React.ReactNode
   reducer: TodosReducer
}) => {
   const [todos, dispatch] = useReducer(reducer, [], retrieveTodos)
   console.log(todos)

   useEffect(
      () => localStorage.setItem('todos', JSON.stringify(todos)),
      [todos]
   )

   return (
      <TodosContext.Provider value={todos}>
         <DispatchContext.Provider value={dispatch}>
            {children}
         </DispatchContext.Provider>
      </TodosContext.Provider>
   )
}
