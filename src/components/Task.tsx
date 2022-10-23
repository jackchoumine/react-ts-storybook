/*
 * @Description :
 * @Date        : 2022-10-23 21:43:43 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-23 22:06:35 +0800
 * @LastEditors : JackChou
 */
import React from 'react'

export interface ITask {
  id: string
  title: string
  state?: 'TASK_ARCHIVED' | 'TASK_PINNED' | ''
  updateAt?: Date
}

export interface Props {
  task: ITask
  onArchive?: (task: ITask) => void
  onPinTask?: (task: ITask) => void
}

const Task: React.FC<Props> = ({ task: { title }, onArchive, onPinTask }) => {
  return (
    <div className='list-item'>
      <input type='text' value={title} readOnly={true} />
    </div>
  )
}

export default Task
