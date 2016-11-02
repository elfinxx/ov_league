import {role} from "./role";
export class MoStat {
  constructor(
    public battleTag: string,
    public skillRating: number,
    public level: number,
    public totalGames: number,
    public win: number,
    public loss: number,
    public roles: Array<role>

  ){}
}
