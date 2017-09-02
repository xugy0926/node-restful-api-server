import express from 'express';
import fs from 'fs';
import path from 'path';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const router = express.Router();

router.get('/', function(req, res, next) {
  fs.readFile(path.join(__dirname, '../api-doc.md'), 'utf-8', function(
    err,
    file
  ) {
    if (err) {
      next();
    } else {
      const content = md.render(file);
      res.render('index', { title: 'api doc', content });
    }
  });
});

module.exports = router;
