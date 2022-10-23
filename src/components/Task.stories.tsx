/*
 * @Description :
 * @Date        : 2022-10-23 21:43:43 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-23 22:07:55 +0800
 * @LastEditors : JackChou
 */
import React from 'react'
import type { Props, ITask } from './Task'
import Task from './Task'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Task',
  component: Task,
} as ComponentMeta<typeof Task>

const Template: ComponentStory<typeof Task> = (args: Props) => <Task {...args} />

export const Default = Template.bind({})

const defaultTask: ITask = {
  title: 'Task',
  id: '1',
  state: '',
}
Default.args = {
  task: defaultTask,
}

export const Pinned = Template.bind({})
Pinned.args = {
  task: {
    ...Default.args.task,
    id: '2',
    state: 'TASK_PINNED',
    // FIXME 除了类型推断，还是其他办法吗？
  } as ITask,
}

export const Archived = Template.bind({})
Archived.args = {
  task: {
    ...Default.args.task,
    id: '3',
    state: 'TASK_ARCHIVED',
  } as ITask,
}
