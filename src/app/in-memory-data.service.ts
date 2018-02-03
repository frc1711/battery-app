import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const batteries = [
     {id: 0, name: "Fred"}
    ];
    return {batteries};
  }
}
