export class Logger {
  static log(...args: string[]) {
    console.log(...args)
  }

  static warn(...args: string[]) {
    console.warn(...args)
  }

  static error(...args: string[]) {
    console.error(...args)
  }
}