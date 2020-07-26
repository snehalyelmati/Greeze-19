export class Hospital {
  constructor(
    public name: string,
    public address: string,
    public applications: number[],
    public available: number,
    public capacity: number,
    public geohash: string,
    public hospitalId: number,
    public hospitalType: number,
    public lastModifiedMSE: number,
    public modId: string,
    public phoneNo: number,
  ) {
  }
}
