/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     12/27/2023 7:56:35 PM                        */
/*==============================================================*/


drop table if exists TCAACTIVIDADES;

drop table if exists TCAACTIVIDADESD;

drop table if exists TCACARRERAS;

drop table if exists TCADEPARTAMENTOS;

drop table if exists TCADOCENTES;

drop table if exists TCAFIRMASA;

drop table if exists TCAHORARIOSC;

drop table if exists TCAHORARIOST;

drop table if exists TCAMATRICES;

drop table if exists TCAPERIODOSA;

drop table if exists TCATITULOSA;

/*==============================================================*/
/* Table: TCAACTIVIDADES                                        */
/*==============================================================*/
create table TCAACTIVIDADES
(
   TCAACTIVIDADES_ID    int not null auto_increment comment 'codigo incremental unico',
   TCAACTIVIDADESD_ID   int comment 'codigo incremental unico',
   TCAACTIVIDADES_NOMBRE varchar(40) comment 'nombre corto de la actividad',
   TCAACTIVIDADES_DESCRIPCION varchar(100) comment 'descripcion detallada',
   TCAACTIVIDADES_OBLIGATORIA bool comment 'determina si la actividad es obligatoria o no es obligatoria',
   primary key (TCAACTIVIDADES_ID)
);

alter table TCAACTIVIDADES comment 'tabla que guarda las actividades obligatorias u opcionales q';

/*==============================================================*/
/* Table: TCAACTIVIDADESD                                       */
/*==============================================================*/
create table TCAACTIVIDADESD
(
   TCAACTIVIDADESD_ID   int not null auto_increment comment 'codigo incremental unico',
   primary key (TCAACTIVIDADESD_ID)
);

alter table TCAACTIVIDADESD comment 'tabla que guarda las relaciones entre las matrices de carga ';

/*==============================================================*/
/* Table: TCACARRERAS                                           */
/*==============================================================*/
create table TCACARRERAS
(
   TCACARRERAS_ID       int not null auto_increment comment 'codigo incremental unico',
   TCADEPARTAMENTOS_ID  int not null comment 'codigo incremental unico',
   TCACARRERAS_NOMBRE   varchar(100) comment 'nombre completo',
   TCACARRERAS_ESTADO   varchar(20) comment 'estado vigente o en proceso cierre',
   TCACARRERAS_DIRECTOR varchar(40) comment 'nombre del director encargado',
   TCACARRERAS_MODALIDAD varchar(10) comment 'modalidad presencial o en linea',
   TCACARRERAS_ACTIVO   bool comment 'estado de actividad',
   primary key (TCACARRERAS_ID)
);

alter table TCACARRERAS comment 'tabla de guarda las carreras que pertenecen a cada uno de lo';

/*==============================================================*/
/* Table: TCADEPARTAMENTOS                                      */
/*==============================================================*/
create table TCADEPARTAMENTOS
(
   TCADEPARTAMENTOS_ID  int not null auto_increment comment 'codigo incremental unico',
   TCADEPARTAMENTOS_NOMBRE varchar(100) comment 'nombre completo',
   TCADEPARTAMENTOS_SIGLA varchar(10) comment 'siglas',
   TCADEPARTAMENTOS_ACTIVO bool comment 'estado de actividad',
   primary key (TCADEPARTAMENTOS_ID)
);

alter table TCADEPARTAMENTOS comment 'tabla que guarda los departamentos existentes en la universi';

/*==============================================================*/
/* Table: TCADOCENTES                                           */
/*==============================================================*/
create table TCADOCENTES
(
   TCADOCENTES_ID_BANNER varchar(9) not null comment 'codigo incremental unico',
   TCADEPARTAMENTOS_ID  int not null comment 'codigo incremental unico',
   TCADOCENTES_CEDULA   varchar(10) comment 'codigo de identificacion de ciudadania',
   TCADOCENTES_APELLIDOS varchar(30) comment 'primer y segundo apellido',
   TCADOCENTES_NOMBRES  varchar(30) comment 'primer y segundo nombre',
   TCADOCENTES_GENERO   char(1) comment 'identificacion de genero M (masculino) o F (femenino)',
   TCADOCENTES_DEDICACION varchar(2) comment 'horario de trabajo a tiempo parcial (TP) o tiempo completo (TC)',
   TCADOCENTES_TITULARIDAD varchar(30) comment 'descripcion del tipo de docente',
   TCADOCENTES_HORAS_CONTRATO int comment 'horas que debe trabajar a la semana',
   TCADOCENTES_TIPO_CONTRATO varchar(10) comment 'tipo de contrato titular u ocacional',
   TCADOCENTES_ACTIVO   bool comment 'estado actual de actividad',
   primary key (TCADOCENTES_ID_BANNER)
);

alter table TCADOCENTES comment 'tabla que guarda los docentes que pertenecen a cada uno de l';

