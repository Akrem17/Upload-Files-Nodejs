var express = require('express');
var router = express.Router();
const multiparty = require('multiparty');
var multer = require('multer');

const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'images')
  },
  filename:(req,file,cb)=>{
    cb(null,Date.now()+file.originalname)
  }
})
const fileFilter=(req,file,cb)=>{
  if(file.mimetype==='image/jpeg' || file.mimetype ==='image/png'){
    cb(null,true);

  }else{
    cb(new Error('file type not acceptble '),false);

  }
}
var upload=multer({
  storage:storage,
  limits:{fileSize: 1024*1024*5},
  fileFilter:fileFilter

});
/* GET users listing. */
router.post('/',upload.single('image'), function(req, res, next) {
  console.log(req.file)



 
console.log(req.body)
  res.status(200)
});

module.exports = router;
