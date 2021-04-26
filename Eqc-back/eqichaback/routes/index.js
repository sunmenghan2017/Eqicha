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

// 企业系统企业系统企业系统企业系统企业系统企业系统企业系统企业系统企业系统企业系统企业系统企业系统
  // 企业管理
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
    var ctime= req.body.ctime;
    var ccity= req.body.ccity;
    var cintro=req.body.cintro;
    var cperson= req.body.cperson;
    var czhiwei= req.body.czhiwei;
    var cproject= req.body.cproject;
    var ctel=req.body.ctel;
    console.log(req.body.cintro);
    // var cperson=req.body.companyperson;
    // var czhaopin=req.body.companyzhaopin;
    con.query("insert into company(companyid,companyname,companypos,companytime,city,companyintro,personname,zhiwei,projectname,companytel) values(?,?,?,?,?,?,?,?,?,?)",
    ['c'+parseInt((Math.random()*1000)),cname,cpos,ctime,ccity,cintro,cperson,czhiwei,cproject,ctel],
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
  // 删除企业
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
    var ctime= req.body.ctime;
    var ccity= req.body.ccity;
    var cintro=req.body.cintro;
    var cperson= req.body.cperson;
    var czhiwei= req.body.czhiwei;
    var cproject= req.body.cproject;
    var ctel=req.body.ctel;
    console.log(req.body.cid);
    // var cperson=req.body.companyperson;
    // var czhaopin=req.body.companyzhaopin;
    con.query("update company set companyname=?,companypos=?,companytime=?,city=?,companyintro=?,personname=?,zhiwei=?,projectname=?,companytel=? where companyid=?",
    [cname,cpos,ctime,ccity,cintro,cperson,czhiwei,cproject,ctel,cid],
    function(err,result){
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

// 榜单管理
  router.get('/bangdang', function(req, res, next) {
    console.log('bangdang')
    res.type('html');
    con.query("select * from bangdan",function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.render("bangdang",{bangdan:result,title:'E企查后台管理系统'});
        // console.log(result);
      }
    });

  });
  // 添加榜单
  router.get('/addB', function(req, res, next) {
    res.type('html');
    res.render('addB');
  });
  router.post('/addbangdan',function(req,res,next){
    var bname=req.body.bname;
    var bcontent= req.body.bcontent;
    var bintro= req.body.bintro;
    console.log(req.body.cintro);
    // var cperson=req.body.companyperson;
    // var czhaopin=req.body.companyzhaopin;
    con.query("insert into bangdan(bangdanid,bangdanname,bangdancontent,bangdanintro) values(?,?,?,?)",
    ['b'+parseInt((Math.random()*1000)),bname,bcontent,bintro],
    function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.redirect("/bangdang");
      }
    });
  });
  //  删除榜单
  router.get('/delbangdan',function(req,res,next){
    var bid=req.query.bangdanid;
    con.query("delete from bangdan where bangdanid=?",[bid],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      res.redirect("/bangdang");
      }
    });
  });
  // 编辑榜单
  router.get('/editB', function(req, res, next) {
    res.type('html');
    var bangdanid=req.query.bangdanid;
    con.query("select * from bangdan where bangdanid=?",[bangdanid],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log('a');
        // res.type('html');
        res.render('editB',{title:'E企查后台管理系统',editBList:result});
      }
    })
  });
  router.post('/editBangdan',function(req,res,next){
    var bid=req.body.bid;
    var bname=req.body.bname;
    var bcontent= req.body.bcontent;
    var bintro=req.body.bintro;
    console.log(req.body.bid);
    // var cperson=req.body.companyperson;
    // var czhaopin=req.body.companyzhaopin;
    con.query("update bangdan set bangdanname=?,bangdancontent=?,bangdanintro=? where bangdanid=?",
    [bname,bcontent,bintro,bid],
    function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.redirect("/bangdang");
      }
    })
  })
  // 查询榜单
  router.post('/this_bangdang',function(req,res,next){
    var search_result = JSON.stringify(req.body.search_Bangdan).slice(1,-1);
    console.log(search_result);
      var selectSQL = "select * from bangdan where bangdanname=?";
      console.log(selectSQL);
      con.query(selectSQL,search_result,function(err,result){
        console.log(result);
        if(err){
          console.log(err);
        }
        else{
          res.type('html');
          res.render('bangdang',{bangdan:result});
        }
      })
    })

