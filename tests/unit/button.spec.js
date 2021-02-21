// import { expect } from 'chai' // jest中的断言库

// // import { createApp } from 'vue'

// // import Button from '@/packages/button'
// // import Icon from '@/packages/icon'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     // const container = document.createElement('div')
//     // const app = createApp({
//     //   template: `<pan-button>hello</pan-button>`,
//     //   components: {
//     //     'pan-button': Button
//     //   }
//     // })
//     // app.use(Icon).mount(container)
//   })
// })

import { expect } from 'chai' // jest中的断言库
// import { shallowMount } from '@vue/test-utils' // 当前包目前不兼容vue3

describe('测试用例', () => {
  it('1+1=3吗', () => {
    expect(1 + 1).to.eq(2)
  })
})
