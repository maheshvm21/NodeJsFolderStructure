const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, prettyPrint } = format;
const myformat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} :${level}  | ${message} `;
});

const logger = createLogger({
  level: "silly",
  message: "Hey! Log something?",
  format: combine(
    timestamp(),
    format.colorize(),
    myformat
    // prettyPrint(),
  ),
  // defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new transports.Console({ level: "error" }),
    new transports.File({
      filename: "combined.log",
      level: "info",
    }),
  ],
});

// console.log(logger);

module.exports = logger;