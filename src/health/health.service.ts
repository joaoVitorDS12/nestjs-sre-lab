import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  checkHealth(): boolean {
    console.log('Health is okay');
    if (new Date().getMilliseconds() % 2 === 0) {
      return true;
    }
    return false;
  }

  checkReady(): string {
    console.log('Ready is okay');
    return 'OK!';
  }
}
