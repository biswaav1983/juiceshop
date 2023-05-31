"use strict";
/*
 * Copyright (c) 2014-2023 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
module.exports = winston.createLogger({
    transports: [
        new winston.transports.Console({ level: process.env.NODE_ENV === 'test' ? 'error' : 'info' })
    ],
    format: winston.format.simple()
});
//# sourceMappingURL=logger.js.map