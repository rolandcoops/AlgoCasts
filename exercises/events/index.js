// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor () {
    this._events = {}
  }
  // Register an event handler
  on(eventName, callback) {
    if (!this._events[eventName]) this._events[eventName] = []
    
    this._events[eventName].push(callback)
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (!this._events[eventName]) return false

    for (let callback of this._events[eventName]) callback()
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this._events[eventName] = null
  }
}

module.exports = Events;
