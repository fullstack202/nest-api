// companies.entity.ts
import { Entity, Column } from 'typeorm';

@Entity({ name: 'companies' })
export class Companies {

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;
}