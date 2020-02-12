// jshint
/* exported cls, dbg
*/
/* 
 * ************************************************** 
 * Use it in same way as console.log / group / table
 * Normal user will not see output in console devtools, unless 
 * in your browser local storage is set item `debug` with value `1`.
 * You cat set it by dbg.on(), dbg.off(), dbg.toggle() directly
 * from your dev tools console.
 * **************************************************
 */

var dbg
dbg.isDebug = parseInt(window.localStorage.getItem("debug"))

// finger saver - console.clear() is annoying
var cls = function(){
  "use strict"
  console.clear()
}

if(dbg.isDebug){
  dbg          = console.log
  dbg.group    = console.group
  dbg.groupEnd = console.groupEnd
  dbg.table    = console.table
} else {
  dbg          = function() {}
  dbg.group    = function() {}
  dbg.groupEnd = function() {}
  dbg.table    = function() {}
}

// turn debug on/off in your devtools console
dbg.on = function() {
  "use strict"
  console.log("%c debuging mode ON", "background: green; color: white")
  window.localStorage.setItem("debug", 1)
  isDebug = 1
}

dbg.off = function() {
  "use strict"
  console.log("%c debuging mode OFF", "background: red; color: white")
  window.localStorage.setItem("debug", 0)
  isDebug = 0
}

dbg.toggle = function() {
  "use strict"
  switch (isDebug) {
    case 1:
      dbg.off()
      break;
    default:
      dbg.on()
  }
}

dbg.status = function() {
  "use strict"
  if(dbg.isDebug) {
    console.log("%c debuging mode ON", "background: green; color: white")
  } else {
      console.log("%c debuging mode OFF", "background: red; color: white")
  }
}

global.dbg = dbg
