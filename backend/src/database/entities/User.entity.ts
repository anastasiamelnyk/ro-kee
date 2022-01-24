import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { TokenEntity } from './Token.entity';
import * as bcrypt from 'bcrypt';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  public uuid: string;

  @Column()
  public nickname?: string;

  @Column()
  public email: string;

  @Column({ type: 'bool', default: false, nullable: false })
  public isEmailConfirmed: boolean;

  @Exclude({ toPlainOnly: true })
  @Column()
  public passwordHash: string;

  @OneToMany(() => TokenEntity, (token) => token.user)
  public token: TokenEntity[];

  public async setPassword(password: string): Promise<void> {
    const salt = await bcrypt.genSalt();

    this.passwordHash = await bcrypt.hash(password, salt);
  }

  public validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.passwordHash);
  }
}
