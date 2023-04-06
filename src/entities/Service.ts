import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany
} from 'typeorm';
import { Appointment } from './Appointment';

export enum ServicesTypeValues {
  ONE_TIME = 'One-time',
  DAILY = 'Daily',
  WEEKLY = 'Weekly',
  MONTHLY = 'Monthly',
}

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  readonly id!: number;

  @Column({ type: 'text' })
    name: string;

  @Column({ type: 'text' })
    price: string;
    
  @Column({
    type: 'enum',
    enum: ServicesTypeValues,
    default: ServicesTypeValues.ONE_TIME
  })    
    type: ServicesTypeValues; 
    
  @OneToMany(() => Appointment, (appoinment) => appoinment.service)
    appointments: Appointment[];      
}
