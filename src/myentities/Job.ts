import { Column, Entity } from 'typeorm';

@Entity('job')
export class Job {
  @Column('varchar', { primary: true, name: 'id', length: 10 })
  id: string;

  @Column('varchar', { name: 'title', nullable: true, length: 255 })
  title: string | null;

  @Column('varchar', { name: 'wi_type', nullable: true, length: 255 })
  wiType: string | null;

  @Column('varchar', { name: 'clients', nullable: true, length: 255 })
  clients: string | null;

  @Column('varchar', { name: 'enabled', nullable: true, length: 255 })
  enabled: string | null;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'isactived', nullable: true, length: 255 })
  isactived: string | null;

  @Column('varchar', { name: 'islocked', nullable: true, length: 255 })
  islocked: string | null;

  @Column('varchar', { name: 'create_uid', nullable: true, length: 255 })
  createUid: string | null;

  @Column('varchar', { name: 'updated_uid', nullable: true, length: 255 })
  updatedUid: string | null;
}