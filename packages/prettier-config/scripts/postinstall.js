'use strict'

const fs = require('fs')
const path = require('path')

const filePath = path.join(process.env.INIT_CWD, '.prettierrc.json')

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, `module.exports = "@nghiatv/prettier-config"`);
  }