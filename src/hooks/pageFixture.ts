import { Page } from '@playwright/test';

export const pageFixture: {
  page?: any;
  sessionId?: string;
  testName?: string;
  testId?: string;
  deviceName?: string;
} = {};
