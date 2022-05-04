var express = require('express');
var router = express.Router();
var memos = require('../memo.json');
var count = memos.length;

/* 메모리스트를 전달 */
router.get('/', function(req, res, next) {
  res.send(memos);
});

/* 메모를 전달 */
router.get('/:id', function(req,res,next) {
    const id = req.params.id;
    const m = memos.find((memo) => memo.id == id);
    console.log(m);
    res.send(m);
});

router.post('/writeform', function(req,res,next) {
  const memo = req.body.data;
  count++;
  const m = {
    id : count,
    title : memo.title,
    memo : memo.memo,
    writer : memo.writer
  };
  memos.push(m);
  res.send('ok');
});

module.exports = router;
