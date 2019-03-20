/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80013
 Source Host           : localhost
 Source Database       : lechu

 Target Server Type    : MySQL
 Target Server Version : 80013
 File Encoding         : utf-8

 Date: 03/17/2019 16:10:46 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `recipe`
-- ----------------------------
DROP TABLE IF EXISTS `recipe`;
CREATE TABLE `recipe` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL COMMENT '菜谱创建者ID',
  `name` varchar(200) NOT NULL DEFAULT '' COMMENT '菜谱名称',
  `cover` varchar(200) NOT NULL COMMENT '菜谱封面',
  `description` varchar(255) DEFAULT NULL COMMENT '菜谱描述',
  `created_at` bigint(20) NOT NULL COMMENT '菜谱创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `recipe_comment`
-- ----------------------------
DROP TABLE IF EXISTS `recipe_comment`;
CREATE TABLE `recipe_comment` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '菜谱评论ID',
  `user_id` varchar(255) NOT NULL COMMENT '菜谱评论者的用户ID',
  `recipe_id` bigint(20) NOT NULL COMMENT '菜谱ID',
  `content` varchar(255) NOT NULL COMMENT '菜谱评论内容',
  `created_at` bigint(20) NOT NULL COMMENT '菜谱评论创建时间',
  PRIMARY KEY (`id`,`content`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `recipe_step`
-- ----------------------------
DROP TABLE IF EXISTS `recipe_step`;
CREATE TABLE `recipe_step` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '菜谱步骤ID',
  `recipe_id` bigint(20) NOT NULL COMMENT '菜谱ID',
  `description` varchar(255) NOT NULL COMMENT '步骤描述',
  `pic_url` varchar(200) NOT NULL COMMENT '步骤图片地址',
  `order` int(11) NOT NULL COMMENT '步骤数序',
  `created_at` bigint(20) NOT NULL COMMENT '步骤创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `email` varchar(100) DEFAULT '',
  `created_at` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `verify_code`
-- ----------------------------
DROP TABLE IF EXISTS `verify_code`;
CREATE TABLE `verify_code` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(10) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `action` varchar(20) NOT NULL,
  `expired_at` bigint(20) NOT NULL,
  `created_at` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;
