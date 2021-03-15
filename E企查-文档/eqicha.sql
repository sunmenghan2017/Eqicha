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

insert  into `manager`(`mid`,`mname`,`mrealname`,`msex`,`mtel`,`memail`,`mpwd`) values ('m123456','å°æŽ','æŽæ¢¦é›ª','å¥³','62367248','6452376@qq.com','123456'),('m654321','å°éƒ‘','éƒ‘é›¨éœ²','å¥³','75983747','9868577@qq.com','654321');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `userid` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `usertel` varchar(50) NOT NULL,
  `userpwd` varchar(50) NOT NULL,
  `userauatar` tinyblob,
  `userMon` int(20) DEFAULT NULL,
  `isloading` tinyint(1) NOT NULL,
  PRIMARY KEY (`userid`,`username`,`usertel`,`userpwd`,`isloading`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`userid`,`username`,`usertel`,`userpwd`,`userauatar`,`userMon`,`isloading`) values ('u123456','å°é»„','123456','123456','ÿØÿà\0JFIF\0\0H\0H\0\0ÿÛ\0C\0\r	\n\n\r\n\r \' .)10.)-,3:J>36F7,-@WAFLNRSR2>ZaZP`JQROÿÛ\0C&&O5-5OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOÿÀ\0 î\"\0ÿÄ\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÄ\0C\0	\0!1AQa\"q‘25R’#%T',280,1),('u654321','å°å­™','654321','654321','ÿØÿà\0JFIF\0,,\0\0ÿÛ\0C\0		\n\r\Z\Z $.\' \",#(7),01444\'9=82<.342ÿÛ\0C			\r\r2!!22222222222222222222222222222222222222222222222222ÿÀ\0îô\"\0ÿÄ\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÄ\0C\0\0\0!1A\"Qaq2‘¡#B±Á',0,0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
