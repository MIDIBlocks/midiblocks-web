/**
 * Handles Interpreter emits
 */
export default (ev) => {
  let emitted = ev.properties
  const $socket = handsfree.plugin.socketConnector

  switch (emitted.event) {
    /**
     * Keyboard
     * @see http://robotjs.io/docs/syntax#keyboard
     */
    // keyTap
    case 'keypress':
      if (window.app.$page.$store.state.settings.isDesktopMode) {
        $socket.sendMessage('keypress', {key: emitted.key})
      } else {
        document.dispatchEvent(new KeyboardEvent('keypress', {key: emitted.key}))
      }
    break

    /**
     * Special/Misc
     */
    case 'toast':
      window.app.$page.$q.notify({
        message: `🔔 ${emitted.$message}`,
        timeout: 3000,
        type: 'positive'
      })
    break
  }
}