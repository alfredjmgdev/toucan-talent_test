import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany
} from 'typeorm';
import { Appointment } from './Appointment';

export enum GenderFormat {
  MALE = 'M',
  FEMALE = 'F',
  NO_SPECIFIED = 'No specified',
  OTHER = 'Other'
}

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  readonly id!: number;

  @Column({ type: 'text' })
    first_name: string;

  @Column({ type: 'text' })
    last_name: string;

  @Column({ type: 'int' })
    age: number; 
    
  @Column({
    type: 'enum',
    enum: GenderFormat,
    default: GenderFormat.NO_SPECIFIED
  })    
    gender: GenderFormat;     

  @Column({ type: 'boolean', default: true })
    active: boolean;  
    
  @OneToMany(() => Appointment, (appoinment) => appoinment.patient)
    appointments: Appointment[];    
}
