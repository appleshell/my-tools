class EventEmitter {
  events: any
  constructor() {
    this.events = {}
  }

  // 订阅
  on(name, fn) {
    if (this.events[name]) {
      this.events[name].push(fn)
      return
    }
    this.events[name] = [fn]
  }

  // 取消订阅
  off(name, fn) {
    let tasks = this.events[name] as any[]
    if (!tasks) return

    const i = tasks.findIndex(item => item === fn)

    i > -1 && tasks.splice(i, 1)
  }

  // 触发订阅事件
  emit(name, ...args) {
    const tasks = this.events[name] as any[]
    const tasksList = tasks.slice()
    if (!tasksList) return
    tasksList.forEach(fn => fn(args))
  }
}