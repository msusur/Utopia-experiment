import { Chromosome } from './Chromosome';
import { Guid } from './Guid';
import { Gender } from './Gender';
import { Age } from './Age';
import { RandomHelper } from '../helpers';

export class Creature {
    constructor(public id: Guid, public genome: Chromosome, public gender: Gender, public age: Age) {
    }

    public CanDie(): boolean {
        let chanceToSuddenDeath: number = 0.025;
        // Todo: Find a 'real' algorithm to calculate this mess.
        // const age = this.age.InYears();
        // if (age < 10) {
        //     chanceToSuddenDeath = 0.0025;
        // } else if (age < 20) {
        //     chanceToSuddenDeath = 0.005;
        // } else if (age < 30) {
        //     chanceToSuddenDeath = 0.009;
        // } else if (age < 40) {
        //     chanceToSuddenDeath = 0.01;
        // } else if (age < 50) {
        //     chanceToSuddenDeath = 0.05;
        // } else if (age < 60) {
        //     chanceToSuddenDeath = 4;
        // } else if (age < 70) {
        //     chanceToSuddenDeath = 10;
        // } else if (age < 80) {
        //     chanceToSuddenDeath = 40;
        // } else if (age < 90) {
        //     chanceToSuddenDeath = 60;
        // } else if (age >= 100) {
        //     chanceToSuddenDeath = 90;
        // }
        // return RandomHelper.IsPercent(chanceToSuddenDeath);
        return false;
    }
}