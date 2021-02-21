import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateDeployDto } from './dto/create-deploy.dto';

@Controller('deploy')
export class DeployController {
  @Get('/')
  getDeploys(): Array<string> {
    return ['01/02/2021'];
  }

  @Post('/create')
  async create(@Body() createDeployDto: CreateDeployDto) {
    // Construir el llamado al API de VTEX
    const { environment, site } = createDeployDto;
    const url = `https://${environment}.myvtex.com/api/portal/pvt/sites/${site}/files/`;
    return url;
  }
}
