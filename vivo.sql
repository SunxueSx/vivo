/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : vivo

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2020-08-30 17:19:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `banner`
-- ----------------------------
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `img` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banner
-- ----------------------------
INSERT INTO `banner` VALUES ('1', './images/banner/banner1.png');
INSERT INTO `banner` VALUES ('2', './images/banner/banner2.png');
INSERT INTO `banner` VALUES ('3', './images/banner/banner3.png');
INSERT INTO `banner` VALUES ('4', './images/banner/banner4.png');

-- ----------------------------
-- Table structure for `goods`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `saleGoodsImg` varchar(255) CHARACTER SET ascii DEFAULT NULL,
  `name` varchar(32) DEFAULT NULL,
  `desc` varchar(32) DEFAULT NULL,
  `price` varchar(32) CHARACTER SET ascii DEFAULT NULL,
  `icon` varchar(128) CHARACTER SET ascii DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1020 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1001', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/25/10002225_1587193547603_750x750.png', 'iQOO Neo3', ' 8GB+128GB/144Hz高刷竞速屏', '2998.00', '1587193547603-1587348082279-1587193547251-1590684319918');
INSERT INTO `goods` VALUES ('1002', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/44/10002544_1590047377362_750x750.png', 'vivo X50 5G版', '超感光夜摄|超稳运动拍摄', '3498.00', '1590047377362-1590047377268-1590047377489-1591015824381');
INSERT INTO `goods` VALUES ('1003', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/48/10005648_1597027459923_750x750.png', 'iQOO 5 5G版', '120Hz 超视感柔性屏', '3998.00', '1597027459923-1597027459658-1597027459440-1597027459786');
INSERT INTO `goods` VALUES ('1004', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/22/10001922_1582525194561_750x750.png', 'iQOO 3 5G版', '高通骁龙865/双模5G', '3498.00', '1582525194561-1582525194164-1582525194193-1583929432362');
INSERT INTO `goods` VALUES ('1005', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/03/10002503_1589799951253_750x750.png', 'iQOO Z1 5G版', '天玑1000Plus旗舰芯片', '2498.00', '1589799951253-1589799950855-1589799951185-1592321673308');
INSERT INTO `goods` VALUES ('1006', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/11/10002511_1590233314674_750x750.png', 'vivo Y70s 5G版', ' 4500mAh+双引擎闪充', '2098.00', '1590233314674-1590233324894-1590233336471-1590233348592');
INSERT INTO `goods` VALUES ('1007', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/58/10000658_1568960480539_750x750.png', 'vivo X27 Pro', '升降式摄像头/全面屏', '3298.00', '1568960480539-1557214526611-1568960370227-1568960370367-1568960215341');
INSERT INTO `goods` VALUES ('1008', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/39/10001939_1583745547756_750x750.png', 'NEX 3S 5G版', '8GB+256GB/高通骁龙865', '4998.00', '1583745547756-1583745547759-1583745548092-1583821246059');
INSERT INTO `goods` VALUES ('1009', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/12/10001812_1576462303444_750x750.png', 'vivo X30 5G版', '双模5G全网通/20倍变焦', '2998.00', '1576462303444-1576462303339-1576462303029-1586742098932');
INSERT INTO `goods` VALUES ('1010', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/73/10002173_1589354060038_750x750.png', 'vivo 缤纷耳机', ' 专业调音 三频均衡', '49.00', '1589354060038-1588041899831-1588042011695-1588042024325');
INSERT INTO `goods` VALUES ('1013', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/22/10002422_1587537238055_750x750.png', 'iQOO 影音耳机', 'K歌级麦克风', '129.00', '1587537238055-1587537237952-1587537238146-1587537242470');
INSERT INTO `goods` VALUES ('1014', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/57/10002857_1591961027534_750x750.png', 'vivo X50 硅胶保护壳', '手感舒适｜简约设计', '59.00', '1591961027534-1591961034093-1591961027564-1591961027501-1591961027619');
INSERT INTO `goods` VALUES ('1015', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/51/10002051_1583133386116_750x750.png', 'iQOO 3 砂岩手机保护壳', '官方品质｜砂岩手感', '59.00', '1583133386116-1583133386559-1583133390577-1583133386388-1583133386257');
INSERT INTO `goods` VALUES ('1016', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/72/10002872_1591952135411_750x750.png', 'iQOO 闪电游戏手柄', '即连即玩｜支持海量游戏', '199.00', '1591952135411-1592207234401-1592207234458-1592207235032');
INSERT INTO `goods` VALUES ('1017', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/25/10002425_1589856402284_750x750.png', '闪充手游数据线', '官方品质｜手游专属设计', '59.00', '1589856402284-1587539374955-1587539375020-1587539379158-1587539374994');
INSERT INTO `goods` VALUES ('1018', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/30/10002530_1589791356105_750x750.png', 'vivo TWS Neo 真无线耳机  ', '高清音质|游戏低延迟', '499.00', '1589791356105-1591014572975-1591014568829-1591014569024-1591014568925');
INSERT INTO `goods` VALUES ('1019', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/38/10000538_1591686802882_750x750.png', 'vivo 44W闪充充电器', '六重保护系统', '119.00', '1591686802882-1591686803010-1591686802920-1591686802857');

-- ----------------------------
-- Table structure for `shoppingcart`
-- ----------------------------
DROP TABLE IF EXISTS `shoppingcart`;
CREATE TABLE `shoppingcart` (
  `id` int(8) NOT NULL DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `icon` varchar(64) CHARACTER SET ascii DEFAULT NULL,
  `num` int(32) DEFAULT NULL,
  `price` float(32,0) DEFAULT NULL,
  `total` float(32,0) DEFAULT NULL,
  `checked` int(4) DEFAULT NULL,
  `deleted` int(4) DEFAULT NULL,
  `info` varchar(32) CHARACTER SET ascii DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shoppingcart
-- ----------------------------
INSERT INTO `shoppingcart` VALUES ('1008', 'NEX 3S 5G版', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/39/10001939_15', '1', '4998', '4998', '0', '0', '');
INSERT INTO `shoppingcart` VALUES ('1004', 'iQOO 3 5G版', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/22/10001922_15', '1', '3498', '3498', '0', '0', '');
INSERT INTO `shoppingcart` VALUES ('1016', 'iQOO 闪电游戏手柄', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/72/10002872_15', '1', '199', '199', '0', '0', '');
INSERT INTO `shoppingcart` VALUES ('1002', 'vivo X50 5G版', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/44/10002544_15', '1', '3498', '3498', '0', '0', '');
INSERT INTO `shoppingcart` VALUES ('1001', 'iQOO Neo3', 'https://shopstatic.vivo.com.cn/vivoshop/commodity/25/10002225_15', '2', '2998', '5996', '0', '0', '');

-- ----------------------------
-- Table structure for `slidenav`
-- ----------------------------
DROP TABLE IF EXISTS `slidenav`;
CREATE TABLE `slidenav` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of slidenav
-- ----------------------------

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) DEFAULT '',
  `password` varchar(32) CHARACTER SET ascii COLLATE ascii_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('28', 'aaa', '111');

-- ----------------------------
-- Table structure for `vgoods`
-- ----------------------------
DROP TABLE IF EXISTS `vgoods`;
CREATE TABLE `vgoods` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `name` char(32) DEFAULT NULL,
  `icon` varchar(32) CHARACTER SET ascii DEFAULT NULL,
  `img` varchar(32) CHARACTER SET ascii DEFAULT NULL,
  `info` varchar(32) DEFAULT NULL,
  `price` int(8) DEFAULT NULL,
  `deletePrice` int(8) DEFAULT NULL,
  `num` int(8) DEFAULT '1',
  `checked` int(2) DEFAULT '0',
  `deleted` int(2) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vgoods
-- ----------------------------
