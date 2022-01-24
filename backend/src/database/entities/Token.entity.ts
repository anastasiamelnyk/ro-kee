import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserEntity } from './User.entity';

@Entity('token')
export class TokenEntity {
  @PrimaryGeneratedColumn('uuid')
  public uuid: string;

  @Column()
  public token: string;

  @ManyToOne(() => UserEntity, (user) => user.token)
  public user: UserEntity;

  public async setToken(passwordHash: string): Promise<void> {
    const salt = await bcrypt.genSalt();

    this.token = await bcrypt.hash(passwordHash, salt);
  }
}
