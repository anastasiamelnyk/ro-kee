export class User {
  public uuid: string;
  public email: string;
  public nickname?: string;

  constructor(data: Partial<User>) {
    this.nickname = data.nickname;
    this.email = data.email;
    this.uuid = data.uuid;
  }
}
