/**
 * Logger class for logging informational and error messages.
 */
export default class Logger {
  /**
   * Logs an informational message to the console.
   * @param {string} message - The message to log.
   */
  static logInfo(message) {
    console.info(`[INFO]: ${message}`);
  }

  /**
   * Logs an error message to the console.
   * @param {string} message - The message to log.
   */
  static logError(message) {
    console.error(`[ERROR]: ${message}`);
  }
}
