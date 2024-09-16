-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 15, 2024 at 05:03 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gdoptical_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `accounts_id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `gender` enum('male','female','other') NOT NULL,
  `birthdate` date NOT NULL,
  `address` varchar(255) NOT NULL,
  `contact_number` varchar(20) NOT NULL,
  `account_type` enum('doctor','secretary') NOT NULL DEFAULT 'secretary'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`accounts_id`, `username`, `password`, `fullname`, `gender`, `birthdate`, `address`, `contact_number`, `account_type`) VALUES
(1, 'raphyy', '123', 'Ralph Justin Saransate', 'male', '1990-01-01', '123 Main St', '1234567890', 'doctor'),
(2, 'jules', '123', 'Jules Martin Enolva', 'female', '1995-05-15', '456 Elm St', '9876543210', 'secretary');

-- --------------------------------------------------------

--
-- Table structure for table `eye_result`
--

CREATE TABLE `eye_result` (
  `eye_result_id` int(11) NOT NULL,
  `patients_id` int(11) NOT NULL,
  `r_sphere` varchar(255) NOT NULL,
  `l_sphere` varchar(255) NOT NULL,
  `r_cylinder` varchar(255) NOT NULL,
  `l_cylinder` varchar(255) NOT NULL,
  `r_axis` varchar(255) NOT NULL,
  `l_axis` varchar(255) NOT NULL,
  `pd` varchar(255) NOT NULL,
  `date_added` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `eye_result`
--

INSERT INTO `eye_result` (`eye_result_id`, `patients_id`, `r_sphere`, `l_sphere`, `r_cylinder`, `l_cylinder`, `r_axis`, `l_axis`, `pd`, `date_added`) VALUES
(1, 3, '123', '123', '321', '123', '312', '321', '123', '2024-08-15 13:20:17'),
(2, 3, '12', '12', '23', '21', '21', '2', '2', '2024-08-15 13:26:37'),
(3, 3, '12', '12', '23', '21', '21', '2', '2', '2024-08-15 13:28:25'),
(4, 3, '123', '32', '32', '12', '123', '213', '467', '2024-08-15 13:28:38'),
(5, 3, '1', '1', '1', '1', '1', '1', '1', '2024-08-15 13:34:41'),
(6, 5, '1', '1', '1', '1', '1', '1', '1', '2024-08-15 13:34:51'),
(7, 5, '2', '2', '2', '2', '2', '2', '2', '2024-08-15 13:35:34'),
(8, 3, '123', '132', '123', '1', '1', '1', '1', '2024-08-15 13:50:59'),
(9, 3, '1', '1', '1', '1', '1', '1', '1', '2024-08-15 13:51:14'),
(10, 3, '123', '12', '11', '1', '1', '1', '1', '2024-08-15 13:52:12'),
(11, 5, '323', '32', '32', '32', '32', '32', '32', '2024-08-15 13:52:35'),
(12, 3, '1', '1', '1', '1', '1', '11', '1', '2024-08-15 13:52:41'),
(13, 5, '32', '3', '3', '3', '2', '1', '2', '2024-08-15 14:00:08'),
(14, 5, '32', '3', '3', '3', '2', '1', '2', '2024-08-15 14:00:14'),
(15, 3, '12', '3', '2332', '12', '321', '321', '321', '2024-08-15 14:00:56'),
(16, 3, '123', '132', '312', '312', '12', '123', '321', '2024-08-15 14:01:27'),
(17, 3, '2', '3', '3', '5', '7', '6', '4', '2024-08-15 14:02:55'),
(18, 3, '2', '3', '5', '3', '21', '24', '53', '2024-08-15 14:03:29'),
(19, 3, '1', '2', '3', '4', '5', '6', '6', '2024-08-15 14:05:55'),
(20, 3, '12', '23', '42', '42', '42', '42', '42', '2024-08-15 14:06:16');

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `patients_id` int(6) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `middle_name` varchar(255) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `medication_history` text DEFAULT NULL,
  `date_of_birth` date NOT NULL,
  `gender` varchar(10) NOT NULL,
  `contact_no` varchar(15) NOT NULL,
  `date_added` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`patients_id`, `first_name`, `last_name`, `middle_name`, `address`, `medication_history`, `date_of_birth`, `gender`, `contact_no`, `date_added`) VALUES
(3, 'Ralph', 'Saransate', 'Justin', '21312312', 'askit', '2006-02-09', 'Male', '099927889', '2024-08-13 14:38:27'),
(5, 'Jules Martin', 'Enolva', 'Arcega', 'General Santos City', 'Astigmatism', '2020-01-08', 'Male', '09123489753', '2024-08-13 14:06:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`accounts_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `eye_result`
--
ALTER TABLE `eye_result`
  ADD PRIMARY KEY (`eye_result_id`),
  ADD KEY `patients_id` (`patients_id`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`patients_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `accounts_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `eye_result`
--
ALTER TABLE `eye_result`
  MODIFY `eye_result_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `patients_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `eye_result`
--
ALTER TABLE `eye_result`
  ADD CONSTRAINT `eye_result_ibfk_1` FOREIGN KEY (`patients_id`) REFERENCES `patients` (`patients_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
