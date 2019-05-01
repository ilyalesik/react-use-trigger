var React = require('react')

function useTrigger (trigger) {
  var state = React.useState(trigger.id)

  var update = function () { return state[1](trigger.id) }

  React.useEffect(function () {
    trigger.subscribe(update)
    return function () { return trigger.unsubscribe(update) }
  }, [])

  return state[0]
}

module.exports = useTrigger
