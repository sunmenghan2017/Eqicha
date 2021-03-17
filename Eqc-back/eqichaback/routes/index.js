var express = require('express');
var router = express.Router();
// var data=require('../data.json');var List=data.chapterList;
var mysql=require('mysql');
var dbconfig = require('../config/dbconfig.json');
var bodyParser=require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var con = mysql.createConnection(dbconfig);
con.connect();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', function(req, res, next) {
  res.render('login', { title:'E企查后台管理系统' });
});

// 登录验证
router.get('/login', function(req, res, next) {
  var response = {
    "username":req.query.username,
    "pwd":req.query.pwd,
};
var selectSQL = "select mRealName,mPwd from manager where mRealName = '"+req.query.username+"' and mPwd = '"+req.query.pwd+"'";
  con.query(selectSQL,function(err,result){
    if(err){
      console.log(err);
    }
    else if(result==''){
      res.json({ret_code : 1, ret_msg : '用户名密码错误'});// 若登录失败
    }
    else{
        res.redirect('/home');
    }
  });
});

// 首页
router.get('/home', function(req, res, next) {
  console.log('home')
  res.type('html');
  res.render('home', { title:'E企查后台管理系统' });
});

// 项目系统
router.get('/projectg', function(req, res, next) {
  console.log('projectg')
  res.type('html');
  res.render('projectg', { title:'E企查后台管理系统' });
});


module.exports = router;
