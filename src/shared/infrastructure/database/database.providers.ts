import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'mysql',
        database: 'lc',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        namingStrategy: new SnakeNamingStrategy(),
      });
      return dataSource.initialize();
    },
  },
];
