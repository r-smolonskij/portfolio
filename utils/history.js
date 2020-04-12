// let history

// if (typeof document !== 'undefined') {
//   const createBrowserHistory = require("history").createBrowserHistory.default;

//   history = createBrowserHistory();
// }

// not using an ES6 transpiler
import { createHistory } from 'history'
let history;

history = require('history').createHistory;

export default history