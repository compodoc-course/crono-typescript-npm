import { Tiempo } from './constants';
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/internal/operators/map';
import { convertirSgAFormatoReloj } from './conversion';

export class Descontador {
    valorInicial = -1;
    constructor (valor: number = 5) {
        this.valorInicial = valor;
    }
    start(tiempoIntervalo: number = Tiempo.UN_SG_ES_EN_MS) {
        return interval(tiempoIntervalo).pipe(
            map(
                ( sg: number ) => {
                    return convertirSgAFormatoReloj(this.valorInicial - sg, 2, this.valorInicial)
                }
            )
        )
    }
}