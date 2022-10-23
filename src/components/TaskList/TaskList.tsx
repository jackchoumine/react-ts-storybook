/*
 * @Description :
 * @Date        : 2022-10-23 23:51:51 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-23 23:57:58 +0800
 * @LastEditors : JackChou
 */
import React from 'react'

import Task, { ITask, TaskProps } from '../Task/Task'

export interface ITaskList {
  loading: boolean
  tasks: ITask[]
  onPin: TaskProps['onPin']
  onArchive: TaskProps['onArchive']
}
const TaskList: React.FC<ITaskList> = ({ loading, tasks, onPin, onArchive }) => {
  const events = {
    onPin,
    onArchive,
  }

  if (loading) {
    return <div className='list-items'>loading</div>
  }

  if (tasks.length === 0) {
    return <div className='list-items'>empty</div>
  }

  return (
    <div className='list-items'>
      {tasks.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  )
}

export default TaskList
