export class CreateDeployDto {
  environment: string;
  site: string;
  cookie: string;
  files: Array<string>;
}
