import { Column } from 'typeorm';

class EmailAddress {
  @Column({ name: 'address' })
  address: string;
}
