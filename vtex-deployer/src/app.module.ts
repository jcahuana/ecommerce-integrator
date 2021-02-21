import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilesController } from './files/files.controller';
import { DeployController } from './deploy/deploy.controller';

@Module({
  imports: [],
  controllers: [AppController, FilesController, DeployController],
  providers: [AppService],
})
export class AppModule {}
