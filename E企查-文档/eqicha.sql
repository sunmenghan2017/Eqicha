/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 5.7.1-m11 : Database - eqicha
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`eqicha` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `eqicha`;

/*Table structure for table `bangdan` */

DROP TABLE IF EXISTS `bangdan`;

CREATE TABLE `bangdan` (
  `bangdanid` varchar(20) NOT NULL,
  `bangdanname` varchar(20) NOT NULL,
  `bangdancontent` varchar(100) NOT NULL,
  PRIMARY KEY (`bangdanid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `bangdan` */

/*Table structure for table `collect` */

DROP TABLE IF EXISTS `collect`;

CREATE TABLE `collect` (
  `collectid` varchar(20) NOT NULL,
  `tipstitle` varchar(20) NOT NULL,
  `userid` varchar(20) NOT NULL,
  PRIMARY KEY (`collectid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `collect` */

insert  into `collect`(`collectid`,`tipstitle`,`userid`) values ('ci774723','m123456','u123456'),('ci657372','m123456','u654321');

/*Table structure for table `company` */

DROP TABLE IF EXISTS `company`;

CREATE TABLE `company` (
  `companyid` varchar(20) CHARACTER SET utf8 NOT NULL,
  `companyname` varchar(50) CHARACTER SET utf8 NOT NULL,
  `personname` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `companypos` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `zhiwei` varchar(20) DEFAULT NULL,
  `projectname` varchar(20) DEFAULT NULL,
  `companytel` varchar(20) DEFAULT NULL,
  `companyintro` varchar(100) DEFAULT NULL,
  `companylogo` tinyblob,
  `newsid` varchar(50) DEFAULT NULL,
  `companytime` time(6) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`companyid`,`companyname`)
) ENGINE=MyISAM DEFAULT CHARSET=utf32;

/*Data for the table `company` */

insert  into `company`(`companyid`,`companyname`,`personname`,`companypos`,`zhiwei`,`projectname`,`companytel`,`companyintro`,`companylogo`,`newsid`,`companytime`,`city`) values ('r736234','4.14-4.16','m123456','u123456','0',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('r623647','4.14-4.16','m756742','u123456','0',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('r643257','4.14-4.16','m123456','u654321','0',NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `denglu` */

DROP TABLE IF EXISTS `denglu`;

CREATE TABLE `denglu` (
  `userid` varchar(20) NOT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `denglu` */

insert  into `denglu`(`userid`) values ('u123456'),('u654321');

/*Table structure for table `manager` */

DROP TABLE IF EXISTS `manager`;

CREATE TABLE `manager` (
  `mid` varchar(20) NOT NULL,
  `mname` varchar(20) NOT NULL,
  `mrealname` varchar(20) NOT NULL,
  `msex` char(10) NOT NULL,
  `mtel` varchar(50) NOT NULL,
  `memail` varchar(50) NOT NULL,
  `mpwd` varchar(50) NOT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `manager` */

insert  into `manager`(`mid`,`mname`,`mrealname`,`msex`,`mtel`,`memail`,`mpwd`) values ('m123456','小李','李梦雪','女','62367248','6452376@qq.com','123456'),('m654321','小郑','郑雨露','女','75983747','9868577@qq.com','654321');

/*Table structure for table `news` */

DROP TABLE IF EXISTS `news`;

CREATE TABLE `news` (
  `newsid` varchar(20) NOT NULL,
  `newstitle` varchar(20) NOT NULL,
  `newscontent` varchar(20) NOT NULL,
  `newstime` time(6) NOT NULL,
  `companyname` varchar(50) NOT NULL,
  PRIMARY KEY (`newsid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `news` */

insert  into `news`(`newsid`,`newstitle`,`newscontent`,`newstime`,`companyname`) values ('m123456','小李','李梦雪','00:00:00.000000','62367248'),('m654321','小郑','郑雨露','00:00:00.000000','75983747');

/*Table structure for table `person` */

DROP TABLE IF EXISTS `person`;

CREATE TABLE `person` (
  `personid` varchar(20) NOT NULL,
  `personname` varchar(20) NOT NULL,
  `companyname` varchar(50) NOT NULL,
  `zhiwei` varchar(20) NOT NULL,
  `personintro` varchar(20) NOT NULL,
  `persontel` varchar(20) DEFAULT NULL,
  `ishot` tinyint(1) NOT NULL,
  `projectname` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`personid`,`personname`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `person` */

insert  into `person`(`personid`,`personname`,`companyname`,`zhiwei`,`personintro`,`persontel`,`ishot`,`projectname`) values ('a784657','河北省','u123456','0','石家庄市','新华区',0,NULL),('a734788','河北省','u123456','0','石家庄市','裕华区',0,NULL);

/*Table structure for table `project` */

DROP TABLE IF EXISTS `project`;

CREATE TABLE `project` (
  `projectid` varchar(20) NOT NULL,
  `projectname` varchar(20) NOT NULL,
  `personname` varchar(20) DEFAULT NULL,
  `projectintro` varchar(100) NOT NULL,
  `companyname` varchar(20) NOT NULL,
  PRIMARY KEY (`projectid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `project` */

insert  into `project`(`projectid`,`projectname`,`personname`,`projectintro`,`companyname`) values ('co742637','我就得不好。','u123456','',''),('co463267','我就得不好。','u654321','','');

/*Table structure for table `tips` */

DROP TABLE IF EXISTS `tips`;

CREATE TABLE `tips` (
  `tipsid` varchar(20) NOT NULL,
  `tipstitle` varchar(20) NOT NULL,
  `tipscontent` varchar(20) NOT NULL,
  PRIMARY KEY (`tipsid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `tips` */

insert  into `tips`(`tipsid`,`tipstitle`,`tipscontent`) values ('sa475623','实用券攻略','130'),('sa758538','神价热销榜','0.5'),('sa547657','包包特价','0.92'),('sa746573','防晒美白榜','100'),('sa573656','人气面膜榜','100'),('','','0');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `userid` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `usertel` varchar(50) NOT NULL,
  `userpwd` varchar(50) NOT NULL,
  `userauatar` tinyblob,
  `companyname` varchar(50) DEFAULT NULL,
  `isloading` tinyint(1) NOT NULL,
  `userzhiwei` varchar(20) DEFAULT NULL,
  `tipsid` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`userid`,`username`,`usertel`,`userpwd`,`isloading`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`userid`,`username`,`usertel`,`userpwd`,`userauatar`,`companyname`,`isloading`,`userzhiwei`,`tipsid`) values ('u123456','小黄','123456','123456','����\0JFIF\0\0H\0H\0\0��\0C\0\r	\n\n\r\n\r \' .)10.)-,3:J>36F7,-@WAFLNRSR2>ZaZP`JQRO��\0C&&O5-5OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO��\0��\"\0��\0\0\0\0\0\0\0\0\0\0\0\0\0\0��\0C\0	\0!1AQa\"q�25R��#%T','280',1,NULL,NULL),('u654321','小孙','654321','654321','����\0JFIF\0,,\0\0��\0C\0		\n\r\Z\Z $.\' \",#(7),01444\'9=82<.342��\0C			\r\r2!!22222222222222222222222222222222222222222222222222��\0��\"\0��\0\0\0\0\0\0\0\0\0\0\0\0\0��\0C\0\0\0!1A\"Qaq�2��#B��','0',0,NULL,NULL);

/*Table structure for table `xinzeng` */

DROP TABLE IF EXISTS `xinzeng`;

CREATE TABLE `xinzeng` (
  `xinzengid` varchar(20) NOT NULL,
  `xinzengtitle` varchar(20) NOT NULL,
  `xinzengcontent` varchar(100) NOT NULL,
  PRIMARY KEY (`xinzengid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `xinzeng` */

/*Table structure for table `zhaopin` */

DROP TABLE IF EXISTS `zhaopin`;

CREATE TABLE `zhaopin` (
  `zhaopinid` varchar(20) NOT NULL,
  `zhiwei` varchar(20) NOT NULL,
  `yaoqiu` varchar(100) NOT NULL,
  `companyname` varchar(50) NOT NULL,
  `userid` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`zhaopinid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `zhaopin` */

insert  into `zhaopin`(`zhaopinid`,`zhiwei`,`yaoqiu`,`companyname`,`userid`) values ('m123456','https://liwenroul.gi','100','399',NULL),('m576383','https://liwenroul.gi','200','299',NULL),('m756742','https://liwenroul.gi','100','199',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