/*==============================================================*/
/* Table: TCAFIRMASA                                            */
/*==============================================================*/
create table TCAFIRMASA
(
   TCAFIRMASA_ID_BANNER int not null comment 'codigo unico otorgado por la universidad',
   TCAFIRMASA_NOMBRES   varchar(30) comment 'primer y segundo nombre de la autoridad',
   TCAFIRMASA_APELLIDOS varchar(30) comment 'primer y segundo apellido de la autoridad',
   TCAFIRMASA_CARGO     varchar(40) comment 'cargo de la autoridad',
   primary key (TCAFIRMASA_ID_BANNER)
);

alter table TCAFIRMASA comment 'tabla que guarda los datos personales de Coordinacion de Doc';

/*==============================================================*/
/* Table: TCAHORARIOSC                                          */
/*==============================================================*/
create table TCAHORARIOSC
(
   TCAHORARIOSC_ID      int not null auto_increment comment 'codigo incremental unico',
   TCAMATRICES_ID       int comment 'codigo incremental unico',
   TCAHORARIOSC_COD_CARRERA int comment 'codigo unico de identificacion',
   TCAHORARIOSC_PERIODO int comment 'codigo del periodo academico',
   TCAHORARIOSC_NRC     int comment 'codigo numerico unico de la asignatura',
   TCAHORARIOSC_ASIGNATURA varchar(50) comment 'nombre completo de la asignatura',
   TCAHORARIOSC_LUNES   varchar(9) comment 'hora de inicio y fin de la clase para el lunes',
   TCAHORARIOSC_AULA_LUNES varchar(6) comment 'codigo del aula asignada para la clase el dia lunes',
   TCAHORARIOSC_MARTES  varchar(9) comment 'hora de inicio y fin de la clase para el martes',
   TCAHORARIOSC_AULA_MARTES varchar(6) comment 'codigo del aula asignada para la clase el dia martes',
   TCAHORARIOSC_MIERCOLES varchar(9) comment 'hora de inicio y fin de la clase para el miercoles',
   TCAHORARIOSC_AULA_MIERCOLES varchar(6) comment 'codigo del aula asignada para la clase el dia miercoles',
   TCAHORARIOSC_JUEVES  varchar(9) comment 'hora de inicio y fin de la clase para el jueves',
   TCAHORARIOSC_AULA_JUEVES varchar(6) comment 'codigo del aula asignada para la clase el dia jueves',
   TCAHORARIOSC_VIERNES varchar(9) comment 'hora de inicio y fin de la clase para el viernes',
   TCAHORARIOSC_AULA_VIERNES varchar(6) comment 'codigo del aula asignada para la clase el dia viernes',
   primary key (TCAHORARIOSC_ID)
);

alter table TCAHORARIOSC comment 'tabla que guarda el horario de clase para cada matriz de car';

/*==============================================================*/
/* Table: TCAHORARIOST                                          */
/*==============================================================*/
create table TCAHORARIOST
(
   TCAHORARIOST_ID      int not null auto_increment comment 'codigo incremental unico',
   TCAMATRICES_ID       int not null comment 'codigo incremental unico',
   TCAHORARIOST_JORNADA varchar(10) comment 'jornada de trabajo matutina o vespertina',
   REGISTRO_HT          varchar(10) comment 'determina si es el ingreso o salida',
   TCAHORARIOST_BIOMETRICO varchar(10) comment 'especificacion del lugar de trabajo, fisico si trabaja en la universidad y virtual si es fuera de la universidad',
   TCAHORARIOST_LUNES   time comment 'hora para el dia lunes',
   TCAHORARIOST_MARTES  time comment 'hora para el dia martes',
   TCAHORARIOST_MIERCOLES time comment 'hora para el dia miercoles',
   TCAHORARIOST_JUEVES  time comment 'hora para el dia jueves',
   TCAHORARIOST_VIERNES time comment 'hora para el dia viernes',
   primary key (TCAHORARIOST_ID)
);

alter table TCAHORARIOST comment 'tabla que guarda los dias del horario de trabajo que deben c';

/*==============================================================*/
/* Table: TCAMATRICES                                           */
/*==============================================================*/
create table TCAMATRICES
(
   TCAMATRICES_ID       int not null auto_increment comment 'codigo incremental unico',
   TCAACTIVIDADESD_ID   int comment 'codigo incremental unico',
   TCAPERIODOSA_CODIGO  int not null comment 'codigo incremental unico',
   TCADOCENTES_ID_BANNER varchar(9) not null comment 'codigo incremental unico',
   TCAFIRMASA_ID_BANNER int not null comment 'codigo unico otorgado por la universidad',
   TCAMATRICES_IMPARTIR_CLASE int comment 'horas que debe impartir clase',
   TCAMATRICES_DOCENCIA int comment 'horas para la actividad de docencia',
   TCAMATRICES_INVESTIGACION int comment 'horas para las actividades de investigacion',
   TCAMATRICES_GESTION_EDUCATIVA int comment 'horas para las actividades de gestion educativa',
   TCAMATRICES_VINCULACION int comment 'horas para las actividades de vinculacion',
   TCAMATRICES_HORAS_EXC int comment 'horas por licencias y/o enfermedad catastrófica',
   TCAMATRICES_MOTIVO_HORAS_EXC varchar(60) comment 'motivo de las horas excepcionales',
   primary key (TCAMATRICES_ID)
);

