import React, { useReducer } from 'react'
import { GreetingUser } from '../App'

const initialTaskList = [
  {
    id: 1,
    taskName: 'React-router-dom',
    completed: true
  },
  {
    id: 2,
    taskName: 'State and Props',
    completed: false
  },
  {
    id: 3,
    taskName: 'API consumption',
    completed: false
  }
]

const reducer = (state, action) => {
  console.log('dsipatch action reached to reducer function with task:', action.id, action.type)
  switch (action.type) {
    case 'COMPLETE':
      return state.map((task) => {
        if (task.id === action.id) {
          return { ...task, completed: !task.completed }
        }
        else {
          return task
        }
      })
    default: return state
  }
}

const UserDashboard = () => {
  const users = ['Jorden', 'Walke', 'Robin']

  const [taskList, dispatch] = useReducer(reducer, initialTaskList)
  const updateTask = (task) => {
    console.log('update task:', task.id, task.completed)
    dispatch({ type: 'COMPLETE', id: task.id })
  }

  return (
    <>
      <h2>Welcome to User-Dashboard</h2>
      {
        users.map((user, index) => <GreetingUser key={user} name={user} />)
      }
      <p>Today, we are going to learn useReducer hook with the help of an example shown below:</p>
      <p>Please complete the following tasks for the code test.</p>
      <div>
        {taskList.map(task => (
          <div key={task.id}>
            <label>
              <input
                type='checkbox'
                checked={task.completed}
                onChange={() => updateTask(task)} />
              {task.taskName}
            </label>
          </div>
        ))}
      </div>
    </>
  )
}

export default UserDashboard