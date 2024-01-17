-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: localhost    Database: MATRIZCH
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `TCAACTIVIDADES`
--

DROP TABLE IF EXISTS `TCAACTIVIDADES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TCAACTIVIDADES` (
  `TCAACTIVIDADES_ID` int NOT NULL AUTO_INCREMENT COMMENT 'codigo incremental unico',
  `TCAACTIVIDADESD_ID` int DEFAULT NULL COMMENT 'codigo incremental unico',
  `TCAACTIVIDADES_NOMBRE` varchar(40) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'nombre corto de la actividad',
  `TCAACTIVIDADES_DESCRIPCION` varchar(100) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'descripcion detallada',
  `TCAACTIVIDADES_OBLIGATORIA` tinyint(1) DEFAULT NULL COMMENT 'determina si la actividad es obligatoria o no es obligatoria',
  PRIMARY KEY (`TCAACTIVIDADES_ID`),
  KEY `FK10_TCAACT_TCAACT_ID` (`TCAACTIVIDADESD_ID`),
  CONSTRAINT `FK10_TCAACT_TCAACT_ID` FOREIGN KEY (`TCAACTIVIDADESD_ID`) REFERENCES `TCAACTIVIDADESD` (`TCAACTIVIDADESD_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='tabla que guarda las actividades obligatorias u opcionales q';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TCAACTIVIDADES`
--

LOCK TABLES `TCAACTIVIDADES` WRITE;
/*!40000 ALTER TABLE `TCAACTIVIDADES` DISABLE KEYS */;
/*!40000 ALTER TABLE `TCAACTIVIDADES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TCAACTIVIDADESD`
--

DROP TABLE IF EXISTS `TCAACTIVIDADESD`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TCAACTIVIDADESD` (
  `TCAACTIVIDADESD_ID` int NOT NULL AUTO_INCREMENT COMMENT 'codigo incremental unico',
  PRIMARY KEY (`TCAACTIVIDADESD_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='tabla que guarda las relaciones entre las matrices de carga ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TCAACTIVIDADESD`
--

LOCK TABLES `TCAACTIVIDADESD` WRITE;
/*!40000 ALTER TABLE `TCAACTIVIDADESD` DISABLE KEYS */;
/*!40000 ALTER TABLE `TCAACTIVIDADESD` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TCACARRERAS`
--

DROP TABLE IF EXISTS `TCACARRERAS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TCACARRERAS` (
  `TCACARRERAS_ID` int NOT NULL AUTO_INCREMENT COMMENT 'codigo incremental unico',
  `TCADEPARTAMENTOS_ID` int NOT NULL COMMENT 'codigo incremental unico',
  `TCACARRERAS_NOMBRE` varchar(100) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'nombre completo',
  `TCACARRERAS_ESTADO` varchar(20) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'estado vigente o en proceso cierre',
  `TCACARRERAS_DIRECTOR` varchar(40) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'nombre del director encargado',
  `TCACARRERAS_MODALIDAD` varchar(10) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'modalidad presencial o en linea',
  `TCACARRERAS_ACTIVO` tinyint(1) DEFAULT NULL COMMENT 'estado de actividad',
  PRIMARY KEY (`TCACARRERAS_ID`),
  KEY `FK1_TCACAR_TCADEP_ID` (`TCADEPARTAMENTOS_ID`),
  CONSTRAINT `FK1_TCACAR_TCADEP_ID` FOREIGN KEY (`TCADEPARTAMENTOS_ID`) REFERENCES `TCADEPARTAMENTOS` (`TCADEPARTAMENTOS_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='tabla de guarda las carreras que pertenecen a cada uno de lo';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TCACARRERAS`
--

LOCK TABLES `TCACARRERAS` WRITE;
/*!40000 ALTER TABLE `TCACARRERAS` DISABLE KEYS */;
/*!40000 ALTER TABLE `TCACARRERAS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TCADEPARTAMENTOS`
--

DROP TABLE IF EXISTS `TCADEPARTAMENTOS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TCADEPARTAMENTOS` (
  `TCADEPARTAMENTOS_ID` int NOT NULL AUTO_INCREMENT COMMENT 'codigo incremental unico',
  `TCADEPARTAMENTOS_NOMBRE` varchar(100) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'nombre completo',
  `TCADEPARTAMENTOS_SIGLA` varchar(10) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'siglas',
  `TCADEPARTAMENTOS_ACTIVO` tinyint(1) DEFAULT NULL COMMENT 'estado de actividad',
  PRIMARY KEY (`TCADEPARTAMENTOS_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='tabla que guarda los departamentos existentes en la universi';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TCADEPARTAMENTOS`
--

LOCK TABLES `TCADEPARTAMENTOS` WRITE;
/*!40000 ALTER TABLE `TCADEPARTAMENTOS` DISABLE KEYS */;
INSERT INTO `TCADEPARTAMENTOS` VALUES (1,'Ciencias de la Computación','DCCO',1),(3,'Ciencias Humanas','DCH',1),(4,'Ciencias Sociales','DCS',1),(5,'Ciencias Deportivas','DCD',0);
/*!40000 ALTER TABLE `TCADEPARTAMENTOS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TCADOCENTES`
--

DROP TABLE IF EXISTS `TCADOCENTES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TCADOCENTES` (
  `TCADOCENTES_ID_BANNER` varchar(9) COLLATE utf8mb3_bin NOT NULL COMMENT 'codigo incremental unico',
  `TCADEPARTAMENTOS_ID` int NOT NULL COMMENT 'codigo incremental unico',
  `TCADOCENTES_CEDULA` varchar(10) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'codigo de identificacion de ciudadania',
  `TCADOCENTES_APELLIDOS` varchar(30) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'primer y segundo apellido',
  `TCADOCENTES_NOMBRES` varchar(30) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'primer y segundo nombre',
  `TCADOCENTES_GENERO` char(1) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'identificacion de genero M (masculino) o F (femenino)',
  `TCADOCENTES_DEDICACION` varchar(2) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'horario de trabajo a tiempo parcial (TP) o tiempo completo (TC)',
  `TCADOCENTES_TITULARIDAD` varchar(30) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'descripcion del tipo de docente',
  `TCADOCENTES_HORAS_CONTRATO` int DEFAULT NULL COMMENT 'horas que debe trabajar a la semana',
  `TCADOCENTES_TIPO_CONTRATO` varchar(10) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'tipo de contrato titular u ocacional',
  `TCADOCENTES_ACTIVO` tinyint(1) DEFAULT NULL COMMENT 'estado actual de actividad',
  PRIMARY KEY (`TCADOCENTES_ID_BANNER`),
  KEY `FK2_TCADOC_TCADEP_ID` (`TCADEPARTAMENTOS_ID`),
  CONSTRAINT `FK2_TCADOC_TCADEP_ID` FOREIGN KEY (`TCADEPARTAMENTOS_ID`) REFERENCES `TCADEPARTAMENTOS` (`TCADEPARTAMENTOS_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='tabla que guarda los docentes que pertenecen a cada uno de l';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TCADOCENTES`
--

LOCK TABLES `TCADOCENTES` WRITE;
/*!40000 ALTER TABLE `TCADOCENTES` DISABLE KEYS */;
INSERT INTO `TCADOCENTES` VALUES ('1',1,'1727195420','Chuquimarca Llulluna','Kevin Santiago','M',NULL,NULL,24,NULL,1),('2',1,'1724583950','Iza Quinatoa','Marco Iza','M',NULL,NULL,16,NULL,1);
/*!40000 ALTER TABLE `TCADOCENTES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TCAFIRMASA`
--

DROP TABLE IF EXISTS `TCAFIRMASA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TCAFIRMASA` (
  `TCAFIRMASA_ID_BANNER` int NOT NULL COMMENT 'codigo unico otorgado por la universidad',
  `TCAFIRMASA_NOMBRES` varchar(30) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'primer y segundo nombre de la autoridad',
  `TCAFIRMASA_APELLIDOS` varchar(30) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'primer y segundo apellido de la autoridad',
  `TCAFIRMASA_CARGO` varchar(40) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'cargo de la autoridad',
  PRIMARY KEY (`TCAFIRMASA_ID_BANNER`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='tabla que guarda los datos personales de Coordinacion de Doc';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TCAFIRMASA`
--

LOCK TABLES `TCAFIRMASA` WRITE;
/*!40000 ALTER TABLE `TCAFIRMASA` DISABLE KEYS */;
INSERT INTO `TCAFIRMASA` VALUES (1,'Dayana Katherine','Cumbal Alban','Directora DCCO');
/*!40000 ALTER TABLE `TCAFIRMASA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TCAHORARIOSC`
--

DROP TABLE IF EXISTS `TCAHORARIOSC`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TCAHORARIOSC` (
  `TCAHORARIOSC_ID` int NOT NULL AUTO_INCREMENT COMMENT 'codigo incremental unico',
  `TCAMATRICES_ID` int DEFAULT NULL COMMENT 'codigo incremental unico',
  `TCAHORARIOSC_COD_CARRERA` int DEFAULT NULL COMMENT 'codigo unico de identificacion',
  `TCAHORARIOSC_PERIODO` int DEFAULT NULL COMMENT 'codigo del periodo academico',
  `TCAHORARIOSC_NRC` int DEFAULT NULL COMMENT 'codigo numerico unico de la asignatura',
  `TCAHORARIOSC_ASIGNATURA` varchar(50) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'nombre completo de la asignatura',
  `TCAHORARIOSC_LUNES` varchar(9) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'hora de inicio y fin de la clase para el lunes',
  `TCAHORARIOSC_AULA_LUNES` varchar(6) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'codigo del aula asignada para la clase el dia lunes',
  `TCAHORARIOSC_MARTES` varchar(9) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'hora de inicio y fin de la clase para el martes',
  `TCAHORARIOSC_AULA_MARTES` varchar(6) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'codigo del aula asignada para la clase el dia martes',
  `TCAHORARIOSC_MIERCOLES` varchar(9) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'hora de inicio y fin de la clase para el miercoles',
  `TCAHORARIOSC_AULA_MIERCOLES` varchar(6) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'codigo del aula asignada para la clase el dia miercoles',
  `TCAHORARIOSC_JUEVES` varchar(9) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'hora de inicio y fin de la clase para el jueves',
  `TCAHORARIOSC_AULA_JUEVES` varchar(6) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'codigo del aula asignada para la clase el dia jueves',
  `TCAHORARIOSC_VIERNES` varchar(9) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'hora de inicio y fin de la clase para el viernes',
  `TCAHORARIOSC_AULA_VIERNES` varchar(6) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'codigo del aula asignada para la clase el dia viernes',
  PRIMARY KEY (`TCAHORARIOSC_ID`),
  KEY `FK8_TCAHOR_TCAMAT_ID` (`TCAMATRICES_ID`),
  CONSTRAINT `FK8_TCAHOR_TCAMAT_ID` FOREIGN KEY (`TCAMATRICES_ID`) REFERENCES `TCAMATRICES` (`TCAMATRICES_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='tabla que guarda el horario de clase para cada matriz de car';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TCAHORARIOSC`
--

LOCK TABLES `TCAHORARIOSC` WRITE;
/*!40000 ALTER TABLE `TCAHORARIOSC` DISABLE KEYS */;
/*!40000 ALTER TABLE `TCAHORARIOSC` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TCAHORARIOST`
--

DROP TABLE IF EXISTS `TCAHORARIOST`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TCAHORARIOST` (
  `TCAHORARIOST_ID` int NOT NULL AUTO_INCREMENT COMMENT 'codigo incremental unico',
  `TCAMATRICES_ID` int NOT NULL COMMENT 'codigo incremental unico',
  `TCAHORARIOST_JORNADA` varchar(10) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'jornada de trabajo matutina o vespertina',
  `REGISTRO_HT` varchar(10) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'determina si es el ingreso o salida',
  `TCAHORARIOST_BIOMETRICO` varchar(10) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'especificacion del lugar de trabajo, fisico si trabaja en la universidad y virtual si es fuera de la universidad',
  `TCAHORARIOST_LUNES` time DEFAULT NULL COMMENT 'hora para el dia lunes',
  `TCAHORARIOST_MARTES` time DEFAULT NULL COMMENT 'hora para el dia martes',
  `TCAHORARIOST_MIERCOLES` time DEFAULT NULL COMMENT 'hora para el dia miercoles',
  `TCAHORARIOST_JUEVES` time DEFAULT NULL COMMENT 'hora para el dia jueves',
  `TCAHORARIOST_VIERNES` time DEFAULT NULL COMMENT 'hora para el dia viernes',
  PRIMARY KEY (`TCAHORARIOST_ID`),
  KEY `FK7_TCAHOR_TCAMAT_ID` (`TCAMATRICES_ID`),
  CONSTRAINT `FK7_TCAHOR_TCAMAT_ID` FOREIGN KEY (`TCAMATRICES_ID`) REFERENCES `TCAMATRICES` (`TCAMATRICES_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='tabla que guarda los dias del horario de trabajo que deben c';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TCAHORARIOST`
--

LOCK TABLES `TCAHORARIOST` WRITE;
/*!40000 ALTER TABLE `TCAHORARIOST` DISABLE KEYS */;
/*!40000 ALTER TABLE `TCAHORARIOST` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TCAMATRICES`
--

DROP TABLE IF EXISTS `TCAMATRICES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TCAMATRICES` (
  `TCAMATRICES_ID` int NOT NULL AUTO_INCREMENT COMMENT 'codigo incremental unico',
  `TCAACTIVIDADESD_ID` int DEFAULT NULL COMMENT 'codigo incremental unico',
  `TCAPERIODOSA_CODIGO` int NOT NULL COMMENT 'codigo incremental unico',
  `TCADOCENTES_ID_BANNER` varchar(9) COLLATE utf8mb3_bin NOT NULL COMMENT 'codigo incremental unico',
  `TCAFIRMASA_ID_BANNER` int NOT NULL COMMENT 'codigo unico otorgado por la universidad',
  `TCAMATRICES_IMPARTIR_CLASE` int DEFAULT NULL COMMENT 'horas que debe impartir clase',
  `TCAMATRICES_DOCENCIA` int DEFAULT NULL COMMENT 'horas para la actividad de docencia',
  `TCAMATRICES_INVESTIGACION` int DEFAULT NULL COMMENT 'horas para las actividades de investigacion',
  `TCAMATRICES_GESTION_EDUCATIVA` int DEFAULT NULL COMMENT 'horas para las actividades de gestion educativa',
  `TCAMATRICES_VINCULACION` int DEFAULT NULL COMMENT 'horas para las actividades de vinculacion',
  `TCAMATRICES_HORAS_EXC` int DEFAULT NULL COMMENT 'horas por licencias y/o enfermedadA0catastrF3fica',
  `TCAMATRICES_MOTIVO_HORAS_EXC` varchar(60) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'motivo de las horas excepcionales',
  PRIMARY KEY (`TCAMATRICES_ID`),
  KEY `FK4_TCAMAT_TCADOC_ID_BANNER` (`TCADOCENTES_ID_BANNER`),
  KEY `FK5_TCAMAT_TCAPER_CODIGO` (`TCAPERIODOSA_CODIGO`),
  KEY `FK6_TCAMAT_TCAFIR_ID` (`TCAFIRMASA_ID_BANNER`),
  KEY `FK9_TCAMAT_TCAACT_ID` (`TCAACTIVIDADESD_ID`),
  CONSTRAINT `FK4_TCAMAT_TCADOC_ID_BANNER` FOREIGN KEY (`TCADOCENTES_ID_BANNER`) REFERENCES `TCADOCENTES` (`TCADOCENTES_ID_BANNER`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK5_TCAMAT_TCAPER_CODIGO` FOREIGN KEY (`TCAPERIODOSA_CODIGO`) REFERENCES `TCAPERIODOSA` (`TCAPERIODOSA_CODIGO`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK6_TCAMAT_TCAFIR_ID` FOREIGN KEY (`TCAFIRMASA_ID_BANNER`) REFERENCES `TCAFIRMASA` (`TCAFIRMASA_ID_BANNER`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK9_TCAMAT_TCAACT_ID` FOREIGN KEY (`TCAACTIVIDADESD_ID`) REFERENCES `TCAACTIVIDADESD` (`TCAACTIVIDADESD_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='tabla que guarda las matrices de carga horaria para cada uno';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TCAMATRICES`
--

LOCK TABLES `TCAMATRICES` WRITE;
/*!40000 ALTER TABLE `TCAMATRICES` DISABLE KEYS */;
INSERT INTO `TCAMATRICES` VALUES (3,NULL,202324,'1',1,0,0,0,0,0,1,'text'),(5,NULL,202324,'1',1,0,0,0,1,1,1,'text 1'),(6,NULL,202223,'2',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,NULL,202223,'2',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,NULL,202324,'1',1,0,0,0,1,1,1,'text 1'),(9,NULL,202223,'2',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10,NULL,202223,'2',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(11,NULL,202223,'2',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(12,NULL,202223,'2',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(13,NULL,202223,'2',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(14,NULL,202223,'2',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(15,NULL,202324,'2',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(16,NULL,202223,'2',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(17,NULL,202324,'2',1,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `TCAMATRICES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TCAPERIODOSA`
--

DROP TABLE IF EXISTS `TCAPERIODOSA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TCAPERIODOSA` (
  `TCAPERIODOSA_CODIGO` int NOT NULL AUTO_INCREMENT COMMENT 'codigo incremental unico',
  `TCAPERIODOSA_DESCRIPCION` varchar(30) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'mes de inicio y fin del periodo academico',
  `TCAPERIODOSA_SEMESTRE` int DEFAULT NULL COMMENT 'numero del semestre (1 o 2) ',
  `TCAPERIODOSA_ACTIVO` tinyint(1) DEFAULT NULL COMMENT 'estado actual de actividad, solo uno puede estar activo',
  PRIMARY KEY (`TCAPERIODOSA_CODIGO`)
) ENGINE=InnoDB AUTO_INCREMENT=202325 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='tabla que guarda los periodos academicos de la Universidad d';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TCAPERIODOSA`
--

LOCK TABLES `TCAPERIODOSA` WRITE;
/*!40000 ALTER TABLE `TCAPERIODOSA` DISABLE KEYS */;
INSERT INTO `TCAPERIODOSA` VALUES (202223,'Mayo 23 - Agosto 23',2,0),(202324,'Noviembre 23 - Marzo 24',1,1);
/*!40000 ALTER TABLE `TCAPERIODOSA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TCATITULOSA`
--

DROP TABLE IF EXISTS `TCATITULOSA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TCATITULOSA` (
  `TCATITULOSA_ID` int NOT NULL AUTO_INCREMENT COMMENT 'codigo incremental unico',
  `TCADOCENTES_ID_BANNER` varchar(9) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'codigo incremental unico',
  `TCATITULOSA_NIVEL` int DEFAULT NULL COMMENT 'nivel educativo',
  `TCATITULOSA_NOMBRE` varchar(20) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'nombre del grado de estudio',
  `TCATITULOSA_DESCRIPCION` varchar(120) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'descripcion o nombre detallado',
  `TCATITULOSA_UNIVERSIDAD` varchar(60) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'universidad de estudio',
  `TCATITULOSA_REGISTRO` varchar(30) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'codigo de registro academico',
  `TCATITULOSA_AREA` varchar(80) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'area de conocimiento',
  `TCATITULOSA_OBSERVACION` varchar(150) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'observacion o informacion adicional',
  `TCATITULOSA_ULTIMO_TITULO` tinyint(1) DEFAULT NULL COMMENT 'identificador que marca titulo mas alto del docente',
  `ESTADO_TITULO` tinyint(1) DEFAULT NULL COMMENT 'estado',
  PRIMARY KEY (`TCATITULOSA_ID`),
  KEY `FK3_TCATIT_TCADOC_ID_BANNER` (`TCADOCENTES_ID_BANNER`),
  CONSTRAINT `FK3_TCATIT_TCADOC_ID_BANNER` FOREIGN KEY (`TCADOCENTES_ID_BANNER`) REFERENCES `TCADOCENTES` (`TCADOCENTES_ID_BANNER`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='tabla que guarda los titulos academicos para cada uno de los';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TCATITULOSA`
--

LOCK TABLES `TCATITULOSA` WRITE;
/*!40000 ALTER TABLE `TCATITULOSA` DISABLE KEYS */;
INSERT INTO `TCATITULOSA` VALUES (1,'1',2,'Técnico Informático','Técnico para soluciones informaticas','Cumbayá','12342','Computación',NULL,0,1),(2,'1',3,'Ingeniería Software','Ingeniero en Software','ESPE','123412','Tecnología',NULL,1,1);
/*!40000 ALTER TABLE `TCATITULOSA` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-14  8:48:31
