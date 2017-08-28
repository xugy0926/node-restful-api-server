'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _markdownIt = require('markdown-it');

var _markdownIt2 = _interopRequireDefault(_markdownIt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const md = new _markdownIt2.default();

const router = _express2.default.Router();

router.get('/', function (req, res, next) {
  _fs2.default.readFile(_path2.default.join(__dirname, '../api-doc.md'), 'utf-8', function (err, file) {
    if (err) {
      next();
    } else {
      const content = md.render(file);
      res.render('index', { title: 'api doc', content });
    }
  });
});

module.exports = router;
//# sourceMappingURL=index.js.map