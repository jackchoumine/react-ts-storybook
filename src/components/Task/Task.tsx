/*
 * @Description :
 * @Date        : 2022-10-23 21:43:43 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-23 23:58:30 +0800
 * @LastEditors : JackChou
 */
import React from 'react'

export interface ITask {
  id: string
  title: string
  state?: 'TASK_ARCHIVED' | 'TASK_PINNED'
  updateAt?: Date
}

export interface TaskProps {
  task: ITask
  onArchive?: (id: ITask['id']) => void
  onPin?: (id: ITask['id']) => void
}

const Task: React.FC<TaskProps> = ({ task: { id, title, state }, onArchive, onPin }) => {
  const checked = state === 'TASK_ARCHIVED'
  return (
    <div className={`list-item ${state}`}>
      <label className='checkbox'>
        <input type='checkbox' defaultChecked={checked} name='checkbox' />
        <span className='checkbox-custom' onClick={() => onArchive && onArchive(id)}></span>
      </label>
      <div className='title'>
        <input type='text' value={title} readOnly={true} placeholder='Input title' />
      </div>
      <div className='actions' onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          <a onClick={() => onPin && onPin(id)}>
            <span className='icon-star'></span>
          </a>
        )}
      </div>
    </div>
  )
}

export default Task
