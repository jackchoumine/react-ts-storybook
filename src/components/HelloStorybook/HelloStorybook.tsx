/*
 * @Description : 测试 vitest 可用性
 * @Date        : 2022-10-23 23:03:50 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-23 23:08:14 +0800
 * @LastEditors : JackChou
 */
import React from 'react'

const HelloStorybook: React.FC<{ greeting: string }> = ({ greeting }) => {
  return <h1>{greeting}</h1>
}

export default HelloStorybook
