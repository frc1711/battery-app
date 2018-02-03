import { InMemoryDbService } from 'angular-in-memory-web-api';
 
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Fat Stacks' },
 	  { id: 12, name: 'Bagel' },
	  { id: 13, name: 'Sceince' },
	  { id: 14, name: 'Banannie' },
	  { id: 15, name: 'Death Ray' },
	  { id: 16, name: 'Fred' },
  	  { id: 17, name: 'Captain Hammer' },
	  { id: 18, name: 'Dr. Horrible' },
	  { id: 19, name: 'Peytong' },
	  { id: 20, name: 'Sharknado' }
    ];
    return {heroes};
  }
}