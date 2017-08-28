'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _learnJS = require('../controllers/learnJS');

var learnJS = _interopRequireWildcard(_learnJS);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

// course
router.get('/learnJS/course/:id/detail', learnJS.courseInfo);
router.get('/learnJS/course/:id/catelog', learnJS.catelog);
router.put('/learnJS/course/:id/catelog', learnJS.updateCatelog);
router.get('/learnJS/course/:id/words', learnJS.words);
router.put('/learnJS/course/:id/words', learnJS.updateWords);
router.get('/learnJS/course/:id/homework', learnJS.homeworkInfo);
router.get('/learnJS/course/:id/homework/:number', learnJS.homework);
router.put('/learnJS/course/:id/homework/:number', learnJS.updateHomework);

exports.default = router;
//# sourceMappingURL=api.js.map