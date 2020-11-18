-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 18, 2020 at 11:22 AM
-- Server version: 5.6.16
-- PHP Version: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `mueblesdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_attributes`
--

CREATE TABLE IF NOT EXISTS `tbl_attributes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `meta_key` varchar(500) NOT NULL,
  `meta_value` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_attributes_values`
--

CREATE TABLE IF NOT EXISTS `tbl_attributes_values` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `meta_key` varchar(500) NOT NULL,
  `meta_value` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_categories`
--

CREATE TABLE IF NOT EXISTS `tbl_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `meta_key` varchar(500) NOT NULL,
  `meta_value` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=40 ;

--
-- Dumping data for table `tbl_categories`
--

INSERT INTO `tbl_categories` (`id`, `group_id`, `meta_key`, `meta_value`) VALUES
(1, 1, 'name', 'Baseball'),
(2, 1, 'description', 'description'),
(6, 1, 'date_created', '2020-06-27 21:53:14'),
(7, 1, 'status', '1'),
(24, 5, 'name', 'Life'),
(25, 5, 'description', 'description'),
(26, 5, 'status', '1'),
(27, 5, 'date_created', '2020-11-02 08:27:51'),
(28, 6, 'name', 'Running'),
(29, 6, 'description', 'description'),
(30, 6, 'status', '1'),
(31, 6, 'date_created', '2020-11-02 08:52:42'),
(32, 7, 'name', 'Football'),
(33, 7, 'description', 'description'),
(34, 7, 'status', '1'),
(35, 7, 'date_created', '2020-11-02 10:06:46'),
(36, 8, 'name', 'Runner'),
(37, 8, 'description', 'description'),
(38, 8, 'status', '1'),
(39, 8, 'date_created', '2020-11-02 12:58:48');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_orders`
--

CREATE TABLE IF NOT EXISTS `tbl_orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `quantity` mediumint(5) NOT NULL,
  `price` float NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `date_created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `tbl_orders`
--

INSERT INTO `tbl_orders` (`id`, `product_id`, `quantity`, `price`, `status`, `date_created`) VALUES
(14, 1, 1, 250, 1, NULL),
(16, 12, 1, 125, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_orders_meta`
--

CREATE TABLE IF NOT EXISTS `tbl_orders_meta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `meta_key` varchar(500) NOT NULL,
  `meta_value` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_products`
--

CREATE TABLE IF NOT EXISTS `tbl_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(500) NOT NULL,
  `category_id` mediumint(5) NOT NULL,
  `featured_status` tinyint(1) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `date_created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- Dumping data for table `tbl_products`
--

INSERT INTO `tbl_products` (`id`, `name`, `category_id`, `featured_status`, `status`, `date_created`) VALUES
(1, 'product item 1', 1, 0, 1, '2020-11-12 06:47:52'),
(2, 'product item 2', 7, 0, 1, '2020-11-12 06:59:02'),
(3, 'product item 3', 8, 0, 1, '2020-11-12 06:59:18'),
(4, 'product item 4', 6, 0, 1, '2020-11-12 06:59:32'),
(5, 'product item 5', 1, 0, 1, '2020-11-12 06:59:45'),
(6, 'product item 6', 7, 0, 1, '2020-11-12 07:00:06'),
(7, 'product item 7', 5, 0, 1, '2020-11-12 07:00:18'),
(8, 'product item 8', 7, 0, 1, '2020-11-12 07:00:30'),
(9, 'product item 9', 8, 0, 1, '2020-11-12 07:00:38'),
(10, 'product item 10', 6, 0, 1, '2020-11-12 07:00:51'),
(11, 'product item 11', 7, 0, 1, '2020-11-12 07:01:23'),
(12, 'product item 12', 5, 0, 1, '2020-11-12 07:01:31'),
(13, 'product item 13', 6, 0, 1, '2020-11-12 07:01:38'),
(14, 'product item 14', 7, 0, 1, '2020-11-12 07:01:48'),
(15, 'product item 15', 5, 0, 1, '2020-11-12 07:01:58');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_products2`
--

CREATE TABLE IF NOT EXISTS `tbl_products2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `meta_key` varchar(500) NOT NULL,
  `meta_value` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=50 ;

--
-- Dumping data for table `tbl_products2`
--

