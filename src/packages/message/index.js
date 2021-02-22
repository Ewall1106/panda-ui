import { createApp } from 'vue'
import messageComponent from './message'

const wrapper = document.createElement('div')

let style = {
  position: 'fixed',
  top: '10px',
  left: '50%',
  width: '100px'
}

for (let key in style) {
  wrapper.style[key] = style[key]
}

document.body.appendChild(wrapper)

const Message = options => {
  const messageBox = document.createElement('div')

  let app = createApp(messageComponent, options)
  app.mount(messageBox)
  wrapper.appendChild(messageBox)

  setTimeout(() => {
    app.unmount()
    wrapper.removeChild(messageBox)
  }, options.duration || 2000)
}

let list = ['success', 'info', 'warning']
list.forEach(type => {
  Message[type] = function(options) {
    options.type = type
    return Message(options)
  }
})
export default Message
