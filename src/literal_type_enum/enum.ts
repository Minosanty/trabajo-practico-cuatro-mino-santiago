enum LogLevel {
  Info = 1,
  Warning,
  Error,
}

function logMessage(level:LogLevel, message: string){
  console.log(`${level} ${message}`)
}

logMessage(LogLevel.Info, "<- este es el indice 1")

