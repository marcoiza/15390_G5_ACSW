-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: MATRIZCH
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.22.04.1

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
  `TCAACTIVIDADES_CODIGO` varchar(4) COLLATE utf8mb3_bin NOT NULL COMMENT 'codigo unico de identifiacion',
  `TCAACTIVIDADES_TIPO` varchar(40) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'nombre corto de la actividad: docencia, investigacion, educativa o vinculacion',
  `TCAACTIVIDADES_DESCRIPCION` varchar(200) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'descripcion detallada',
  `TCAACTIVIDADES_OBLIGATORIA` tinyint(1) DEFAULT NULL COMMENT 'determina si la actividad es obligatoria o no es obligatoria',
  PRIMARY KEY (`TCAACTIVIDADES_CODIGO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='tabla que guarda las actividades obligatorias u opcionales q';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TCAACTIVIDADES`
--

LOCK TABLES `TCAACTIVIDADES` WRITE;
/*!40000 ALTER TABLE `TCAACTIVIDADES` DISABLE KEYS */;
INSERT INTO `TCAACTIVIDADES` VALUES ('010a','doc','Impartir clases.',1),('010b','doc','Planificar y actualizar contenidos de clases, seminarios, talleres, entre otros.',1),('010c','doc','Diseñar y elaborar material didáctico, guías docentes o syllabus.',0),('010d','doc','Diseñar y elaborar libros de texto.',0),('010e','doc','Orientar y acompañar a estudiantes a través de tutorías individuales o grupales en las modalidades de estudio que la IES considere pertinente.',1),('010h','doc','Preparar, elaborar, aplicar y calificar exámenes, trabajos y prácticas.',1),('010i','doc','Dirigir trabajos para la obtención del título o grado académico.',0),('020a','inv','Diseñar, dirigir y/o ejecutar proyectos de investigación básica, aplicada, tecnológica y en artes, o proyectos de vinculación articulados a la investigación.',0),('020b','inv','Realizar investigación para la comprensión, recuperación, fortalecimiento y potenciación de los saberes ancestrales.',0),('020c','inv','Diseñar, elaborar y/o poner en marcha metodologías, instrumentos, protocolos o procedimientos operativos o de investigación.',0),('030a','ges','Desempeñar funciones de rector, vicerrector, o integrante del órgano colegiado superior.',0),('030b','ges','Desempeñar funciones o cargos de decano, subdecano o similar jerarquía.',0),('030c','ges','Dirigir escuelas, departamentos, centros o institutos de investigación.',0),('040a','vin','Impulsar procesos de cooperación y desarrollo.',0),('040b','vin','Prestar asistencia técnica, servicios especializados, así como participar en consultorías que generen beneficio a la colectividad.',0),('040c','vin','Impartir cursos de educación continua, capacitación, actualización y certificación de competencias.',0);
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
  `TCAMATRICES_ID` int NOT NULL COMMENT 'codigo incremental unico',
  `TCAACTIVIDADES_CODIGO` varchar(4) COLLATE utf8mb3_bin NOT NULL COMMENT 'codigo unico de indentificacion',
  `TCAACTIVIDADESD_HS` int DEFAULT NULL COMMENT 'numero de horas para la actividad establecida por el docente',
  `TCAACTIVIDADESD_HSP` float DEFAULT NULL COMMENT 'porcentaje de horas ocupadas por la actividad',
  PRIMARY KEY (`TCAACTIVIDADESD_ID`),
  KEY `FK_FK10_TCAACT_TCAACT_ID` (`TCAACTIVIDADES_CODIGO`),
  KEY `FK_FK9_TCAMAT_TCAACT_ID` (`TCAMATRICES_ID`),
  CONSTRAINT `FK_FK10_TCAACT_TCAACT_ID` FOREIGN KEY (`TCAACTIVIDADES_CODIGO`) REFERENCES `TCAACTIVIDADES` (`TCAACTIVIDADES_CODIGO`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_FK9_TCAMAT_TCAACT_ID` FOREIGN KEY (`TCAMATRICES_ID`) REFERENCES `TCAMATRICES` (`TCAMATRICES_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=460 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='tabla que guarda las relaciones entre las matrices de carga ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TCAACTIVIDADESD`
--

LOCK TABLES `TCAACTIVIDADESD` WRITE;
/*!40000 ALTER TABLE `TCAACTIVIDADESD` DISABLE KEYS */;
INSERT INTO `TCAACTIVIDADESD` VALUES (1,1,'010a',NULL,NULL),(2,1,'010b',NULL,NULL),(3,1,'010e',NULL,NULL),(4,1,'010h',NULL,NULL),(5,2,'010a',NULL,NULL),(6,2,'010b',NULL,NULL),(7,2,'010e',NULL,NULL),(8,2,'010h',NULL,NULL),(9,3,'010a',NULL,NULL),(10,3,'010b',NULL,NULL),(11,3,'010e',NULL,NULL),(12,3,'010h',NULL,NULL),(13,4,'010a',NULL,NULL),(14,4,'010b',NULL,NULL),(15,4,'010e',NULL,NULL),(16,4,'010h',NULL,NULL),(17,5,'010a',NULL,NULL),(18,5,'010b',NULL,NULL),(19,5,'010e',6,6.8),(20,5,'010h',NULL,NULL),(23,5,'010i',NULL,NULL),(25,5,'010c',5,9.5),(26,5,'010d',1,2),(27,5,'020b',1,2),(28,5,'040c',1,2),(29,6,'010a',6,NULL),(30,6,'010b',5,NULL),(31,6,'010e',1,NULL),(32,6,'010h',NULL,NULL),(33,7,'010a',11,NULL),(34,7,'010b',6,NULL),(35,7,'010e',NULL,NULL),(36,7,'010h',7,NULL),(37,8,'010a',111,NULL),(38,8,'010b',1,NULL),(39,8,'010e',6,NULL),(40,8,'010h',33,NULL),(41,8,'010c',2,NULL),(42,9,'010a',5,NULL),(43,9,'010b',10,NULL),(44,9,'010e',NULL,NULL),(45,9,'010h',NULL,NULL),(46,9,'010d',6,NULL),(47,10,'010a',4,NULL),(48,10,'010b',2,NULL),(49,10,'010e',7,NULL),(50,10,'010h',1,NULL),(51,10,'010c',4,NULL),(52,10,'020b',2,NULL),(53,11,'010a',NULL,NULL),(54,11,'010b',NULL,NULL),(55,11,'010e',NULL,NULL),(56,11,'010h',NULL,NULL),(57,12,'010a',5,NULL),(58,12,'010b',NULL,NULL),(59,12,'010e',4,NULL),(60,12,'010h',2,NULL),(61,12,'010c',6,NULL),(63,12,'010d',2,NULL),(64,12,'020b',3,NULL),(66,13,'010a',NULL,NULL),(67,13,'010b',NULL,NULL),(68,13,'010e',NULL,NULL),(69,13,'010h',NULL,NULL),(70,14,'010a',NULL,NULL),(71,14,'010b',NULL,NULL),(72,14,'010e',NULL,NULL),(73,14,'010h',NULL,NULL),(74,15,'010a',NULL,NULL),(75,15,'010b',NULL,NULL),(76,15,'010e',NULL,NULL),(77,15,'010h',NULL,NULL),(78,16,'010a',NULL,NULL),(79,16,'010b',NULL,NULL),(80,16,'010e',NULL,NULL),(81,16,'010h',NULL,NULL),(82,17,'010a',NULL,NULL),(83,17,'010b',NULL,NULL),(84,17,'010e',NULL,NULL),(85,17,'010h',NULL,NULL),(86,18,'010a',NULL,NULL),(87,18,'010b',NULL,NULL),(88,18,'010e',NULL,NULL),(89,18,'010h',NULL,NULL),(90,19,'010a',NULL,NULL),(91,19,'010b',NULL,NULL),(92,19,'010e',NULL,NULL),(93,19,'010h',NULL,NULL),(94,20,'010a',NULL,NULL),(95,20,'010b',NULL,NULL),(96,20,'010e',NULL,NULL),(97,20,'010h',NULL,NULL),(98,21,'010a',NULL,NULL),(99,21,'010b',NULL,NULL),(100,21,'010e',NULL,NULL),(101,21,'010h',NULL,NULL),(102,22,'010a',NULL,NULL),(103,22,'010b',NULL,NULL),(104,22,'010e',NULL,NULL),(105,22,'010h',NULL,NULL),(106,23,'010a',NULL,NULL),(107,23,'010b',NULL,NULL),(108,23,'010e',NULL,NULL),(109,23,'010h',NULL,NULL),(110,24,'010a',NULL,NULL),(111,24,'010b',NULL,NULL),(112,24,'010e',NULL,NULL),(113,24,'010h',NULL,NULL),(114,25,'010a',NULL,NULL),(115,25,'010b',NULL,NULL),(116,25,'010e',NULL,NULL),(117,25,'010h',NULL,NULL),(118,26,'010a',NULL,NULL),(119,26,'010b',6,NULL),(120,26,'010e',3,NULL),(121,26,'010h',NULL,NULL),(122,26,'010c',5,NULL),(125,26,'010d',NULL,NULL),(129,26,'020a',4,NULL),(130,26,'020c',6,NULL),(131,26,'030b',4,NULL),(132,27,'010a',5,NULL),(133,27,'010b',NULL,NULL),(135,27,'010h',NULL,NULL),(136,27,'010d',4,NULL),(137,28,'010a',NULL,NULL),(138,28,'010b',NULL,NULL),(139,28,'010e',NULL,NULL),(140,28,'010h',NULL,NULL),(141,28,'010i',NULL,NULL),(142,29,'010a',NULL,NULL),(143,29,'010b',6,NULL),(144,29,'010e',NULL,NULL),(145,29,'010h',7,NULL),(147,29,'020a',NULL,NULL),(149,29,'020b',NULL,NULL),(151,29,'020c',NULL,NULL),(152,29,'030a',NULL,NULL),(153,29,'040a',NULL,NULL),(154,29,'040b',NULL,NULL),(155,29,'040c',NULL,NULL),(156,30,'010a',NULL,NULL),(157,30,'010b',NULL,NULL),(158,30,'010e',NULL,NULL),(159,30,'010h',NULL,NULL),(160,31,'010a',2,12.5),(161,31,'010b',3,15),(162,31,'010e',NULL,NULL),(163,31,'010h',NULL,NULL),(164,32,'010a',3,15),(165,32,'010b',NULL,NULL),(166,32,'010e',NULL,NULL),(167,32,'010h',NULL,NULL),(168,32,'010c',NULL,NULL),(169,32,'010d',NULL,NULL),(170,33,'010a',2,10),(171,33,'010b',3,15),(172,33,'010e',NULL,NULL),(173,33,'010h',NULL,NULL),(174,33,'010c',3,15),(175,33,'010d',4,20),(176,33,'010i',NULL,NULL),(177,33,'020a',0,0),(178,34,'010a',NULL,NULL),(179,34,'010b',NULL,NULL),(180,34,'010e',NULL,NULL),(181,34,'010h',NULL,NULL),(182,34,'020a',3,15),(183,34,'010c',4,20),(184,34,'030a',NULL,NULL),(185,34,'010d',NULL,NULL),(186,35,'010a',NULL,NULL),(187,35,'010b',NULL,NULL),(188,35,'010e',NULL,NULL),(189,35,'010h',NULL,NULL),(190,35,'010c',NULL,NULL),(191,35,'010i',NULL,NULL),(192,35,'010d',3,15),(193,36,'010a',NULL,NULL),(194,36,'010b',NULL,NULL),(195,36,'010e',NULL,NULL),(196,36,'010h',NULL,NULL),(197,36,'010c',NULL,NULL),(198,36,'010d',NULL,NULL),(199,36,'020b',NULL,NULL),(200,36,'010i',NULL,NULL),(201,37,'010a',NULL,NULL),(202,37,'010b',NULL,NULL),(203,37,'010e',NULL,NULL),(204,37,'010h',4,20),(205,37,'010d',NULL,NULL),(206,37,'010c',NULL,NULL),(207,37,'020b',NULL,NULL),(208,37,'010i',NULL,NULL),(209,38,'010a',NULL,NULL),(210,38,'010b',NULL,NULL),(211,38,'010e',3,15),(212,38,'010h',NULL,NULL),(213,38,'010c',NULL,NULL),(214,38,'010d',NULL,NULL),(215,38,'010i',NULL,NULL),(216,39,'010a',NULL,NULL),(217,39,'010b',NULL,NULL),(218,39,'010e',4,20),(219,39,'010h',NULL,NULL),(220,39,'010c',NULL,NULL),(221,39,'010d',NULL,NULL),(222,39,'020a',NULL,NULL),(223,39,'010i',NULL,NULL),(224,40,'010a',4,20),(225,40,'010b',0,0),(226,40,'010e',0,0),(227,40,'010h',0,0),(228,40,'010c',20,100),(229,41,'010a',0,0),(230,41,'010b',0,0),(231,41,'010e',0,0),(232,41,'010h',0,0),(233,41,'010c',2,10),(234,41,'010d',3,15),(235,41,'010i',10,50),(236,42,'010a',0,0),(237,42,'010b',1,5),(238,42,'010e',2,10),(239,42,'010h',1,5),(240,42,'010c',1,5),(241,42,'010d',1,5),(242,42,'010i',0,0),(243,43,'010a',2,10),(244,43,'010b',1,5),(245,43,'010e',0,0),(246,43,'010h',0,0),(247,43,'010c',0,0),(248,44,'010a',2,10),(249,44,'010b',18,90),(250,44,'010e',0,0),(251,44,'010h',0,0),(252,45,'010a',3,15),(253,45,'010b',1,5),(254,45,'010e',1,5),(255,45,'010h',0,0),(256,45,'010c',3,15),(257,45,'010d',-26,-130),(258,46,'010a',13,65),(259,46,'010b',2,10),(260,46,'010e',5,25),(261,46,'010h',0,0),(262,47,'010a',3,15),(263,47,'010b',13,65),(264,47,'010e',4,20),(265,47,'010h',0,0),(268,47,'010d',0,0),(269,47,'010c',0,0),(270,48,'010a',0,0),(271,48,'010b',0,0),(272,48,'010e',0,0),(273,48,'010h',0,0),(278,48,'010c',1,5),(279,48,'010d',2,10),(280,49,'010a',0,0),(281,49,'010b',0,0),(282,49,'010e',0,0),(283,49,'010h',0,0),(284,50,'010a',0,0),(285,50,'010b',0,0),(286,50,'010e',0,0),(287,50,'010h',0,0),(288,51,'010a',0,0),(289,51,'010b',0,0),(290,51,'010e',0,0),(291,51,'010h',0,0),(292,52,'010a',0,0),(293,52,'010b',0,0),(294,52,'010e',0,0),(295,52,'010h',0,0),(296,53,'010a',0,0),(297,53,'010b',0,0),(298,53,'010e',0,0),(299,53,'010h',0,0),(300,54,'010a',0,0),(301,54,'010b',0,0),(302,54,'010e',0,0),(303,54,'010h',0,0),(304,55,'010a',0,0),(305,55,'010b',0,0),(306,55,'010e',0,0),(307,55,'010h',0,0),(308,56,'010a',0,0),(309,56,'010b',0,0),(310,56,'010e',0,0),(311,56,'010h',0,0),(312,57,'010a',0,0),(313,57,'010b',0,0),(314,57,'010e',0,0),(315,57,'010h',0,0),(316,58,'010a',0,0),(317,58,'010b',0,0),(318,58,'010e',0,0),(319,58,'010h',0,0),(320,59,'010a',0,0),(321,59,'010b',0,0),(322,59,'010e',0,0),(323,59,'010h',0,0),(324,60,'010a',0,0),(325,60,'010b',0,0),(326,60,'010e',0,0),(327,60,'010h',0,0),(328,61,'010a',0,0),(329,61,'010b',0,0),(330,61,'010e',0,0),(331,61,'010h',0,0),(332,62,'010a',0,0),(333,62,'010b',0,0),(334,62,'010e',0,0),(335,62,'010h',0,0),(336,63,'010a',0,0),(337,63,'010b',0,0),(338,63,'010e',0,0),(339,63,'010h',0,0),(340,64,'010a',0,0),(341,64,'010b',0,0),(342,64,'010e',0,0),(343,64,'010h',0,0),(344,65,'010a',0,0),(345,65,'010b',0,0),(346,65,'010e',0,0),(347,65,'010h',0,0),(348,66,'010a',0,0),(349,66,'010b',0,0),(350,66,'010e',0,0),(351,66,'010h',0,0),(352,67,'010a',0,0),(353,67,'010b',0,0),(354,67,'010e',0,0),(355,67,'010h',0,0),(356,68,'010a',0,0),(357,68,'010b',0,0),(358,68,'010e',0,0),(359,68,'010h',0,0),(360,69,'010a',0,0),(361,69,'010b',0,0),(362,69,'010e',0,0),(363,69,'010h',0,0),(364,70,'010a',0,0),(365,70,'010b',0,0),(366,70,'010e',0,0),(367,70,'010h',0,0),(368,71,'010a',0,0),(369,71,'010b',0,0),(370,71,'010e',0,0),(371,71,'010h',0,0),(372,72,'010a',0,0),(373,72,'010b',0,0),(374,72,'010e',0,0),(375,72,'010h',0,0),(376,73,'010a',0,0),(377,73,'010b',0,0),(378,73,'010e',0,0),(379,73,'010h',0,0),(380,74,'010a',0,0),(381,74,'010b',0,0),(382,74,'010e',0,0),(383,74,'010h',0,0),(384,75,'010a',0,0),(385,75,'010b',0,0),(386,75,'010e',0,0),(387,75,'010h',0,0),(388,76,'010a',0,0),(389,76,'010b',0,0),(390,76,'010e',0,0),(391,76,'010h',0,0),(392,77,'010a',0,0),(393,77,'010b',0,0),(394,77,'010e',0,0),(395,77,'010h',0,0),(396,78,'010a',0,0),(397,78,'010b',0,0),(398,78,'010e',0,0),(399,78,'010h',0,0),(400,79,'010a',0,0),(401,79,'010b',0,0),(402,79,'010e',0,0),(403,79,'010h',0,0),(404,80,'010a',0,0),(405,80,'010b',0,0),(406,80,'010e',0,0),(407,80,'010h',0,0),(408,81,'010a',0,0),(409,81,'010b',0,0),(410,81,'010e',0,0),(411,81,'010h',0,0),(412,82,'010a',0,0),(413,82,'010b',0,0),(414,82,'010e',0,0),(415,82,'010h',0,0),(416,83,'010a',0,0),(417,83,'010b',0,0),(418,83,'010e',0,0),(419,83,'010h',0,0),(420,84,'010a',0,0),(421,84,'010b',0,0),(422,84,'010e',0,0),(423,84,'010h',0,0),(424,85,'010a',0,0),(425,85,'010b',0,0),(426,85,'010e',0,0),(427,85,'010h',0,0),(428,86,'010a',0,0),(429,86,'010b',0,0),(430,86,'010e',0,0),(431,86,'010h',0,0),(432,87,'010a',0,0),(433,87,'010b',0,0),(434,87,'010e',0,0),(435,87,'010h',0,0),(436,88,'010a',0,0),(437,88,'010b',0,0),(438,88,'010e',0,0),(439,88,'010h',0,0),(440,89,'010a',0,0),(441,89,'010b',0,0),(442,89,'010e',0,0),(443,89,'010h',0,0),(444,90,'010a',0,0),(445,90,'010b',0,0),(446,90,'010e',0,0),(447,90,'010h',0,0),(448,91,'010a',0,0),(449,91,'010b',0,0),(450,91,'010e',0,0),(451,91,'010h',0,0),(452,92,'010a',0,0),(453,92,'010b',0,0),(454,92,'010e',0,0),(455,92,'010h',0,0),(456,93,'010a',0,0),(457,93,'010b',0,0),(458,93,'010e',0,0),(459,93,'010h',0,0);
/*!40000 ALTER TABLE `TCAACTIVIDADESD` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TCACARRERAS`
--

DROP TABLE IF EXISTS `TCACARRERAS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TCACARRERAS` (
  `TCACARRERAS_CODIGO` varchar(10) COLLATE utf8mb3_bin NOT NULL COMMENT 'codigo unico de identificacion para cada carrera',
  `TCADEPARTAMENTOS_ID` int NOT NULL COMMENT 'codigo incremental unico',
  `TCACARRERAS_NOMBRE` varchar(100) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'nombre completo',
  `TCACARRERAS_ESTADO` varchar(20) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'estado vigente o en proceso cierre',
  `TCACARRERAS_DIRECTOR` varchar(40) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'nombre del director encargado',
  `TCACARRERAS_MODALIDAD` varchar(10) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'modalidad presencial o en linea',
  `TCACARRERAS_ACTIVO` tinyint(1) DEFAULT NULL COMMENT 'estado de actividad',
  PRIMARY KEY (`TCACARRERAS_CODIGO`),
  KEY `FK_FK1_TCACAR_TCADEP_ID` (`TCADEPARTAMENTOS_ID`),
  CONSTRAINT `FK_FK1_TCACAR_TCADEP_ID` FOREIGN KEY (`TCADEPARTAMENTOS_ID`) REFERENCES `TCADEPARTAMENTOS` (`TCADEPARTAMENTOS_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
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
  KEY `FK_FK2_TCADOC_TCADEP_ID` (`TCADEPARTAMENTOS_ID`),
  CONSTRAINT `FK_FK2_TCADOC_TCADEP_ID` FOREIGN KEY (`TCADEPARTAMENTOS_ID`) REFERENCES `TCADEPARTAMENTOS` (`TCADEPARTAMENTOS_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='tabla que guarda los docentes que pertenecen a cada uno de l';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TCADOCENTES`
--

LOCK TABLES `TCADOCENTES` WRITE;
/*!40000 ALTER TABLE `TCADOCENTES` DISABLE KEYS */;
INSERT INTO `TCADOCENTES` VALUES ('1',1,'1727195420','Chuquimarca Llulluna','Kevin Santiago','M','MD',NULL,20,NULL,1),('2',1,'1724583950','Iza Quinatoa','Marco Iza','M','TC',NULL,40,NULL,1);
/*!40000 ALTER TABLE `TCADOCENTES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TCAFIRMASA`
--

DROP TABLE IF EXISTS `TCAFIRMASA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TCAFIRMASA` (
  `TCAFIRMASA_ID_BANNER` varchar(9) COLLATE utf8mb3_bin NOT NULL COMMENT 'codigo unico otorgado por la universidad',
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
INSERT INTO `TCAFIRMASA` VALUES ('1','Dayana Katherine','Cumbal Alban','Directora DCCO');
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
  `TCAMATRICES_ID` int NOT NULL COMMENT 'codigo incremental unico',
  `TCAHORARIOSC_COD_CARRERA` varchar(10) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'codigo unico de identificacion para cada carrera',
  `TCAHORARIOSC_PERIODO` int DEFAULT NULL COMMENT 'codigo del periodo academico',
  `TCAHORARIOSC_NRC` int DEFAULT NULL COMMENT 'codigo numerico unico de la asignatura',
  `TCAHORARIOSC_ASIGNATURA` varchar(50) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'nombre completo de la asignatura',
  `TCAHORARIOSC_TIPO` varchar(7) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'define si es una clase o tutoria',
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
  KEY `FK_FK8_TCAHOR_TCAMAT_ID` (`TCAMATRICES_ID`),
  CONSTRAINT `FK_FK8_TCAHOR_TCAMAT_ID` FOREIGN KEY (`TCAMATRICES_ID`) REFERENCES `TCAMATRICES` (`TCAMATRICES_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='tabla que guarda el horario de clase para cada matriz de car';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TCAHORARIOSC`
--

LOCK TABLES `TCAHORARIOSC` WRITE;
/*!40000 ALTER TABLE `TCAHORARIOSC` DISABLE KEYS */;
INSERT INTO `TCAHORARIOSC` VALUES (1,6,'ISOJ',202223,4232,'Base de Datos','Clase','0700_0900','H202',':_:',NULL,'0700_0900','H202','_',NULL,'_',NULL),(2,29,'ISOJ',202223,1234,'BD','Clase','0700_0900','H200',':_:',NULL,'0700_0900','H200','_',NULL,'_',NULL),(3,48,'ISOJ',202223,2322,'Dase de Datos','Clase','0700_0900','H200',':_:',NULL,'0700_0900','H200','_',NULL,'_',NULL),(4,65,'ISOJ',202223,3245,'Dase de Datos','Clase','_:_:','H200',':_:_:',NULL,'_:_:',NULL,'_:_:',NULL,'_:_:',NULL),(5,67,'ISOJ',202223,1234,'Arquitectura','Tutoría','0810_0813','H-200',':_:',NULL,'0811_1112',NULL,'_',NULL,'_',NULL),(6,69,'ISOJ',202223,123,'Arquitectura','Clase','0800_1000','H300','1100_0800','H-200','_:_:',NULL,'_:_:',NULL,'_:_:',NULL),(7,69,'ISOJ',202223,12,'Matematicas','Tutoría','_',NULL,':_:',NULL,'_',NULL,'_',NULL,'_',NULL);
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
  KEY `FK_FK7_TCAHOR_TCAMAT_ID` (`TCAMATRICES_ID`),
  CONSTRAINT `FK_FK7_TCAHOR_TCAMAT_ID` FOREIGN KEY (`TCAMATRICES_ID`) REFERENCES `TCAMATRICES` (`TCAMATRICES_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=373 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='tabla que guarda los dias del horario de trabajo que deben c';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TCAHORARIOST`
--

LOCK TABLES `TCAHORARIOST` WRITE;
/*!40000 ALTER TABLE `TCAHORARIOST` DISABLE KEYS */;
INSERT INTO `TCAHORARIOST` VALUES (1,1,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(2,1,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(3,1,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(4,1,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(5,2,'Matutina','Ingreso','fisico','12:00:33',NULL,NULL,NULL,NULL),(6,2,'Matutina','Salida','fisico','20:00:42',NULL,NULL,NULL,NULL),(7,2,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(8,2,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(9,3,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(10,3,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(11,3,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(12,3,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(13,4,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(14,4,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(15,4,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(16,4,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(17,5,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(18,5,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(19,5,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(20,5,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(21,6,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(22,6,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(23,6,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(24,6,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(25,7,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(26,7,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(27,7,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(28,7,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(29,8,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(30,8,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(31,8,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(32,8,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(33,9,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(34,9,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(35,9,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(36,9,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(37,10,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(38,10,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(39,10,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(40,10,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(41,11,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(42,11,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(43,11,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(44,11,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(45,12,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(46,12,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(47,12,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(48,12,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(49,13,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(50,13,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(51,13,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(52,13,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(53,14,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(54,14,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(55,14,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(56,14,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(57,15,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(58,15,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(59,15,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(60,15,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(61,16,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(62,16,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(63,16,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(64,16,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(65,17,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(66,17,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(67,17,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(68,17,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(69,18,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(70,18,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(71,18,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(72,18,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(73,19,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(74,19,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(75,19,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(76,19,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(77,20,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(78,20,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(79,20,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(80,20,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(81,21,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(82,21,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(83,21,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(84,21,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(85,22,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(86,22,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(87,22,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(88,22,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(89,23,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(90,23,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(91,23,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(92,23,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(93,24,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(94,24,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(95,24,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(96,24,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(97,25,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(98,25,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(99,25,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(100,25,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(101,26,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(102,26,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(103,26,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(104,26,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(105,27,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(106,27,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(107,27,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(108,27,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(109,28,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(110,28,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(111,28,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(112,28,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(113,29,'Matutina','Ingreso','fisico','13:00:00',NULL,NULL,NULL,NULL),(114,29,'Matutina','Salida','fisico','13:30:02',NULL,NULL,NULL,NULL),(115,29,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(116,29,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(117,30,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(118,30,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(119,30,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(120,30,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(121,31,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(122,31,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(123,31,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(124,31,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(125,32,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(126,32,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(127,32,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(128,32,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(129,33,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(130,33,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(131,33,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(132,33,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(133,34,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(134,34,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(135,34,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(136,34,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(137,35,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(138,35,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(139,35,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(140,35,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(141,36,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(142,36,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(143,36,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(144,36,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(145,37,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(146,37,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(147,37,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(148,37,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(149,38,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(150,38,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(151,38,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(152,38,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(153,39,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(154,39,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(155,39,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(156,39,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(157,40,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(158,40,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(159,40,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(160,40,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(161,41,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(162,41,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(163,41,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(164,41,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(165,42,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(166,42,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(167,42,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(168,42,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(169,43,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(170,43,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(171,43,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(172,43,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(173,44,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(174,44,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(175,44,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(176,44,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(177,45,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(178,45,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(179,45,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(180,45,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(181,46,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(182,46,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(183,46,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(184,46,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(185,47,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(186,47,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(187,47,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(188,47,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(189,48,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(190,48,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(191,48,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(192,48,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(193,49,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(194,49,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(195,49,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(196,49,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(197,50,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(198,50,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(199,50,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(200,50,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(201,51,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(202,51,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(203,51,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(204,51,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(205,52,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(206,52,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(207,52,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(208,52,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(209,53,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(210,53,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(211,53,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(212,53,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(213,54,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(214,54,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(215,54,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(216,54,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(217,55,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(218,55,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(219,55,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(220,55,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(221,56,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(222,56,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(223,56,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(224,56,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(225,57,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(226,57,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(227,57,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(228,57,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(229,58,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(230,58,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(231,58,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(232,58,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(233,59,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(234,59,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(235,59,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(236,59,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(237,60,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(238,60,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(239,60,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(240,60,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(241,61,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(242,61,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(243,61,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(244,61,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(245,62,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(246,62,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(247,62,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(248,62,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(249,63,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(250,63,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(251,63,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(252,63,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(253,64,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(254,64,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(255,64,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(256,64,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(257,65,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(258,65,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(259,65,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(260,65,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(261,66,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(262,66,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(263,66,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(264,66,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(265,67,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(266,67,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(267,67,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(268,67,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(269,68,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(270,68,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(271,68,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(272,68,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(273,69,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(274,69,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(275,69,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(276,69,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(277,70,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(278,70,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(279,70,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(280,70,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(281,71,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(282,71,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(283,71,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(284,71,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(285,72,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(286,72,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(287,72,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(288,72,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(289,73,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(290,73,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(291,73,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(292,73,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(293,74,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(294,74,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(295,74,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(296,74,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(297,75,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(298,75,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(299,75,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(300,75,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(301,76,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(302,76,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(303,76,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(304,76,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(305,77,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(306,77,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(307,77,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(308,77,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(309,78,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(310,78,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(311,78,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(312,78,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(313,79,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(314,79,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(315,79,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(316,79,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(317,80,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(318,80,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(319,80,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(320,80,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(321,81,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(322,81,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(323,81,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(324,81,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(325,82,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(326,82,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(327,82,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(328,82,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(329,83,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(330,83,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(331,83,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(332,83,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(333,84,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(334,84,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(335,84,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(336,84,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(337,85,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(338,85,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(339,85,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(340,85,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(341,86,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(342,86,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(343,86,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(344,86,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(345,87,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(346,87,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(347,87,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(348,87,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(349,88,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(350,88,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(351,88,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(352,88,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(353,89,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(354,89,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(355,89,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(356,89,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(357,90,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(358,90,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(359,90,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(360,90,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(361,91,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(362,91,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(363,91,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(364,91,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(365,92,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(366,92,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(367,92,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(368,92,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(369,93,'Matutina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(370,93,'Matutina','Salida','fisico',NULL,NULL,NULL,NULL,NULL),(371,93,'Vespertina','Ingreso','fisico',NULL,NULL,NULL,NULL,NULL),(372,93,'Vespertina','Salida','fisico',NULL,NULL,NULL,NULL,NULL);
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
  `TCAPERIODOSA_CODIGO` int NOT NULL COMMENT 'codigo incremental unico',
  `TCADOCENTES_ID_BANNER` varchar(9) COLLATE utf8mb3_bin NOT NULL COMMENT 'codigo incremental unico',
  `TCAFIRMASA_ID_BANNER` varchar(9) COLLATE utf8mb3_bin NOT NULL COMMENT 'codigo unico otorgado por la universidad',
  `TCAMATRICES_IMPARTIR_CLASE` int DEFAULT NULL COMMENT 'horas que debe impartir clase',
  `TCAMATRICES_DOCENCIA` int DEFAULT NULL COMMENT 'horas para la actividad de docencia',
  `TCAMATRICES_INVESTIGACION` int DEFAULT NULL COMMENT 'horas para las actividades de investigacion',
  `TCAMATRICES_GESTION_EDUCATIVA` int DEFAULT NULL COMMENT 'horas para las actividades de gestion educativa',
  `TCAMATRICES_VINCULACION` int DEFAULT NULL COMMENT 'horas para las actividades de vinculacion',
  `TCAMATRICES_HORAS_EXC` int DEFAULT NULL COMMENT 'horas por licencias y/o enfermedadA0catastrF3fica',
  `TCAMATRICES_MOTIVO_HORAS_EXC` varchar(60) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'motivo de las horas excepcionales',
  `TCAMATRICES_FECHA_CREACION` date DEFAULT NULL COMMENT 'fecha de creaciF3n de la matriz',
  `TCAMATRICES_FECHA_ACTUALIZACION` date DEFAULT NULL COMMENT 'FAltima fecha de actualizaciF3n de la matriz',
  PRIMARY KEY (`TCAMATRICES_ID`),
  KEY `FK_FK4_TCAMAT_TCADOC_ID_BANNER` (`TCADOCENTES_ID_BANNER`),
  KEY `FK_FK5_TCAMAT_TCAPER_CODIGO` (`TCAPERIODOSA_CODIGO`),
  KEY `FK_FK6_TCAMAT_TCAFIR_ID` (`TCAFIRMASA_ID_BANNER`),
  CONSTRAINT `FK_FK4_TCAMAT_TCADOC_ID_BANNER` FOREIGN KEY (`TCADOCENTES_ID_BANNER`) REFERENCES `TCADOCENTES` (`TCADOCENTES_ID_BANNER`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_FK5_TCAMAT_TCAPER_CODIGO` FOREIGN KEY (`TCAPERIODOSA_CODIGO`) REFERENCES `TCAPERIODOSA` (`TCAPERIODOSA_CODIGO`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_FK6_TCAMAT_TCAFIR_ID` FOREIGN KEY (`TCAFIRMASA_ID_BANNER`) REFERENCES `TCAFIRMASA` (`TCAFIRMASA_ID_BANNER`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='tabla que guarda las matrices de carga horaria para cada uno';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TCAMATRICES`
--

LOCK TABLES `TCAMATRICES` WRITE;
/*!40000 ALTER TABLE `TCAMATRICES` DISABLE KEYS */;
INSERT INTO `TCAMATRICES` VALUES (1,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-01-27','2024-01-27'),(2,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-01-27','2024-01-27'),(3,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-01-28','2024-01-28'),(4,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-01-28','2024-01-28'),(5,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-01-28','2024-01-28'),(6,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-01-28','2024-01-28'),(7,202223,'1','1',5,NULL,NULL,NULL,NULL,NULL,NULL,'2024-01-29','2024-01-29'),(8,202223,'1','1',144,NULL,NULL,NULL,NULL,NULL,NULL,'2024-01-29','2024-01-29'),(9,202223,'1','1',13,NULL,NULL,NULL,NULL,NULL,NULL,'2024-01-29','2024-01-29'),(10,202223,'1','1',18,NULL,2,NULL,NULL,NULL,NULL,'2024-01-29','2024-01-29'),(11,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-01-29','2024-01-29'),(12,202324,'1','1',19,NULL,3,NULL,NULL,NULL,NULL,'2024-01-31','2024-01-31'),(13,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-01','2024-02-01'),(14,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-01','2024-02-01'),(15,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-01','2024-02-01'),(16,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-01','2024-02-01'),(17,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-01','2024-02-01'),(18,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-01','2024-02-01'),(19,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-01','2024-02-01'),(20,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-01','2024-02-01'),(21,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-01','2024-02-01'),(22,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-01','2024-02-01'),(23,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-01','2024-02-01'),(24,202324,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-01','2024-02-01'),(25,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-01','2024-02-01'),(26,202223,'1','1',21,NULL,10,4,NULL,NULL,NULL,'2024-02-03','2024-02-03'),(27,202223,'1','1',9,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-03','2024-02-03'),(28,202223,'1','1',0,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-03','2024-02-03'),(29,202223,'1','1',13,NULL,0,0,0,NULL,NULL,'2024-02-03','2024-02-03'),(30,202324,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-04','2024-02-04'),(31,202223,'1','1',5,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-04','2024-02-04'),(32,202223,'1','1',3,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-04','2024-02-04'),(33,202223,'1','1',12,NULL,0,NULL,NULL,NULL,NULL,'2024-02-04','2024-02-04'),(34,202223,'1','1',4,NULL,3,0,NULL,NULL,NULL,'2024-02-04','2024-02-04'),(35,202223,'1','1',3,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-04','2024-02-04'),(36,202223,'1','1',0,NULL,0,NULL,NULL,NULL,NULL,'2024-02-04','2024-02-04'),(37,202223,'1','1',4,NULL,0,NULL,NULL,NULL,NULL,'2024-02-04','2024-02-04'),(38,202223,'1','1',3,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-04','2024-02-04'),(39,202223,'1','1',4,NULL,0,NULL,NULL,NULL,NULL,'2024-02-04','2024-02-04'),(40,202223,'1','1',24,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-04','2024-02-04'),(41,202223,'1','1',20,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-04','2024-02-04'),(42,202223,'1','1',10,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-04','2024-02-04'),(43,202223,'1','1',4,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-04','2024-02-04'),(44,202223,'1','1',20,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-04','2024-02-04'),(45,202223,'1','1',20,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-04','2024-02-04'),(46,202223,'1','1',20,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-04','2024-02-04'),(47,202223,'1','1',20,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-04','2024-02-04'),(48,202223,'1','1',3,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-04','2024-02-04'),(49,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-05','2024-02-05'),(50,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-05','2024-02-05'),(51,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-05','2024-02-05'),(52,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-05','2024-02-05'),(53,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-05','2024-02-05'),(54,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-05','2024-02-05'),(55,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-05','2024-02-05'),(56,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-05','2024-02-05'),(57,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-05','2024-02-05'),(58,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-05','2024-02-05'),(59,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-05','2024-02-05'),(60,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-05','2024-02-05'),(61,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-05','2024-02-05'),(62,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-05','2024-02-05'),(63,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-05','2024-02-05'),(64,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-06','2024-02-06'),(65,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-07','2024-02-07'),(66,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-07','2024-02-07'),(67,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-07','2024-02-07'),(68,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-07','2024-02-07'),(69,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-07','2024-02-07'),(70,202324,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(71,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(72,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(73,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(74,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(75,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(76,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(77,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(78,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(79,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(80,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(81,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(82,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(83,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(84,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(85,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(86,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(87,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(88,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(89,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(90,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(91,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(92,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10'),(93,202223,'1','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2024-02-10','2024-02-10');
/*!40000 ALTER TABLE `TCAMATRICES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TCAPERIODOSA`
--

DROP TABLE IF EXISTS `TCAPERIODOSA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TCAPERIODOSA` (
  `TCAPERIODOSA_CODIGO` int NOT NULL COMMENT 'codigo incremental unico',
  `TCAPERIODOSA_DESCRIPCION` varchar(30) COLLATE utf8mb3_bin DEFAULT NULL COMMENT 'mes de inicio y fin del periodo academico',
  `TCAPERIODOSA_SEMESTRE` int DEFAULT NULL COMMENT 'numero del semestre (1 o 2) ',
  `TCAPERIODOSA_ACTIVO` tinyint(1) DEFAULT NULL COMMENT 'estado actual de actividad, solo uno puede estar activo',
  PRIMARY KEY (`TCAPERIODOSA_CODIGO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin COMMENT='tabla que guarda los periodos academicos de la Universidad d';
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
  KEY `FK_FK3_TCATIT_TCADOC_ID_BANNER` (`TCADOCENTES_ID_BANNER`),
  CONSTRAINT `FK_FK3_TCATIT_TCADOC_ID_BANNER` FOREIGN KEY (`TCADOCENTES_ID_BANNER`) REFERENCES `TCADOCENTES` (`TCADOCENTES_ID_BANNER`) ON DELETE RESTRICT ON UPDATE RESTRICT
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

-- Dump completed on 2024-02-11 20:52:42
