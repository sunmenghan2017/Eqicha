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
  res.type('html');
  res.render('login', { title:'E企查后台管理系统' });

});

// 登录验证
router.get('/login', function(req, res, next) {
  res.type('html');
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
  console.log('home');
  res.type('html');
  res.render('home', { title:'E企查后台管理系统' });
});

// 企业系统
router.get('/companyg', function(req, res, next) {
  console.log('companyg')
  res.type('html');
  con.query("select * from company",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("companyg",{company:result,title:'E企查后台管理系统'});
      // console.log(result);
    }
  });
});

// 添加企业
router.get('/addC', function(req, res, next) {
  res.type('html');
  res.render('addC');
});
router.post('/addcompany',function(req,res,next){
  var cname=req.body.cname;
  var cpos= req.body.cpos;
  var cintro=req.body.cintro;
  console.log(req.body.cintro);
  // var cperson=req.body.companyperson;
  // var czhaopin=req.body.companyzhaopin;
  con.query("insert into company(companyid,companyname,companypos,companyintro) values(?,?,?,?)",
  ['c'+parseInt((Math.random()*1000)),cname,cpos,cintro],
  function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
      res.redirect("/companyg");
    }
  });
});

//  删除企业
 router.get('/delcompany',function(req,res,next){
  var cid=req.query.companyid;
  con.query("delete from company where companyid=?",[cid],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
    res.redirect("/companyg");
    }
  });
});
// 编辑企业
router.get('/editC', function(req, res, next) {
  res.type('html');
  var companyid=req.query.companyid;
  con.query("select * from company where companyid=?",[companyid],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log('a');
      // res.type('html');
      res.render('editC',{title:'E企查后台管理系统',editCList:result});
    }
  })
});
router.post('/editCompany',function(req,res,next){
  var cid=req.body.cid;
  var cname=req.body.cname;
  var cpos= req.body.cpos;
  var cintro=req.body.cintro;
  // var cperson=req.body.companyperson;
  // var czhaopin=req.body.companyzhaopin;
  console.log(req.body.cid);
  con.query("update company set companyname=?,companypos=?,companyintro=? where companyid=?",
  [cname,cpos,cintro,cid],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.redirect("/companyg");
    }
  })
})

// 查询企业
router.post('/this_companyg',function(req,res,next){
  var search_result = JSON.stringify(req.body.search_Company).slice(1,-1);
  console.log(search_result);
    var selectSQL = "select * from company where companyname=?";
    console.log(selectSQL);
    con.query(selectSQL,search_result,function(err,result){
      console.log(result);
      if(err){
        console.log(err);
      }
      else{
        res.type('html');
        res.render('companyg',{company:result});
      }
    })
  })

router.get('/bangdang', function(req, res, next) {
  console.log('bangdang')
  res.type('html');
  res.render('bangdang', { title:'E企查后台管理系统' });
});
router.get('/zhaoping', function(req, res, next) {
  console.log('zhaoping')
  res.type('html');
  res.render('zhaoping', { title:'E企查后台管理系统' });
});
router.get('/projectg', function(req, res, next) {
  console.log('projectg')
  res.type('html');
  res.render('projectg', { title:'E企查后台管理系统' });
});
router.get('/userg', function(req, res, next) {
  console.log('userg')
  res.type('html');
  res.render('userg', { title:'E企查后台管理系统' });
});
router.get('/collectg', function(req, res, next) {
  console.log('collectg')
  res.type('html');
  res.render('collectg', { title:'E企查后台管理系统' });
});
router.get('/persong', function(req, res, next) {
  console.log('persong')
  res.type('html');
  res.render('persong', { title:'E企查后台管理系统' });
});
router.get('/newsg', function(req, res, next) {
  console.log('newsg')
  res.type('html');
  res.render('newsg', { title:'E企查后台管理系统' });
});
router.get('/tipsg', function(req, res, next) {
  console.log('tipsg')
  res.type('html');
  res.render('tipsg', { title:'E企查后台管理系统' });
});
router.get('/managerg', function(req, res, next) {
  console.log('managerg')
  res.type('html');
  res.render('managerg', { title:'E企查后台管理系统' });
});

module.exports = router;
