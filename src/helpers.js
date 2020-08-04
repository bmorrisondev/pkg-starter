exports.parseArgs = function () {
  let args = {}
  for (let i = 2; i < process.argv.length; i++) {
    let theArg = process.argv[i].split('=')
    if(theArg[0].startsWith('--')) {
      let argName = theArg[0].substring(2)
      if(theArg[1]) {
        args[argName] = theArg[1]
      } else {
        args[argName] = true
      }
    }
  }
  return args
}