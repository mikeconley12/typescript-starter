import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class ParentProvider {
  constructor(moduleRef: ModuleRef) {
    console.log("moduleRef", moduleRef);
  }
}
