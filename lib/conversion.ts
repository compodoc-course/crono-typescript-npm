import { Tiempo } from "./constants";

export function convertirSgAFormatoReloj(sg: number, tipo: number, limite: number): string {
    if (tipo === 1 && limite === sg || tipo === 2 && sg === 0) {
        return 'FINISH';
    }
    // COnseguir el tiempo formateado para devolverlo
    // Horas
    const horas = Math.floor((sg % Tiempo.SG_DIA) / Tiempo.SG_HORA);
    // Minutos
    const minutos = Math.floor((sg % Tiempo.SG_HORA) / Tiempo.SG_MIN);
    // segundos
    const sgs = Math.floor((sg % Tiempo.SG_MIN));
    return adaptarAlReloj(horas, minutos, sgs);
}

function adaptarAlReloj(horas: number, minutos: number, sg: number) {
    const h = darNumeroFormatoCorrecto(horas);
    const m = darNumeroFormatoCorrecto(minutos);
    const s = darNumeroFormatoCorrecto(sg);
    return `${ h }:${ m }:${ s }`;
}

function darNumeroFormatoCorrecto(n: number): string {
    return (n < 10 ) ? '0'.concat(String(n)): String(n);
}