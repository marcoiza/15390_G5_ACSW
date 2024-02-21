'use client'

import {
  Document,
  Text,
  Page,
  StyleSheet,
  Image,
  View,
} from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
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
  section: {
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
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
})

interface PDFMatrixProps {
  periodDescription: string
}

export default function PDFMatrixTemplate(props: PDFMatrixProps) {
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
        <Text style={styles.title}>{props.periodDescription}</Text>
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
