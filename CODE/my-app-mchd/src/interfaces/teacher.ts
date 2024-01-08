export default interface TCADOCENTES {
    TCADOCENTES_ID_BANNER: string;
    TCADEPARTAMENTOS_ID: number;
    TCADOCENTES_CEDULA?: string | null;
    TCADOCENTES_APELLIDOS?: string | null;
    TCADOCENTES_NOMBRES?: string | null;
    TCADOCENTES_GENERO?: string | null;
    TCADOCENTES_DEDICACION?: string | null;
    TCADOCENTES_TITULARIDAD?: string | null;
    TCADOCENTES_HORAS_CONTRATO?: number | null;
    TCADOCENTES_TIPO_CONTRATO?: string | null;
    TCADOCENTES_ACTIVO?: boolean | null;
}