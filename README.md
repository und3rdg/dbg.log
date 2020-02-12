Leaving console.log messages in production is very unprofessional. What if we can see it in dev mode, but not in production.

You have 3 function's:

    dbg.log()
    dbg.group()
    dbg.groupEnd()
    dbg.table()
    
Use it in same way as standard `console.log()` `console.group()` `console.groupEnd()` and `console.table()` 

Normal user will not see the `dbg` output in console devtools, unless your browser local storage have set item `debug` with value `1`.  

You cat set it by writing directly in your dev tools console: 

    dbg.on()
    dbg.off()
    dbg.toggle()
    
Check status, output to console.log()
    dbg.status()
    
Check status, return bool
    dbg.isDebug

`cls` is console.clear() - it is just less letters for clearing console to save your fingers.

## Installation

Get it from npm 

    npm install dbg.log

or from github

    git clone https://github.com/und3rdg/dbg.log

and place it in your code.
`dbg` and `cls` have to by global variable.