INSERT INTO `tbl_products2` (`id`, `group_id`, `meta_key`, `meta_value`) VALUES
(1, 1, 'name', 'Roller Skates Shoes Girls Boys Roller'),
(2, 1, 'description', 'cola'),
(3, 1, 'price', '200'),
(4, 1, 'category_id', '5'),
(5, 1, 'featured_status', '0'),
(6, 1, 'date_created', '2020-06-27 21:53:14'),
(7, 1, 'status', '1'),
(15, 3, 'name', 'Performance Go Walk 4-Ascend'),
(16, 3, 'description', 'Performance Go Walk 4-Ascend'),
(17, 3, 'price', '193'),
(18, 3, 'category_id', '1'),
(19, 3, 'featured_status', '0'),
(20, 3, 'status', '1'),
(21, 3, 'date_created', '2020-11-02 10:01:16'),
(22, 4, 'name', 'Hybrid Nx Rave Mens Running Shoes'),
(23, 4, 'description', 'Hybrid Nx Rave Mens Running Shoes'),
(24, 4, 'price', '320'),
(25, 4, 'category_id', '8'),
(26, 4, 'featured_status', '0'),
(27, 4, 'status', '1'),
(28, 4, 'date_created', '2020-11-02 10:07:04'),
(29, 5, 'name', 'Retrorun, Womens Road Running Shoes'),
(30, 5, 'description', 'Retrorun, Womens Road Running Shoes'),
(31, 5, 'price', '152'),
(32, 5, 'category_id', '7'),
(33, 5, 'featured_status', '0'),
(34, 5, 'status', '1'),
(35, 5, 'date_created', '2020-11-10 10:36:33'),
(36, 6, 'name', 'Sb Charge Cnvs Mens Skateboarding Shoes'),
(37, 6, 'description', 'Sb Charge Cnvs Mens Skateboarding Shoes'),
(38, 6, 'price', '230'),
(39, 6, 'category_id', '5'),
(40, 6, 'featured_status', '0'),
(41, 6, 'status', '1'),
(42, 6, 'date_created', '2020-11-10 10:36:53'),
(43, 7, 'name', '109, Mens Athletic & Outdoor Shoes'),
(44, 7, 'description', '109, Mens Athletic & Outdoor Shoes'),
(45, 7, 'price', '265'),
(46, 7, 'category_id', '5'),
(47, 7, 'featured_status', '0'),
(48, 7, 'status', '1'),
(49, 7, 'date_created', '2020-11-10 10:37:10');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_products_attributes`
--

CREATE TABLE IF NOT EXISTS `tbl_products_attributes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `meta_key` varchar(500) NOT NULL,
  `meta_value` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_products_meta`
--

CREATE TABLE IF NOT EXISTS `tbl_products_meta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `meta_key` varchar(500) NOT NULL,
  `meta_value` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=61 ;

--
-- Dumping data for table `tbl_products_meta`
--

INSERT INTO `tbl_products_meta` (`id`, `group_id`, `meta_key`, `meta_value`) VALUES
(1, 1, 'gallery', ''),
(2, 1, 'image', ''),
(3, 1, 'price', '250'),
(4, 1, 'description', 'product item 1'),
(5, 2, 'gallery', ''),
(6, 2, 'image', ''),
(7, 2, 'price', '130'),
(8, 2, 'description', 'product item 2'),
(9, 3, 'gallery', ''),
(10, 3, 'image', ''),
(11, 3, 'price', '150'),
(12, 3, 'description', 'product item 3'),
(13, 4, 'gallery', ''),
(14, 4, 'image', ''),
(15, 4, 'price', '260'),
(16, 4, 'description', 'product item 4'),
(17, 5, 'gallery', ''),
(18, 5, 'image', ''),
(19, 5, 'price', '220'),
(20, 5, 'description', 'product item 5'),
(21, 6, 'gallery', ''),
(22, 6, 'image', ''),
(23, 6, 'price', '130'),
(24, 6, 'description', 'product item 6'),
(25, 7, 'gallery', ''),
(26, 7, 'image', ''),
(27, 7, 'price', '460'),
(28, 7, 'description', 'product item 7'),
(29, 8, 'gallery', ''),
(30, 8, 'image', ''),
(31, 8, 'price', '350'),
(32, 8, 'description', 'product item 8'),
(33, 9, 'gallery', ''),
(34, 9, 'image', ''),
(35, 9, 'price', '355'),
(36, 9, 'description', 'product item 9'),
(37, 10, 'gallery', ''),
(38, 10, 'image', ''),
(39, 10, 'price', '332'),
(40, 10, 'description', 'product item 10'),
(41, 11, 'gallery', ''),
(42, 11, 'image', ''),
(43, 11, 'price', '120'),
(44, 11, 'description', 'product item 11'),
(45, 12, 'gallery', ''),
(46, 12, 'image', ''),
(47, 12, 'price', '125'),
(48, 12, 'description', 'product item 12'),
(49, 13, 'gallery', ''),
(50, 13, 'image', ''),
(51, 13, 'price', '145'),
(52, 13, 'description', 'product item 13'),
(53, 14, 'gallery', ''),
(54, 14, 'image', ''),
(55, 14, 'price', '165'),
(56, 14, 'description', 'product item 14'),
(57, 15, 'gallery', ''),
(58, 15, 'image', ''),
(59, 15, 'price', '170'),
(60, 15, 'description', 'product item 15');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE IF NOT EXISTS `tbl_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `avatar` varchar(500) NOT NULL,
  `username` varchar(500) NOT NULL,
  `password` text NOT NULL,
  `first_name` varchar(250) NOT NULL,
  `middle_name` varchar(250) NOT NULL,
  `last_name` varchar(250) NOT NULL,
  `type` tinyint(1) NOT NULL DEFAULT '2',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `date_created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `avatar`, `username`, `password`, `first_name`, `middle_name`, `last_name`, `type`, `status`, `date_created`) VALUES
(1, 'renier.jpg', 'renier', 'd033e22ae348aeb5660fc2140aec35850c4da997', 'Renier', '', 'Rumbaoa', 1, 1, '2020-06-27 21:53:14'),
(7, '', 'aa', 'e0c9035898dd52fc65c41454cec9c4d2611bfb37', 'aa', '', 'aa', 1, 0, '2020-11-08 13:27:22');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users_meta`
--

CREATE TABLE IF NOT EXISTS `tbl_users_meta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `meta_key` varchar(500) NOT NULL,
  `meta_value` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `tbl_users_meta`
--

INSERT INTO `tbl_users_meta` (`id`, `group_id`, `meta_key`, `meta_value`) VALUES
(4, 1, 'email', 'freelance.renier@gmail.com'),
(6, 1, 'contact_number', '0526229546'),
(8, 1, 'address', 'al barsha 1, dubai, uae'),
(9, 7, 'address', 'aa'),
(10, 7, 'contact_number', '123456'),
(11, 7, 'email', 'aa@gmail.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
