import { Chromosome } from './Chromosome';
import { Guid } from './Guid';
import { Gender } from './Gender';

export class Creature {
    constructor(public id: Guid, public genome: Chromosome, public gender: Gender) {
    }
}