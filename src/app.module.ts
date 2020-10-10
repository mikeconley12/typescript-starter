import { Module } from '@nestjs/common';
import { ChildProvider } from './child.provider';
import { OtherProvider } from './other-provider';

@Module({
  imports: [],
  controllers: [],
  providers: [ChildProvider, OtherProvider],
})
export class AppModule {
}
