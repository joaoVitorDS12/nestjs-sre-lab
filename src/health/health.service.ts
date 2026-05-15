import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  checkHealth(): string {
    console.log('Health is okay');
    return 'OK!';
  }

  checkReady(): string {
    console.log('Ready is okay');
    return 'OK!';
  }
}
