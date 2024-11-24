# electron-ipc-logger change log

## 1.1.0

- **Clear messages**: Add a button to clear the logs in the UI Window (`Ctrl + L` / `⌘ + L`) also works when the UI Window is focused
- **Auto scroll messages**: When new IPC messages are logged, the list auto scrolls emulating native behavior. This is, when the following conditions are fulfilled:
  - The messages are sorted for the newest to appear in the bottom
  - No message is selected
  - The scroll is already at the bottom of the list
- **Keyboard shortcuts**: Now it's possible to navigate the messages when the UI Window is focused:
  - `Arrow Up` to go to one message up
  - `Arrow Down` to go to one message down
  - `Page Up` to go to ten messages up
  - `Page Down` to go to ten messages down
  - `Home` to go to the first message
  - `End` to go to the last message
  - `Escape` to close the data panel
- **Return types**: When a IPC method is called via `.invoke()` and it returns data other than `undefined`, it's now visible in the data panel.
- **Optimization**: Every time a new IPC message comes from the main process, only the changed part is sent to the UI Window now (instead of every logged message over time). This should reduce latency after hundreds or thousands of messages have been logged.

## 1.0.0

First usable version
