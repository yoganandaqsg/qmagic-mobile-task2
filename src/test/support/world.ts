import { setWorldConstructor, World } from '@cucumber/cucumber';

export class CustomWorld extends World {
  state: Record<string, unknown>;

  constructor(options: any) {
    super(options);
    this.state = {};
  }
}

setWorldConstructor(CustomWorld);