// 招聘系统
  router.get('/zhaoping', function(req, res, next) {
    console.log('zhaoping')
    res.type('html');
    con.query("select * from zhaopin",function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.render("zhaoping",{zhaopin:result,title:'E企查后台管理系统'});
        // console.log(result);
      }
    });
  });
  // 添加招聘
  router.get('/addZ', function(req, res, next) {
    res.type('html');
    res.render('addZ');
  });
  router.post('/addzhaopin',function(req,res,next){
    var zhiwei=req.body.zhiwei;
    var yaoqiu= req.body.yaoqiu;
    var companyname= req.body.companyname;
    var userid= req.body.userid;
    var salary= req.body.salary;
    var zhaopintel= req.body.zhaopintel;
    var zhaopinpos= req.body.zhaopinpos;
    con.query("insert into zhaopin(zhaopinid,zhiwei,yaoqiu,companyname,userid,salary,zhaopintel,zhaopinpos) values(?,?,?,?,?,?,?,?)",
    ['z'+parseInt((Math.random()*1000)),zhiwei,yaoqiu,companyname,userid,salary,zhaopintel,zhaopinpos],
    function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.redirect("/zhaoping");
      }
    });
  });
  //  删除招聘
  router.get('/delzhaopin',function(req,res,next){
    var zid=req.query.zhaopinid;
    con.query("delete from zhaopin where zhaopinid=?",[zid],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      res.redirect("/zhaoping");
      }
    });
  });
  // 编辑招聘
  router.get('/editZ', function(req, res, next) {
    res.type('html');
    var zhaopinid=req.query.zhaopinid;
    con.query("select * from zhaopin where zhaopinid=?",[zhaopinid],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log('a');
        // res.type('html');
        res.render('editZ',{title:'E企查后台管理系统',editZList:result});
      }
    })
  });
  router.post('/editZhaopin',function(req,res,next){
    var zid=req.body.zid;
    var zhiwei=req.body.zhiwei;
    var yaoqiu= req.body.yaoqiu;
    var companyname= req.body.companyname;
    var userid= req.body.userid;
    var salary= req.body.salary;
    var zhaopintel= req.body.zhaopintel;
    var zhaopinpos= req.body.zhaopinpos;
    console.log(req.body.zid);
    con.query("update zhaopin set zhiwei=?,yaoqiu=?,companyname=?,userid=?,salary=?,zhaopintel=?,zhaopinpos=? where zhaopinid=?",
    [zhiwei,yaoqiu,companyname,userid,salary,zhaopintel,zhaopinpos,zid],
    function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.redirect("/zhaoping");
      }
    })
  })
  // 查询招聘
  router.post('/this_zhaoping',function(req,res,next){
    var search_result = JSON.stringify(req.body.search_Zhaopin).slice(1,-1);
    console.log(search_result);
      var selectSQL = "select * from zhaopin where companyname=?";
      console.log(selectSQL);
      con.query(selectSQL,search_result,function(err,result){
        console.log(result);
        if(err){
          console.log(err);
        }
        else{
          res.type('html');
          res.render('zhaoping',{zhaopin:result});
        }
      })
    })

