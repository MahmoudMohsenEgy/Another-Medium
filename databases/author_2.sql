-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3309
-- Generation Time: Jun 20, 2022 at 10:19 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `another_medium`
--

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE `author` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `noOfFollowers` int(255) NOT NULL,
  `img` varchar(255) NOT NULL DEFAULT 'https://alum.kuleuven.be/alumniverenigingen/regionale-kernen/Brugge/fotos/unknown-man.png'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`id`, `name`, `noOfFollowers`, `img`) VALUES
(1, 'Mahmoud Mohsen', 12, 'https://www.whichfaceisreal.com/realimages/49725.jpeg'),
(2, 'Youssef Shafik', 54, 'https://alum.kuleuven.be/alumniverenigingen/regionale-kernen/Brugge/fotos/unknown-man.png'),
(3, 'Mahmoud hafez', 23, 'https://alum.kuleuven.be/alumniverenigingen/regionale-kernen/Brugge/fotos/unknown-man.png'),
(4, 'Hadidy', 0, 'https://alum.kuleuven.be/alumniverenigingen/regionale-kernen/Brugge/fotos/unknown-man.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `author`
--
ALTER TABLE `author`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
