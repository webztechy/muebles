-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 09, 2020 at 02:58 PM
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
(1, 1, 'name', 'Drinks'),
(2, 1, 'description', 'description'),
(6, 1, 'date_created', '2020-06-27 21:53:14'),
(7, 1, 'status', '1'),
(24, 5, 'name', 'Breads'),
(25, 5, 'description', 'description'),
(26, 5, 'status', '1'),
(27, 5, 'date_created', '2020-11-02 08:27:51'),
(28, 6, 'name', 'Clothing'),
(29, 6, 'description', 'description'),
(30, 6, 'status', '1'),
(31, 6, 'date_created', '2020-11-02 08:52:42'),
(32, 7, 'name', 'Detergents'),
(33, 7, 'description', 'description'),
(34, 7, 'status', '1'),
(35, 7, 'date_created', '2020-11-02 10:06:46'),
(36, 8, 'name', 'Sweets'),
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
  `date_created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

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
  `group_id` int(11) NOT NULL,
  `meta_key` varchar(500) NOT NULL,
  `meta_value` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=29 ;

--
-- Dumping data for table `tbl_products`
--

INSERT INTO `tbl_products` (`id`, `group_id`, `meta_key`, `meta_value`) VALUES
(1, 1, 'name', 'Persi'),
(2, 1, 'description', 'cola'),
(3, 1, 'price', '2.50'),
(4, 1, 'category_id', '1'),
(5, 1, 'featured_status', '0'),
(6, 1, 'date_created', '2020-06-27 21:53:14'),
(7, 1, 'status', '1'),
(15, 3, 'name', 'Coke'),
(16, 3, 'description', 'cola'),
(17, 3, 'price', '2.35'),
(18, 3, 'category_id', '1'),
(19, 3, 'featured_status', '0'),
(20, 3, 'status', '1'),
(21, 3, 'date_created', '2020-11-02 10:01:16'),
(22, 4, 'name', 'Tide'),
(23, 4, 'description', 'laundry powder'),
(24, 4, 'price', '18.90'),
(25, 4, 'category_id', '7'),
(26, 4, 'featured_status', '0'),
(27, 4, 'status', '1'),
(28, 4, 'date_created', '2020-11-02 10:07:04');

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