// 项目管理
  router.get('/projectg', function(req, res, next) {
    console.log('projectg')
    res.type('html');
    con.query("select * from project",function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.render("projectg",{project:result,title:'E企查后台管理系统'});
        // console.log(result);
      }
    });
  });
  // 添加项目
  router.get('/addPro', function(req, res, next) {
    res.type('html');
    res.render('addPro');
  });
  router.post('/addproject',function(req,res,next){
    var projectname=req.body.proname;
    var personname= req.body.pername;
    var companyname= req.body.companyname;
    var projectintro= req.body.prointro;
    console.log(projectintro);
    con.query("insert into project(projectid,projectname,personname,projectintro,companyname) values(?,?,?,?,?)",
    ['pro'+parseInt((Math.random()*1000)),projectname,personname,projectintro,companyname],
    function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.redirect("/projectg");
      }
    });
  });
  //  删除项目
  router.get('/delproject',function(req,res,next){
    var proid=req.query.projectid;
    con.query("delete from project where projectid=?",[proid],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      res.redirect("/projectg");
      }
    });
  });
  // 编辑项目
  router.get('/editPro', function(req, res, next) {
    res.type('html');
    var projectid=req.query.projectid;
    con.query("select * from project where projectid=?",[projectid],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log('a');
        // res.type('html');
        res.render('editPro',{title:'E企查后台管理系统',editProList:result});
      }
    })
  });
  router.post('/editProject',function(req,res,next){
    var proid=req.body.proid;
    var proname=req.body.proname;
    var pername= req.body.pername;
    var prointro= req.body.prointro;
    var companyname= req.body.companyname;
    console.log(req.body.proid);
    con.query("update project set projectname=?,personname=?,projectintro=?,companyname=? where projectid=?",
    [proname,pername,prointro,companyname,proid],
    function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.redirect("/projectg");
      }
    })
  })
  // 查询项目
  router.post('/this_projectg',function(req,res,next){
    var search_result = JSON.stringify(req.body.search_Project).slice(1,-1);
    console.log(search_result);
      var selectSQL = "select * from project where projectname=?";
      console.log(selectSQL);
      con.query(selectSQL,search_result,function(err,result){
        console.log(result);
        if(err){
          console.log(err);
        }
        else{
          res.type('html');
          res.render('projectg',{project:result});
        }
      })
  })

// 用户系统用户系统用户系统用户系统用户系统用户系统用户系统用户系统用户系统用户系统用户系统
// 用户管理
  router.get('/userg', function(req, res, next) {
    console.log('userg')
    res.type('html');
    con.query("select * from user",function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.render("userg",{user:result,title:'E企查后台管理系统'});
        // console.log(result);
      }
    });
  });
  // 添加用户
  router.get('/addU', function(req, res, next) {
    res.type('html');
    res.render('addU');
  });
  router.post('/adduser',function(req,res,next){
    var uname=req.body.uname;
    var companyname= req.body.cname;
    var urauatar= req.body.urauatar;
    var utel= req.body.utel;
    var isloading= req.body.isloading;
    var upwd= req.body.upwd;
    var uzhiwei= req.body.uzhiwei;
    var tipsid= req.body.tid;
    console.log(uname);
    con.query("insert into user(userid,username,usertel,userpwd,companyname,isloading,userzhiwei,tipsid) values(?,?,?,?,?,?,?,?)",
    ['u'+parseInt((Math.random()*1000)),uname,utel,upwd,companyname,isloading,uzhiwei,tipsid],
    function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.redirect("/userg");
      }
    });
  });
  //  删除用户
  router.get('/deluser',function(req,res,next){
    var uid=req.query.userid;
    con.query("delete from user where userid=?",[uid],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      res.redirect("/userg");
      }
    });
  });
  // 编辑用户
  router.get('/editU', function(req, res, next) {
    res.type('html');
    var uid=req.query.userid;
    con.query("select * from user where userid=?",[uid],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log('a');
        // res.type('html');
        res.render('editU',{title:'E企查后台管理系统',editUList:result});
      }
    })
  });
  router.post('/editUser',function(req,res,next){
    var uid=req.body.uid;
    var uname=req.body.uname;
    var companyname= req.body.cname;
    var utel= req.body.utel;
    var isloading= req.body.isloading;
    var upwd= req.body.upwd;
    var uzhiwei= req.body.uzhiwei;
    var tipsid= req.body.tid;
    console.log(req.body.uid);
    con.query("update user set username=?,usertel=?,userpwd=?,companyname=?,isloading=?,userzhiwei=?,tipsid=? where userid=?",
    [uname,utel,upwd,companyname,isloading,uzhiwei,tipsid,uid],
    function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.redirect("/userg");
      }
    })
  })
  // 查询用户
  router.post('/this_userg',function(req,res,next){
    var search_result = JSON.stringify(req.body.search_User).slice(1,-1);
    console.log(search_result);
      var selectSQL = "select * from user where username=?";
      console.log(selectSQL);
      con.query(selectSQL,search_result,function(err,result){
        console.log(result);
        if(err){
          console.log(err);
        }
        else{
          res.type('html');
          res.render('userg',{user:result});
        }
      })
  })

