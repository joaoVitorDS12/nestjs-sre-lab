import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  checkHealth(): string {
    console.log('Checking application heath');
    return 'OK!';
  }

  checkReady(): string {
    console.log('Checking application readiness');
    return 'OK!';
  }
}
