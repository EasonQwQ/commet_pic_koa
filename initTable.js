const fs = require('fs');

const initNameCorv2Name = (name) => {
  const nameArr = name.split('_').map((val, k) => {
    if (k > 0) {
      return val.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
    }
    return val;
  }).join('');
  return nameArr;
};
const initNameConvUpName = (name) => name.split('_').map((val) => val.replace(/( |^)[a-z]/g, (L) => L.toUpperCase())).join('');
const init = () => {
  const className = 'media_check';
  const classNames = `${className}s`;
  const fileName = initNameCorv2Name(className);
  const classUpName = initNameConvUpName(className);
  fs.open(`${__dirname}/models/${fileName}.js`, 'wx+', (err, fd) => {
    if (err) {
      console.log(`文件打开失败 ${__dirname}/schema/${fileName}.js`);
    } else {
      fs.writeFile(fd, 'const db = require(\'../config/db\');\n\n'
      + 'const Sequelize = db.sequelize;\n'
      + `const ${fileName} = Sequelize.import('../schema/${fileName}');\n`
      + `${fileName}.sync({ force: false });\n`
      + `class ${classUpName}Model {\n`
      + '}\n'
      + `module.exports = ${classUpName}Model;\n`, (errr) => {
        if (errr) {
          return console.error(errr);
        }
        return 0;
      });
      fs.close(fd, (erra) => {
        if (err) {
          console.log(erra);
        }
        console.log('文件关闭成功');
      });
    }
  });
  fs.open(`${__dirname}/schema/${fileName}.js`, 'wx+', (err, fd) => {
    if (err) {
      console.log(`文件打开失败 ${__dirname}/schema/${fileName}.js`);
    } else {
      fs.writeFile(fd, 'const moment = require(\'moment\');\n\n'
      + `module.exports = (sequelize, DataTypes) => sequelize.define('${classNames}', {\n`
      + '  name: {\n'
      + '    field: \'name\',\n'
      + '    allowNull: true,\n'
      + '    type: DataTypes.STRING,\n'
      + '  },\n'
      + '});\n', (errr) => {
        if (errr) {
          return console.error(errr);
        }
        return 0;
      });
      fs.close(fd, (erra) => {
        if (err) {
          console.log(erra);
        }
        console.log('文件关闭成功');
      });
    }
  });
  fs.open(`${__dirname}/router/${fileName}.js`, 'wx+', (err, fd) => {
    if (err) {
      console.log(`文件打开失败 ${__dirname}/schema/${fileName}.js`);
    } else {
      fs.writeFile(fd, 'const router = require(\'koa-router\')();\n'
      + `const ${fileName}Controller = require('../controller/${fileName}');\n\n`
      + 'router.post(\'/addChris\', chrisController.add);\n'
      + 'module.exports = router.routes();\n', (errr) => {
        if (errr) {
          return console.error(errr);
        }
        return 0;
      });
      fs.close(fd, (erra) => {
        if (err) {
          console.log(erra);
        }
        console.log('文件关闭成功');
      });
    }
  });
  fs.open(`${__dirname}/controller/${fileName}.js`, 'wx+', (err, fd) => {
    if (err) {
      console.log(`文件打开失败 ${__dirname}/controller/${fileName}.js`);
    } else {
      fs.writeFile(fd, `const ${fileName}Model = require('../models/${fileName}');\n\n`
      + `class ${classUpName}Controller {\n`
      + '}\n'
      + `module.exports = ${classUpName}Controller;\n`, (errr) => {
        if (errr) {
          return console.error(errr);
        }
        return 0;
      });
      fs.close(fd, (erra) => {
        if (err) {
          console.log(erra);
        }
        console.log('文件关闭成功');
      });
    }
  });
};
init();
