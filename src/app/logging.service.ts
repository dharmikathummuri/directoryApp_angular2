import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

log(){
  console.log("im logging the service");
}
  constructor() { }

}
