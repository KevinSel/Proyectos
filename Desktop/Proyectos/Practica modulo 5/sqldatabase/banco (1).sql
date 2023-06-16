-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-06-2023 a las 12:29:40
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `banco`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `id_gestor` int(11) NOT NULL,
  `nombre` char(20) NOT NULL,
  `apellido` char(30) NOT NULL,
  `usuario` char(30) NOT NULL,
  `password` char(64) NOT NULL,
  `balance` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id`, `id_gestor`, `nombre`, `apellido`, `usuario`, `password`, `balance`) VALUES
(2, 2, 'Amina', 'Mota', 'AminaMota', 'fdbd0047e048cb573a4504b583b665b47b571db7498b638b9586da5a19c5b9c0', 6500),
(3, 3, 'Serafina', 'Codin', 'SerafinaCodin', '1533244680c255e2232f2346cad297c41a9a9b80bbf33d50b37912448ad66953', 2450);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deposito`
--

CREATE TABLE `deposito` (
  `id` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `monto` double NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `deposito`
--

INSERT INTO `deposito` (`id`, `id_cliente`, `monto`, `fecha`) VALUES
(1, 2, 50, '2023-06-13 12:29:38'),
(2, 2, -1000, '2023-06-13 12:29:48'),
(3, 2, 500, '2023-06-16 09:27:28'),
(4, 2, 1000, '2023-06-16 09:27:32');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gestor`
--

CREATE TABLE `gestor` (
  `id` int(11) NOT NULL,
  `nombre` char(30) NOT NULL,
  `apellido` char(30) NOT NULL,
  `usuario` char(30) NOT NULL,
  `password` char(64) NOT NULL,
  `salario` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `gestor`
--

INSERT INTO `gestor` (`id`, `nombre`, `apellido`, `usuario`, `password`, `salario`) VALUES
(2, 'admin', 'admin', 'admin', 'fb001dfcffd1c899f3297871406242f097aecf1a5342ccf3ebcd116146188e4b', 0),
(3, 'Federico', 'Robles', 'FedericoRobles', 'a25accf3d6e04efc00520ef1e3745ef26384df73fdc9ab7bbacfba6757678fc9', 1000),
(4, 'GestorAleatorio5857', 'gestorApellido2703', '2925GestorAleatorio(Eliminado)', 'Eliminado', 0),
(5, 'GestorAleatorio7968', 'gestorApellido1810', '8456GestorAleatorio', 'ffc06e5e4a38fe4e533e041ef872c55f77be90ff30d3601090869536929cf5bc', 24811),
(6, 'GestorAleatorio2973', 'gestorApellido1991', '5884GestorAleatorio', 'b7052ebfed9aadf8dc28fff2bec6b0c439a223ad44a1aef3fe15b925fe3c7d60', 16482),
(7, 'GestorAleatorio4186', 'gestorApellido218', '6885GestorAleatorio', '284ae3273b293d4606b63e5f1cfa7fb36415de53f443d2178f2839ef60064afa', 25652),
(8, 'GestorAleatorio4816', 'gestorApellido302', '5743GestorAleatorio', '461ca810ade2dd165ec6186a56a9f903bdff16d6b49a0e369eb88c5f0edc4e00', 1634),
(9, 'GestorAleatorio1682', 'gestorApellido1474', '3334GestorAleatorio', '02a9ec834620370c4b336e8b90a1dcdab17425cc6fdb9be861562508fcc8dd3c', 25991),
(10, 'GestorAleatorio9677', 'gestorApellido2965', '1451GestorAleatorio', '1f4dababbe18ed2c788cd19a570a540de9b845453391ec81bb609c2eeb60142d', 570),
(11, 'GestorAleatorio6895', 'gestorApellido1319', '3754GestorAleatorio', 'a53aa37c39f1d6119b48c8709f799021ec9a2fa183b4ed870a6a0349d5516538', 9505),
(12, 'GestorAleatorio5711', 'gestorApellido1108', '974GestorAleatorio', '91e0e9c2bad5eced1341668a8eb9a3d30ff936e61c95b6acdc1fcf6a531eaf2f', 14874),
(13, 'GestorAleatorio1562', 'gestorApellido2812', '4604GestorAleatorio', 'b9a5b74e775aae4d1157209796557a4e432e2b8e6625a72f6586bd72b057845a', 27181),
(14, 'GestorAleatorio3974', 'gestorApellido1884', '8592GestorAleatorio', '01f34f774069f5faae0446a3c15a77e29bc7365bf4698c284c52d95e5d920625', 5451),
(15, 'GestorAleatorio1899', 'gestorApellido114', '1663GestorAleatorio', '396e96827e995879930179437daadaaf3d7ee88b2ccf56ca72e3ff14d788afab', 15197),
(16, 'GestorAleatorio9682', 'gestorApellido2534', '5002GestorAleatorio', 'd0fee39be9197d95937054257662bfd13999dd355b02ccda4fe314363d52b061', 18821),
(17, 'GestorAleatorio1035', 'gestorApellido872', '1620GestorAleatorio', '3ce8298f6c15af0b1a3a810cd7041fa4a543daf6f708fae27c2be8e33ab80cca', 5903),
(18, 'GestorAleatorio656', 'gestorApellido2560', '5922GestorAleatorio', 'bebd5df3c4a3b2ebd4d216b9d0f4772133057346e15386c0e34fc517be79fd56', 24259),
(19, 'GestorAleatorio8230', 'gestorApellido1267', '6919GestorAleatorio', '001495d220d661fc261ec61944a327cc43c12edba19e0148f49fb12167cc4865', 15596),
(20, 'GestorAleatorio179', 'gestorApellido864', '1050GestorAleatorio', 'eaba87988e7ee2ab6f2d4bd4de23ed00abd163157fa127e34ba46497540494a2', 21704),
(21, 'GestorAleatorio417', 'gestorApellido2103', '6065GestorAleatorio', 'f01008567f9d39a04de1909480bb5fc60a7b6565f7f713df77e5494db0c04bc7', 19601),
(22, 'GestorAleatorio1705', 'gestorApellido480', '1171GestorAleatorio', 'c356b35b7e70f2532ead4c2785095d4f17e4d292623de712d854b49de0160423', 12826),
(23, 'GestorAleatorio6039', 'gestorApellido710', '329GestorAleatorio', 'fbd56d24e6dd30f88d8ccfe71d5dfd5ecaedffec30a2a5ec84fe3f46f6615d8c', 5191),
(24, 'GestorAleatorio9546', 'gestorApellido2194', '9787GestorAleatorio', '54e8cb67704e4ada395031fc20bef98abea27c66c2f24802f2fca0ce1dc4e9e3', 29617);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensaje`
--

CREATE TABLE `mensaje` (
  `id` int(11) NOT NULL,
  `mensaje` char(200) NOT NULL,
  `us_emisor` char(30) NOT NULL,
  `us_receptor` char(30) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mensaje`
--

INSERT INTO `mensaje` (`id`, `mensaje`, `us_emisor`, `us_receptor`, `fecha`) VALUES
(21, 'Hola, Serafina', 'AminaMota', 'SerafinaCodin', '2023-06-13 10:30:49'),
(22, 'Hola, Federico', 'AminaMota', 'FedericoRobles', '2023-06-13 10:31:16'),
(23, ' Este es un comentario de 200 caracteres, para probar la forma en la que se ven las fichas en la pag Este es un comentario de 200 caracteres, para probar la forma en la que se ven las fichas en la pag', 'AminaMota', 'SerafinaCodin', '2023-06-16 07:29:30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transferencia`
--

CREATE TABLE `transferencia` (
  `id` int(11) NOT NULL,
  `monto` double NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_receptor` int(11) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `transferencia`
--

INSERT INTO `transferencia` (`id`, `monto`, `id_cliente`, `id_receptor`, `fecha`) VALUES
(6, 50, 2, 3, '2023-06-13 12:28:00'),
(7, 1500, 2, 3, '2023-06-13 12:30:06'),
(8, 50, 2, 3, '2023-06-13 12:30:11'),
(9, 750, 2, 3, '2023-06-16 09:28:13');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_gestor` (`id_gestor`);

--
-- Indices de la tabla `deposito`
--
ALTER TABLE `deposito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_cliente` (`id_cliente`);

--
-- Indices de la tabla `gestor`
--
ALTER TABLE `gestor`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mensaje`
--
ALTER TABLE `mensaje`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `transferencia`
--
ALTER TABLE `transferencia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `id_receptor` (`id_receptor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `deposito`
--
ALTER TABLE `deposito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `gestor`
--
ALTER TABLE `gestor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `mensaje`
--
ALTER TABLE `mensaje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `transferencia`
--
ALTER TABLE `transferencia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`id_gestor`) REFERENCES `gestor` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
