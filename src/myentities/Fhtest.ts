import { Column, Entity } from 'typeorm';

@Entity('fhtest')
export class Fhtest {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'fhname', nullable: true, length: 255 })
  fhname: string | null;

  @Column('varchar', { name: 'nam', nullable: true, length: 255 })
  nam: string | null;
}
