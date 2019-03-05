import { Tiempo } from './constants';
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/internal/operators/map';
import { convertirSgAFormatoReloj } from './conversion';

export class Contador {
    valorLImite = -1;
    constructor (limite: number = 5) {
        this.valorLImite = limite;
    }
    start(tiempoIntervalo: number = Tiempo.UN_SG_ES_EN_MS) {
        return interval(tiempoIntervalo).pipe(
            map(
                ( sg: number ) => {
                    return convertirSgAFormatoReloj(sg, 1, this.valorLImite)
                }
            )
        )
    }
}