alter table TCAMATRICES comment 'tabla que guarda las matrices de carga horaria para cada uno';

/*==============================================================*/
/* Table: TCAPERIODOSA                                          */
/*==============================================================*/
create table TCAPERIODOSA
(
   TCAPERIODOSA_CODIGO  int not null auto_increment comment 'codigo incremental unico',
   TCAPERIODOSA_DESCRIPCION varchar(30) comment 'mes de inicio y fin del periodo academico',
   TCAPERIODOSA_SEMESTRE int comment 'numero del semestre (1 o 2) ',
   TCAPERIODOSA_ACTIVO  bool comment 'estado actual de actividad, solo uno puede estar activo',
   primary key (TCAPERIODOSA_CODIGO)
);

alter table TCAPERIODOSA comment 'tabla que guarda los periodos academicos de la Universidad d';

/*==============================================================*/
/* Table: TCATITULOSA                                           */
/*==============================================================*/
create table TCATITULOSA
(
   TCATITULOSA_ID       int not null auto_increment comment 'codigo incremental unico',
   TCADOCENTES_ID_BANNER varchar(9) comment 'codigo incremental unico',
   TCATITULOSA_NIVEL    int comment 'nivel educativo',
   TCATITULOSA_NOMBRE   varchar(20) comment 'nombre del grado de estudio',
   TCATITULOSA_DESCRIPCION varchar(120) comment 'descripcion o nombre detallado',
   TCATITULOSA_UNIVERSIDAD varchar(60) comment 'universidad de estudio',
   TCATITULOSA_REGISTRO varchar(30) comment 'codigo de registro academico',
   TCATITULOSA_AREA     varchar(80) comment 'area de conocimiento',
   TCATITULOSA_OBSERVACION varchar(150) comment 'observacion o informacion adicional',
   TCATITULOSA_ULTIMO_TITULO bool comment 'identificador que marca titulo mas alto del docente',
   ESTADO_TITULO        bool comment 'estado',
   primary key (TCATITULOSA_ID)
);

alter table TCATITULOSA comment 'tabla que guarda los titulos academicos para cada uno de los';

alter table TCAACTIVIDADES add constraint FK10_TCAACT_TCAACT_ID foreign key (TCAACTIVIDADESD_ID)
      references TCAACTIVIDADESD (TCAACTIVIDADESD_ID) on delete restrict on update restrict;

alter table TCACARRERAS add constraint FK1_TCACAR_TCADEP_ID foreign key (TCADEPARTAMENTOS_ID)
      references TCADEPARTAMENTOS (TCADEPARTAMENTOS_ID) on delete restrict on update restrict;

alter table TCADOCENTES add constraint FK2_TCADOC_TCADEP_ID foreign key (TCADEPARTAMENTOS_ID)
      references TCADEPARTAMENTOS (TCADEPARTAMENTOS_ID) on delete restrict on update restrict;

alter table TCAHORARIOSC add constraint FK8_TCAHOR_TCAMAT_ID foreign key (TCAMATRICES_ID)
      references TCAMATRICES (TCAMATRICES_ID) on delete restrict on update restrict;

alter table TCAHORARIOST add constraint FK7_TCAHOR_TCAMAT_ID foreign key (TCAMATRICES_ID)
      references TCAMATRICES (TCAMATRICES_ID) on delete restrict on update restrict;

alter table TCAMATRICES add constraint FK4_TCAMAT_TCADOC_ID_BANNER foreign key (TCADOCENTES_ID_BANNER)
      references TCADOCENTES (TCADOCENTES_ID_BANNER) on delete restrict on update restrict;

alter table TCAMATRICES add constraint FK5_TCAMAT_TCAPER_CODIGO foreign key (TCAPERIODOSA_CODIGO)
      references TCAPERIODOSA (TCAPERIODOSA_CODIGO) on delete restrict on update restrict;

alter table TCAMATRICES add constraint FK6_TCAMAT_TCAFIR_ID foreign key (TCAFIRMASA_ID_BANNER)
      references TCAFIRMASA (TCAFIRMASA_ID_BANNER) on delete restrict on update restrict;

alter table TCAMATRICES add constraint FK9_TCAMAT_TCAACT_ID foreign key (TCAACTIVIDADESD_ID)
      references TCAACTIVIDADESD (TCAACTIVIDADESD_ID) on delete restrict on update restrict;

alter table TCATITULOSA add constraint FK3_TCATIT_TCADOC_ID_BANNER foreign key (TCADOCENTES_ID_BANNER)
      references TCADOCENTES (TCADOCENTES_ID_BANNER) on delete restrict on update restrict;

