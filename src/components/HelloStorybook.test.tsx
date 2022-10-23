/*
 * @Description : 测试 vitest 可用性
 * @Date        : 2022-10-23 23:03:50 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-23 23:16:05 +0800
 * @LastEditors : JackChou
 */
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import HelloStorybook from './HelloStorybook'

describe('HelloStorybook test', () => {
  test('vitest 可用性测试', () => {
    render(<HelloStorybook greeting='hello storybook'></HelloStorybook>)
    expect(screen.getByText(/hello storybook/)).toBeDefined()
  })
})
