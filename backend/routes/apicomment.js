var express = require('express');
var router = express.Router();
var comments = require('../comment.json');
var count = comments.length;

/* id값에 맞는 comment 배열을 전달 */
router.get('/:id', function(req,res,next) {
    const id = req.params.id;
    // 값을 여러개 찾기위해 filter 사용
    const comment = comments.filter((c) => c.memoId == id);
    console.log(comment);
    res.send(comment);
});

router.post('/', function(req,res,next) {
    const comment = req.body.data.comment;
    //새로 추가할 코멘트의 id 값
    count++;
    //자바스크립트 객체 comment에다가 id 객체 추가
    comment.id = count;

    //전체 코멘트에 추가
    comments.push(comment);
    //특정메모(id)의 코멘트에만 필터
    const commentPush = comments.filter((c) => c.memoId == comment.memoId);
    res.send(commentPush);
});
module.exports = router;