// 收藏管理
  router.get('/collectg', function(req, res, next) {
    console.log('collectg')
    res.type('html');
    con.query("select * from collect",function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.render("collectg",{collect:result,title:'E企查后台管理系统'});
        // console.log(result);
      }
    });
  });
  // 添加收藏
  router.get('/addCo', function(req, res, next) {
    res.type('html');
    res.render('addCo');
  });
  router.post('/addcollect',function(req,res,next){
    var tid=req.body.tid;
    var uid= req.body.uid;
    var ttitle= req.body.ttitle;
    var tcontent= req.body.tcontent;
   
    con.query("insert into collect(collectid,tipsid,userid,tipstitle,tipscontent) values(?,?,?,?,?)",
    ['co'+parseInt((Math.random()*1000)),tid,uid,ttitle,tcontent],
    function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.redirect("/collectg");
      }
    });
  });
  //  删除收藏
  router.get('/delcollect',function(req,res,next){
    var coid=req.query.collectid;
    con.query("delete from collect where collectid=?",[coid],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      res.redirect("/collectg");
      }
    });
  });
  // 编辑收藏
  router.get('/editCo', function(req, res, next) {
    res.type('html');
    var coid=req.query.collectid;
    con.query("select * from collect where collectid=?",[coid],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log('a');
        // res.type('html');
        res.render('editCo',{title:'E企查后台管理系统',editCoList:result});
      }
    })
  });
  router.post('/editCollect',function(req,res,next){
    var coid=req.body.coid;
    var tid=req.body.tid;
    var uid= req.body.uid;
    var ttitle= req.body.ttitle;
    var tcontent= req.body.tcontent;
    console.log(req.body.nid);
    con.query("update collect set tipsid=?,userid=?,tipstitle=?,tipscontent=? where collectid=?",
    [tid,uid,ttitle,tcontent,coid],
    function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.redirect("/collectg");
      }
    })
  })
  // 查询收藏
  router.post('/this_collectg',function(req,res,next){
    var search_result = JSON.stringify(req.body.search_Collect).slice(1,-1);
    console.log(search_result);
      var selectSQL = "select * from collect where userid=?";
      console.log(selectSQL);
      con.query(selectSQL,search_result,function(err,result){
        console.log(result);
        if(err){
          console.log(err);
        }
        else{
          res.type('html');
          res.render('collectg',{collect:result});
        }
      })
  })


// 人物系统人物系统人物系统人物系统人物系统人物系统人物系统人物系统人物系统人物系统人物系统人物系统人物系统人物系统人物系统人物系统
// 人物管理
  router.get('/persong', function(req, res, next) {
    console.log('persong')
    res.type('html');
    con.query("select * from person",function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.render("persong",{person:result,title:'E企查后台管理系统'});
        // console.log(result);
      }
    });
  });
  // 添加人物
  router.get('/addPer', function(req, res, next) {
    res.type('html');
    res.render('addPer');
  });
  router.post('/addperson',function(req,res,next){
    var pername=req.body.pername;
    var cname= req.body.companyname;
    var zhiwei= req.body.zhiwei;
    var perintro= req.body.perintro;
    var ishot= req.body.ishot;
    var pertel= req.body.pertel;
    var proname= req.body.projectname;
    
    con.query("insert into person(personid,personname,companyname,zhiwei,personintro,ishot,persontel,projectname) values(?,?,?,?,?,?,?,?)",
    ['per'+parseInt((Math.random()*1000)),pername,cname,zhiwei,perintro,ishot,pertel,proname],
    function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.redirect("/persong");
      }
    });
  });
  //  删除人物
  router.get('/delperson',function(req,res,next){
    var perid=req.query.personid;
    con.query("delete from person where personid=?",[perid],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      res.redirect("/persong");
      }
    });
  });
  // 编辑人物
  router.get('/editPer', function(req, res, next) {
    res.type('html');
    var personid=req.query.personid;
    con.query("select * from person where personid=?",[personid],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log('a');
        // res.type('html');
        res.render('editPer',{title:'E企查后台管理系统',editPerList:result});
      }
    })
  });
  router.post('/editPerson',function(req,res,next){
    var perid=req.body.perid;
    var pername=req.body.pername;
    var cname= req.body.companyname;
    var zhiwei= req.body.zhiwei;
    var perintro= req.body.perintro;
    var ishot= req.body.ishot;
    var pertel= req.body.pertel;
    var proname= req.body.proname;
    
    con.query("update person set personname=?,companyname=?,zhiwei=?,personintro=?,persontel=?,ishot=?,projectname=? where personid=?",
    [pername,cname,zhiwei,perintro,pertel,ishot,proname,perid],
    function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.redirect("/persong");
      }
    })
  })
  // 查询人物
  router.post('/this_persong',function(req,res,next){
    var search_result = JSON.stringify(req.body.search_Person).slice(1,-1);
    console.log(search_result);
      var selectSQL = "select * from person where personname=?";
      console.log(selectSQL);
      con.query(selectSQL,search_result,function(err,result){
        console.log(result);
        if(err){
          console.log(err);
        }
        else{
          res.type('html');
          res.render('persong',{person:result});
        }
      })
  })


