// @ts-nocheck
import React, { ReactNode } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TaskList, { ITaskList } from './TaskList'
// NOTE story 的组合
import * as TaskStories from '../Task/Task.stories'

export default {
  title: 'Components/TaskList',
  component: TaskList,
  // NOTE 局部装饰器: 为 故事 提供任意包装的方法
  // https://storybook.js.org/docs/react/writing-stories/decorators
  decorators: [(story: () => ReactNode) => <div style={{ padding: '3rem' }}>{story()}</div>],
} as ComponentMeta<typeof TaskList>

const Template: ComponentStory<typeof TaskList> = (args: ITaskList) => <TaskList {...args} />

export const Default = Template.bind({})
Default.args = {
  tasks: [
    { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
    { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
  ],
}

export const WithPinnedTasks = Template.bind({})
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
}

export const Loading = Template.bind({})
Loading.args = {
  tasks: [],
  loading: true,
}

export const Empty = Template.bind({})
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
}
