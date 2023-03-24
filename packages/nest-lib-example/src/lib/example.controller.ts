import { Controller, Get } from '@nestjs/common';

@Controller('example')
export class ExampleController {
  @Get()
  hello() {
    return "Hello from ExampleController";
  }
}