// 资讯系统资讯系统资讯系统资讯系统资讯系统资讯系统资讯系统资讯系统资讯系统资讯系统资讯系统资讯系统资讯系统资讯系统资讯系统资讯系统资讯系统
// 新闻管理
  router.get('/newsg', function(req, res, next) {
    console.log('newsg')
    res.type('html');
    con.query("select * from news",function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.render("newsg",{news:result,title:'E企查后台管理系统'});
        // console.log(result);
      }
    });
  });
  // 添加新闻
  router.get('/addN', function(req, res, next) {
    res.type('html');
    res.render('addN');
  });
  router.post('/addnews',function(req,res,next){
    var ntitle=req.body.ntitle;
    var ncontent= req.body.ncontent;
    var ntime= req.body.ntime;
    var cname= req.body.cname;
    con.query("insert into news(newsid,newstitle,newscontent,newstime,companyname) values(?,?,?,?,?)",
    ['n'+parseInt((Math.random()*1000)),ntitle,ncontent,ntime,cname],
    function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.redirect("/newsg");
      }
    });
  });
  //  删除新闻
  router.get('/delnews',function(req,res,next){
    var nid=req.query.newsid;
    con.query("delete from news where newsid=?",[nid],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      res.redirect("/newsg");
      }
    });
  });
  // 编辑新闻
  router.get('/editN', function(req, res, next) {
    res.type('html');
    var newsid=req.query.newsid;
    con.query("select * from news where newsid=?",[newsid],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log('a');
        // res.type('html');
        res.render('editN',{title:'E企查后台管理系统',editNList:result});
      }
    })
  });
  router.post('/editNews',function(req,res,next){
    var nid=req.body.nid;
    var ntitle=req.body.ntitle;
    var ncontent= req.body.ncontent;
    var ntime= req.body.ntime;
    var cname= req.body.cname;
    console.log(nid);
    con.query("update news set newstitle=?,newscontent=?,newstime=?,companyname=? where newsid=?",
    [ntitle,ncontent,ntime,cname,nid],
    function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.redirect("/newsg");
      }
    })
  })
  // 查询新闻
  router.post('/this_newsg',function(req,res,next){
    var search_result = JSON.stringify(req.body.search_News).slice(1,-1);
    console.log(search_result);
      var selectSQL = "select * from news where newstitle=?";
      console.log(selectSQL);
      con.query(selectSQL,search_result,function(err,result){
        console.log(result);
        if(err){
          console.log(err);
        }
        else{
          res.type('html');
          res.render('newsg',{news:result});
        }
      })
  })

