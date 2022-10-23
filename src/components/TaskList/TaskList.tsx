/*
 * @Description :
 * @Date        : 2022-10-23 23:51:51 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-24 00:31:19 +0800
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

  // FIXME 如何声明类型
  const LoadingRow = (
    <div className='loading-item'>
      <span className='glow-checkbox'></span>
      <span className='glow-text'>
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  )
  if (loading) {
    return (
      <div className='list-items'>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    )
  }

  if (tasks.length === 0) {
    return (
      <div className='list-items'>
        <div className='wrapper-message'>
          <span className='icon-check'></span>
          <div className='title-message'>You have no tasks</div>
          <div className='subtitle-message'>Sit back and relax</div>
        </div>
      </div>
    )
  }
  const tasksInOrder = [
    ...tasks.filter(t => t.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.state !== 'TASK_PINNED'),
  ]
  return (
    <div className='list-items'>
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  )
}

export default TaskList
