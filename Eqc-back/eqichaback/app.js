var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// 连接数据库
var mysql=require('mysql');
var dbconfig = require('./config/dbconfig.json');
var con = mysql.createConnection(dbconfig);
con.connect();

var app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

var homeRouter = require('./routes/index');
var companygRouter = require('./routes/index');
var editcRouter = require('./routes/index');
var addcRouter = require('./routes/index');
var bangdangRouter = require('./routes/index');
var zhaopingRouter = require('./routes/index');
var projectgRouter = require('./routes/index');
var usergRouter = require('./routes/index');
var collectgRouter = require('./routes/index');
var persongRouter = require('./routes/index');
var newsgRouter = require('./routes/index');
var tipsgRouter = require('./routes/index');
var managergRouter = require('./routes/index');


app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 后台路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/companyG',companygRouter);
app.use('/editC',editcRouter);
app.use('/addC',addcRouter);
app.use('/bangdanG', bangdangRouter);
app.use('/zhaopinG', zhaopingRouter);
app.use('/projectG', projectgRouter);
app.use('/userG', usergRouter);
app.use('/collectG', collectgRouter);
app.use('/personG', persongRouter);
app.use('/newsG', newsgRouter);
app.use('/tipsG', tipsgRouter);
app.use('/managerG', managergRouter);


// user表接口
app.get('/user',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from user',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 
// 用户注册
  app.post('/user1',(req,res)=>{
    let data=req.body;
    console.log(data);
    let insertData = {
      userId:"u"+parseInt(Math.random()*1000000),
      userName:data.username,
      userTel:data.usertel,
      userPassword:data.userpwd,
      userAvatar:"",
      companyName:"",
      userZhiwei:"",
      tipsId:"",
      isloading:0
    }
    con.query('insert into user(userid,username,usertel,userpwd,userauatar,companyname,isloading,userzhiwei,tipsid) values(?,?,?,?,?,?,?,?,?)',
      [insertData.userId, insertData.userName, insertData.userTel, insertData.userPassword, insertData.userAvatar,insertData.companyName,insertData.isloading,insertData.userZhiwei,insertData.tipsId], function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.json(result);
    })
  })
  // app.post('/user2',(req,res)=>{
  //   let data=req.body;
  //   console.log(data);
  //   let upData = {
  //     isloading:data.isloading,
  //     userid:data.userid
  //   }
  //   con.query('update user set isloading=? where userid=?',[upData.isloading,upData.userid],function(err,result){
  //     if(err){
  //           console.log(err);
  //       }
  //         console.log(result);
  //         res.json(result); 
  //   })
  // })
//重置密码
  app.post('/user3',(req,res)=>{
    let data=req.body;
    console.log(data);
    let upData = {
      userpwd:data.userpwd,
      userid:data.userid
    }
    con.query('update user set userpwd=? where userid=?',[upData.userpwd,upData.userid],function(err,result){
      if(err){
            console.log(err);
        }
          console.log(result);
          res.json(result); 
    })
  })
//修改个人信息
  app.post('/user2',(req,res)=>{
    let data=req.body;
    console.log(data);
    let upData = {
      userZhiwei:data.userzhiwei,
      companyName:data.companyname,
      userId:data.userid
    }
    con.query('update user set userzhiwei=? ,companyname=? where userid=?',
    [upData.userZhiwei,upData.companyName,upData.userId],function(err,result){
      if(err){
            console.log(err);
        }
          console.log(result);
          res.json(result); 
    })
  })

  app.post('/user4',(req,res)=>{
    let data=req.body;
    console.log(data);
    let upData = {
      isloading:data.isloading,
      userid:data.userid
    }
    con.query('update user set isloading=? where userid=?',[upData.isloading,upData.userid],function(err,result){
      if(err){
            console.log(err);
        }
          console.log(result);
          res.json(result); 
    })
  })
  app.post('/user',(req,res)=>{
    let data=req.body;
    console.log(data);
          con.query('insert into user(userid) values(?)',[data.userid],function(err,result){
            if(err){
                  console.log(err);
              }else{
                console.log(result);
                res.json(result);
              }
                  
          })
  })




// 公司表接口
app.get('/company',jsonParser,(req,res)=>{
  con.query('select * from company',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 

//查找公司
// app.post('/this_company',function(req,res,next){
//   var search_result = JSON.stringify(req.body.search_Company).slice(1,-1);
//   console.log(search_result);
//     var selectSQL = "select * from company where companyname=?";
//     console.log(selectSQL);
//     con.query(selectSQL,search_result,function(err,result){
//       console.log(result);
//       if(err){
//         console.log(err);
//       }
//       else{
//         res.json(result);
//       }
//     })
//   })

// 人物表接口
app.get('/person',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from person',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 

// 项目表接口
app.get('/project',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from project',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 

// 新闻表接口
app.get('/news',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from news',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 

// tips表接口
app.get('/tips',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from tips',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 

// 新增企业表接口
app.get('/xinzeng',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from xinzeng',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 

// 榜单表接口
app.get('/bangdan',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from bangdan',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 

// 收藏表接口
app.get('/collect',jsonParser,(req,res)=>{
  // console.log(req.body);
  con.query('select * from collect',function(err,result){
      if(err){
          console.log('[SELECT ERROR] - ', err.message);
          return;
      }
      res.json(result); 
  }); 
}) 


// 发布职位
// app.post('/addzhiwei',function(req,res,next){
//   var userid=req.body.userid;
//   var zhiwei= req.body.zhiwei;
//   var yaoqiu=req.body.yaoqiu;
//   var companyname=req.body.companyname;
//   var salary=req.body.salary;
//   con.query("insert into zhaopin(zhaopinid,userid,zhiwei,yaoqiu,companyname,salary) values(?,?,?,?,?,?)",
//   [parseInt((Math.random()*1000)),userid,zhiwei,yaoqiu,companyname,salary],function(err,result){
//     if(err){
//       console.log(err);
//     }
//     else{
//       console.log(result);
//       res.redirect("/mine");
//     }
//   });
// });
















// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
