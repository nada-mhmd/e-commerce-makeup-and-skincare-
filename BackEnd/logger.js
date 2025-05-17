const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info', // مستوى الـ logging (info, error, warn...)
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'backend-service' },
  transports: [
    new transports.File({ filename: 'logs/error.log', level: 'error' }), // أخطاء فقط
    new transports.File({ filename: 'logs/combined.log' }) // كل الرسائل
  ],
});

// لو في بيئة تطوير، نطبع في الكونسول كمان:
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(format.colorize(), format.simple()),
  }));
}

module.exports = logger;
