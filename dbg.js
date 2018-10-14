// jshint
/* exported cls, dbg
*/

var dbg
var isDebug = parseInt(window.localStorage.getItem("debug"))

// console.clear() it annoying
var cls = function(){
  "use strict"
  console.clear()
}

if(isDebug){
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

// turn debug on/off in your devtools
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
