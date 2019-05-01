var React = require('react')

var useTrigger = require('./useTrigger')

function useTriggerEffect (create, trigger) {
  var triggerValue = useTrigger(trigger)

  React.useEffect(create, [triggerValue])
}

module.exports = useTriggerEffect
