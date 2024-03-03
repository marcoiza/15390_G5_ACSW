'use client'

import { MatrixForPDF } from '@/src/models/matrix'
import { TCAACTIVIDADESD, TCAHORARIOSC } from '@prisma/client'
import {
  Document,
  Text,
  Page,
  StyleSheet,
  Image,
  View,
  Font,
} from '@react-pdf/renderer'

Font.register({
  family: 'Open Sans',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf',
      fontWeight: 600,
    },
  ],
})

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
    fontFamily: 'Open Sans',
  },
  title: {
    fontSize: 7,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 6,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  academicPeriod: {
    fontSize: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  espeLogo: {
    width: 100,
    height: 25,
    position: 'absolute',
    top: -20,
    left: 20,
  },
  text: {
    fontSize: 4,
  },
  boldText: {
    fontSize: 4,
    fontWeight: 'bold',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  table: {
    border: 1,
    borderColor: '#0066B3',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tr: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  th: {
    fontSize: 5,
    fontWeight: 'bold',
    border: 0.5,
    borderColor: '#0066B3',
  },
  td: {
    fontSize: 5,
    border: 0.5,
    borderColor: '#0066B3',
  },
  signaturesContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  tableBottom: {
    width: '20%',
    borderBottom: 1,
    borderLeft: 1,
    borderRight: 1,
    borderColor: '#0066B3',
    flexDirection: 'row',
  },
})

type align = 'center' | 'left' | 'right'
type justifyContent =
  | 'center'
  | 'space-between'
  | 'flex-start'
  | 'flex-end'
  | 'space-around'
  | 'space-evenly'

function Table(props: {
  readonly children: React.ReactNode
  readonly width?: string | number
  readonly height?: string | number
  readonly margin?: string | number
}) {
  return (
    <View
      style={[
        styles.table,
        { width: props.width, height: props.height, margin: props.margin },
      ]}
    >
      {props.children}
    </View>
  )
}

function TableR(props: {
  readonly children: React.ReactNode
  readonly textAlign?: align
  readonly backgroundColor?: string
  readonly justifyContent?: justifyContent
  readonly width?: string | number
}) {
  return (
    <View
      style={[
        styles.tr,
        {
          textAlign: props.textAlign,
          backgroundColor: props.backgroundColor,
          justifyContent: props.justifyContent,
          width: props.width,
        },
      ]}
    >
      {props.children}
    </View>
  )
}

function TableH(props: {
  readonly title: string | number
  readonly width?: string | number
  readonly backgroundColor?: string
  readonly textAlign?: align
}) {
  return (
    <View
      style={[
        styles.th,
        {
          width: props.width,
          backgroundColor: props.backgroundColor,
          textAlign: props.textAlign,
        },
      ]}
    >
      <Text>{props.title}</Text>
    </View>
  )
}

function TableB(props: {
  readonly text: string | number
  readonly width?: string | number
  readonly backgroundColor?: string
  readonly textAlign?: align
}) {
  return (
    <View
      style={[
        styles.td,
        {
          width: props.width,
          backgroundColor: props.backgroundColor,
          textAlign: props.textAlign,
        },
      ]}
    >
      <Text>{props.text}</Text>
    </View>
  )
}

export default function PDFMatrixTemplate(props: {
  readonly matrixForPDF: MatrixForPDF
}) {
  return (
    <Document>
      <Page size={'A4'} style={styles.page}>
        <View>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image style={styles.espeLogo} src={'/espe-logo.png'} />
        </View>
        <Text style={styles.title}>
          DEPARTAMENTO DE CIENCIAS DE LA COMPUTACIÓN
        </Text>
        <Text style={styles.title}>CARGA HORARIA</Text>
        <Text style={[styles.title, { marginBottom: 3 }]}>
          {`${props.matrixForPDF.TCAPERIODOSA.TCAPERIODOSA_DESCRIPCION} (${props.matrixForPDF.TCAPERIODOSA_CODIGO})`}
        </Text>
        <View
          style={[
            styles.flexRow,
            { justifyContent: 'space-between', alignItems: 'flex-start' },
          ]}
        >
          <Table width={250} margin={'0 0 10 0'}>
            <TableR>
              <TableH
                title="DATOS DEL PROFESOR"
                width={'100%'}
                backgroundColor="#E2EFD9"
                textAlign="center"
              />
            </TableR>
            <TableR>
              <TableH title="APELLIDOS: " width={'20%'} />
              <TableB
                text={props.matrixForPDF.TCADOCENTES.TCADOCENTES_APELLIDOS}
                width={'40%'}
              />
              <TableH title="ID: " width={'20%'} />
              <TableB
                text={props.matrixForPDF.TCADOCENTES_ID_BANNER}
                width={'20%'}
              />
            </TableR>
            <TableR>
              <TableH title="NOMBRES: " width={'20%'} />
              <TableB
                text={props.matrixForPDF.TCADOCENTES.TCADOCENTES_NOMBRES}
                width={'40%'}
              />
              <TableH title="CC/PASAPORTE: " width={'20%'} />
              <TableB
                text={props.matrixForPDF.TCADOCENTES.TCADOCENTES_CEDULA}
                width={'20%'}
              />
            </TableR>
            <TableR>
              <TableH
                title="TÍTULO, GRADO ACADÉMICO"
                textAlign="center"
                width={'20%'}
              />
              <TableB text="props" width={'80%'} />
            </TableR>
          </Table>
          <Table width={100} margin={'0 0 10 0'}>
            <TableR>
              <TableH
                title="TIPO DE PERSONAL ACADÉMICO"
                backgroundColor="#E2EFD9"
                textAlign="center"
                width={'100%'}
              />
            </TableR>
            <TableR>
              <TableH title="TITULARIDAD" width={'50%'} />
              <TableB
                text={props.matrixForPDF.TCADOCENTES.TCADOCENTES_TITULARIDAD}
                width={'50%'}
              />
            </TableR>
            <TableR>
              <TableH title="DEDICACIÓN" width={'50%'} />
              <TableB
                text={props.matrixForPDF.TCADOCENTES.TCADOCENTES_DEDICACION}
                width={'50%'}
              />
            </TableR>
            <TableR>
              <TableH title="CATEGORÍA" width={'50%'} />
              <TableB
                text={props.matrixForPDF.TCADOCENTES.TCADOCENTES_TIPO_CONTRATO}
                width={'50%'}
              />
            </TableR>
            <TableR>
              <TableH title="HORAS" width={'50%'} />
              <TableB
                text={props.matrixForPDF.TCADOCENTES.TCADOCENTES_HORAS_CONTRATO}
                width={'50%'}
              />
            </TableR>
          </Table>
          <Table width={175} margin={'0 0 10 0'}>
            <TableR textAlign="center" backgroundColor="#E2EFD9">
              <TableH
                title="ACTIVIDADES DEL PERSONAL ACADÉMICO"
                width={'75%'}
              />
              <TableH title="HORAS" width={'25%'} />
            </TableR>
            <TableR>
              <TableB text="Impartir Clases" width={'75%'} />
              <TableB
                text={props.matrixForPDF.TCAMATRICES_IMPARTIR_CLASE}
                width={'25%'}
                textAlign="center"
              />
            </TableR>
            <TableR>
              <TableB text="Act. Docencia" width={'75%'} />
              <TableB
                text={props.matrixForPDF.TCAMATRICES_DOCENCIA}
                width={'25%'}
                textAlign="center"
              />
            </TableR>
            <TableR>
              <TableB text="Act. de Investigación" width={'75%'} />
              <TableB
                text={props.matrixForPDF.TCAMATRICES_INVESTIGACION}
                width={'25%'}
                textAlign="center"
              />
            </TableR>
            <TableR>
              <TableB text="Act. de Gestión Educativa" width={'75%'} />
              <TableB
                text={props.matrixForPDF.TCAMATRICES_GESTION_EDUCATIVA}
                width={'25%'}
                textAlign="center"
              />
            </TableR>
            <TableR>
              <TableB
                text="Act. de Vinculación con la sociedad"
                width={'75%'}
              />
              <TableB
                text={props.matrixForPDF.TCAMATRICES_VINCULACION}
                width={'25%'}
                textAlign="center"
              />
            </TableR>
            <TableR backgroundColor="#E2EFD9">
              <TableH title="TOTAL DE HORAS" width={'75%'} />
              <TableH title="props" width={'25%'} textAlign="center" />
            </TableR>
          </Table>
        </View>
        <View style={[styles.flexRow, { justifyContent: 'center' }]}>
          <Table width={350} margin={'0 0 10 0'}>
            <TableR>
              <TableH
                title="HORARIO DE TRABAJO"
                backgroundColor="#E2EFD9"
                textAlign="center"
                width={'100%'}
              />
            </TableR>
            <TableR textAlign="center">
              <TableH title="HORA" width={'15%'} />
              <TableH title="LUNES" width={'17%'} />
              <TableH title="MARTES" width={'17%'} />
              <TableH title="MIÉRCOLES" width={'17%'} />
              <TableH title="JUEVES" width={'17%'} />
              <TableH title="VIERNES" width={'17%'} />
            </TableR>
            <TableR textAlign="center">
              <TableH title="Ingreso" width={'15%'} />
              <TableB text="props" width={'17%'} />
              <TableB text="props" width={'17%'} />
              <TableB text="props" width={'17%'} />
              <TableB text="props" width={'17%'} />
              <TableB text="props" width={'17%'} />
            </TableR>
            <TableR textAlign="center">
              <TableH title="Salida" width={'15%'} />
              <TableB text="props" width={'17%'} />
              <TableB text="props" width={'17%'} />
              <TableB text="props" width={'17%'} />
              <TableB text="props" width={'17%'} />
              <TableB text="props" width={'17%'} />
            </TableR>
          </Table>
        </View>
        <Table width={'100%'} margin={'0 0 10 0'}>
          <TableR>
            <TableH
              title="HORARIO DE CLASES"
              backgroundColor="#E2EFD9"
              textAlign="center"
              width={'100%'}
            />
          </TableR>
          <TableR textAlign="center">
            <TableH title="CARRERA" width={'10%'} />
            <TableH title="PERIODO" width={'5%'} />
            <TableH title="NRC" width={'5%'} />
            <TableH title="ASIGNATURA" width={'30%'} />
            <TableH title="LUNES" width={'5%'} />
            <TableH title="AULA" width={'5%'} />
            <TableH title="MARTES" width={'5%'} />
            <TableH title="AULA" width={'5%'} />
            <TableH title="MIÉRC" width={'5%'} />
            <TableH title="AULA" width={'5%'} />
            <TableH title="JUEVES" width={'5%'} />
            <TableH title="AULA" width={'5%'} />
            <TableH title="VIERNES" width={'5%'} />
            <TableH title="AULA" width={'5%'} />
          </TableR>
          {props.matrixForPDF.TCAHORARIOSC.map((c: TCAHORARIOSC) => (
            <TableR key={c.TCAHORARIOSC_ID} textAlign="center">
              <TableB text={c.TCAHORARIOSC_COD_CARRERA} width="10%" />
              <TableB text={c.TCAHORARIOSC_PERIODO} width="5%" />
              <TableB text={c.TCAHORARIOSC_NRC} width="5%" />
              <TableB
                text={c.TCAHORARIOSC_ASIGNATURA}
                width="25%"
                textAlign="left"
              />
              <TableB
                text={`${c.TCAHORARIOSC_LUNES_ENTRADA}_${c.TCAHORARIOSC_LUNES_SALIDA}`}
                width="5%"
              />
              <TableB text={c.TCAHORARIOSC_AULA_LUNES} width="5%" />
              <TableB
                text={`${c.TCAHORARIOSC_MARTES_ENTRADA}_${c.TCAHORARIOSC_MARTES_SALIDA}`}
                width="5%"
              />
              <TableB text={c.TCAHORARIOSC_AULA_MARTES} width="5%" />
              <TableB
                text={`${c.TCAHORARIOSC_MIERCOLES_ENTRADA}_${c.TCAHORARIOSC_MIERCOLES_SALIDA}`}
                width="5%"
              />
              <TableB text={c.TCAHORARIOSC_AULA_MIERCOLES} width="5%" />
              <TableB
                text={`${c.TCAHORARIOSC_JUEVES_ENTRADA}_${c.TCAHORARIOSC_JUEVES_SALIDA}`}
                width="5%"
              />
              <TableB text={c.TCAHORARIOSC_AULA_JUEVES} width="5%" />
              <TableB
                text={`${c.TCAHORARIOSC_VIERNES_ENTRADA}_${c.TCAHORARIOSC_VIERNES_SALIDA}`}
                width="5%"
              />
              <TableB text={c.TCAHORARIOSC_AULA_VIERNES} width="5%" />
            </TableR>
          ))}
        </Table>
        <Table width={'100%'}>
          <TableR backgroundColor="#9CC2E5" textAlign="center">
            <TableH title="ACTIVIDADES DE DOCENCIA" width={'85%'} />
            <TableH title="ACT" width={'5%'} />
            <TableH title="HS" width={'5%'} />
            <TableH title="HS%" width={'5%'} />
          </TableR>
          {props.matrixForPDF.TCAACTIVIDADESD.map(
            (act: TCAACTIVIDADESD, count: number) => (
              <TableR key={act.TCAACTIVIDADESD_ID} textAlign="center">
                <TableB text={count} width="2%" />
                <TableB text={'props'} width="83%" textAlign="left" />
                <TableB text={act.TCAACTIVIDADES_CODIGO} width="5%" />
                <TableB text={act.TCAACTIVIDADESD_HS} width="5%" />
                <TableB text={act.TCAACTIVIDADESD_HSP} width="5%" />
              </TableR>
            )
          )}
        </Table>
        <TableR textAlign="center" justifyContent="flex-end" width={'100%'}>
          <View style={styles.tableBottom}>
            <TableH title="Total" width={'50%'} backgroundColor="#9CC2E5" />
            <TableH title="props" width={'25%'} backgroundColor="#9CC2E5" />
            <TableH title="props" width={'25%'} backgroundColor="#9CC2E5" />
          </View>
        </TableR>
        <Table width={'100%'} margin={'10 0 0 0'}>
          <TableR backgroundColor="#FDAFA9" textAlign="center">
            <TableH title="ACTIVIDADES DE INVESTIGACIÓN" width={'85%'} />
            <TableH title="ACT" width={'5%'} />
            <TableH title="HS" width={'5%'} />
            <TableH title="HS%" width={'5%'} />
          </TableR>
          <TableR textAlign="center">
            <TableB text="1" width="2%" />
            <TableB text="props" width="83%" textAlign="left" />
            <TableB text="props" width="5%" />
            <TableB text="props" width="5%" />
            <TableB text="props" width="5%" />
          </TableR>
        </Table>
        <TableR textAlign="center" justifyContent="flex-end" width={'100%'}>
          <View style={styles.tableBottom}>
            <TableH title="Total" width={'50%'} backgroundColor="#FDAFA9" />
            <TableH title="props" width={'25%'} backgroundColor="#FDAFA9" />
            <TableH title="props" width={'25%'} backgroundColor="#FDAFA9" />
          </View>
        </TableR>
        <Table width={'100%'} margin={'10 0 0 0'}>
          <TableR backgroundColor="#FFE598" textAlign="center">
            <TableH title="ACTIVIDADES DE GESTIÓN EDUCATIVA" width={'85%'} />
            <TableH title="ACT" width={'5%'} />
            <TableH title="HS" width={'5%'} />
            <TableH title="HS%" width={'5%'} />
          </TableR>
          <TableR textAlign="center">
            <TableB text="1" width="2%" />
            <TableB text="props" width="83%" textAlign="left" />
            <TableB text="props" width="5%" />
            <TableB text="props" width="5%" />
            <TableB text="props" width="5%" />
          </TableR>
        </Table>
        <TableR textAlign="center" justifyContent="flex-end" width={'100%'}>
          <View style={styles.tableBottom}>
            <TableH title="Total" width={'50%'} backgroundColor="#FFE598" />
            <TableH title="props" width={'25%'} backgroundColor="#FFE598" />
            <TableH title="props" width={'25%'} backgroundColor="#FFE598" />
          </View>
        </TableR>
        <Table width={'100%'} margin={'10 0 0 0'}>
          <TableR backgroundColor="#A8D08D" textAlign="center">
            <TableH
              title="ACTIVIDADES DE VINCULACIÓN CON LA SOCIEDAD"
              width={'85%'}
            />
            <TableH title="ACT" width={'5%'} />
            <TableH title="HS" width={'5%'} />
            <TableH title="HS%" width={'5%'} />
          </TableR>
          <TableR textAlign="center">
            <TableB text="1" width="2%" />
            <TableB text="props" width="83%" textAlign="left" />
            <TableB text="props" width="5%" />
            <TableB text="props" width="5%" />
            <TableB text="props" width="5%" />
          </TableR>
        </Table>
        <TableR textAlign="center" justifyContent="flex-end" width={'100%'}>
          <View style={styles.tableBottom}>
            <TableH title="Total" width={'50%'} backgroundColor="#A8D08D" />
            <TableH title="props" width={'25%'} backgroundColor="#A8D08D" />
            <TableH title="props" width={'25%'} backgroundColor="#A8D08D" />
          </View>
        </TableR>
        <View style={styles.signaturesContainer}>
          <View style={{ width: '50%', marginTop: 30 }}>
            <Text style={styles.text}>
              Ing. Mauricio Renán Loachamín Valencia, Ph.D.
            </Text>
            <Text style={styles.boldText}>
              Docente Tiempo Completo (Ocasional)
            </Text>
          </View>
          <View style={{ width: '50%', marginTop: 30 }}>
            <Text style={styles.text}>
              Ing. Mauricio Renán Loachamín Valencia, Ph.D.
            </Text>
            <Text style={styles.boldText}>
              Docente Tiempo Completo (Ocasional)
            </Text>
          </View>
          <View style={{ width: '50%', marginTop: 30, marginBottom: 10 }}>
            <Text style={styles.text}>
              Ing. Mauricio Renán Loachamín Valencia, Ph.D.
            </Text>
            <Text style={styles.boldText}>
              Docente Tiempo Completo (Ocasional)
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View>
            <Text style={styles.text}>HS: Horas Semanales</Text>
            <Text style={styles.text}>HS%: Horas Semanales en porcentaje</Text>
            <Text style={styles.text}>
              ACT: Act Docencia, Investigación, Gestión Educativa y Vinculación
              con la Sociedad
            </Text>
          </View>
          <Text style={styles.text}>
            Código de documento: VDC-MTZ-V1-2021-012
          </Text>
        </View>
      </Page>
    </Document>
  )
}