// Tips管理
  router.get('/tipsg', function(req, res, next) {
    console.log('tipsg')
    res.type('html');
    con.query("select * from tips",function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.render("tipsg",{tips:result,title:'E企查后台管理系统'});
        // console.log(result);
      }
    });
  });
  // 添加Tips
  router.get('/addT', function(req, res, next) {
    res.type('html');
    res.render('addT');
  });
  router.post('/addtips',function(req,res,next){
    var ttitle= req.body.ttitle;
    var tcontent= req.body.tcontent;
    con.query("insert into tips(tipsid,tipstitle,tipscontent) values(?,?,?)",
    ['t'+parseInt((Math.random()*1000)),ttitle,tcontent],
    function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.redirect("/tipsg");
      }
    });
  });
  //  删除Tips
  router.get('/deltips',function(req,res,next){
    var tid=req.query.tipsid;
    con.query("delete from tips where tipsid=?",[tid],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      res.redirect("/tipsg");
      }
    });
  });
  // 编辑Tips
  router.get('/editT', function(req, res, next) {
    res.type('html');
    var tid=req.query.tipsid;
    con.query("select * from tips where tipsid=?",[tid],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log('a');
        // res.type('html');
        res.render('editT',{title:'E企查后台管理系统',editTList:result});
      }
    })
  });
  router.post('/editTips',function(req,res,next){
    var tid=req.body.tid;
    var ttitle= req.body.ttitle;
    var tcontent= req.body.tcontent;
    con.query("update tips set tipstitle=?,tipscontent=? where tipsid=?",
    [ttitle,tcontent,tid],
    function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.redirect("/tipsg");
      }
    })
  })
  // 查询Tips
  router.post('/this_tipsg',function(req,res,next){
    var search_result = JSON.stringify(req.body.search_Tips).slice(1,-1);
    console.log(search_result);
      var selectSQL = "select * from tips where tipstitle=?";
      console.log(selectSQL);
      con.query(selectSQL,search_result,function(err,result){
        console.log(result);
        if(err){
          console.log(err);
        }
        else{
          res.type('html');
          res.render('tipsg',{tips:result});
        }
      })
  })


// 管理员管理
  router.get('/managerg', function(req, res, next) {
    console.log('managerg')
    res.type('html');
    con.query("select * from manager",function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.render("managerg",{manager:result,title:'E企查后台管理系统'});
        // console.log(result);
      }
    });
  });
  // 添加管理员
  router.get('/addM', function(req, res, next) {
    res.type('html');
    res.render('addM');
  });
  router.post('/addmanager',function(req,res,next){
    var mname=req.body.mname;
    var mrealname= req.body.mrealname;
    var msex= req.body.msex;
    var mtel= req.body.mtel;
    var memail= req.body.memail;
    var mpwd= req.body.mpwd;
    console.log(mname);
    con.query("insert into manager(mid,mname,mrealname,msex,mtel,memail,mpwd) values(?,?,?,?,?,?,?)",
    ['m'+parseInt((Math.random()*1000)),mname,mrealname,msex,mtel,memail,mpwd],
    function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.redirect("/managerg");
      }
    });
  });
  //  删除管理员
  router.get('/delmanager',function(req,res,next){
    var mid=req.query.mid;
    con.query("delete from manager where mid=?",[mid],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      res.redirect("/managerg");
      }
    });
  });
  // 编辑管理员
  router.get('/editM', function(req, res, next) {
    res.type('html');
    var mid=req.query.mid;
    con.query("select * from manager where mid=?",[mid],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log('a');
        // res.type('html');
        res.render('editM',{title:'E企查后台管理系统',editMList:result});
      }
    })
  });
  router.post('/editManager',function(req,res,next){
    var mid=req.body.mid;
    var mname=req.body.mname;
    var mrealname= req.body.mrealname;
    var msex= req.body.msex;
    var mtel= req.body.mtel;
    var memail= req.body.memail;
    var mpwd= req.body.mpwd;
    console.log(req.body.proid);
    con.query("update manager set mname=?,mrealname=?,msex=?,mtel=?,memail=?,mpwd=? where mid=?",
    [mname,mrealname,msex,mtel,memail,mpwd,mid],
    function(err,result){
      if(err){
        console.log(err);
      }
      else{
        res.redirect("/managerg");
      }
    })
  })
  // 查询管理员
  router.post('/this_managerg',function(req,res,next){
    var search_result = JSON.stringify(req.body.search_Manager).slice(1,-1);
    console.log(search_result);
      var selectSQL = "select * from manager where mrealname=?";
      console.log(selectSQL);
      con.query(selectSQL,search_result,function(err,result){
        console.log(result);
        if(err){
          console.log(err);
        }
        else{
          res.type('html');
          res.render('managerg',{manager:result});
        }
      })
  })

module.exports = router;
