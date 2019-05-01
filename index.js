var nanoid = require('nanoid')

function createTrigger () {
  var trigger = function () {
    trigger.id = nanoid()
    trigger.subscribers.forEach(function (subscriber) {
      subscriber()
    })
  }

  trigger.id = nanoid()
  trigger.subscribers = []

  trigger.subscribe = function (f) {
    trigger.subscribers.push(f)
  }

  trigger.unsubscribe = function (f) {
    trigger.subscribers.indexOf(f) >= 0 &&
    trigger.subscribers.splice(trigger.subscribers.indexOf(f), 1)
  }

  return trigger
}

module.exports = createTrigger
