import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobDto } from './dtos/job.dto';
import { Job } from './interfaces/job.interface';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  findAll(): Promise<Job[]> {
    return this.jobsService.findAll();
  }

  @Get(':id')
  find(@Param('id') id): Promise<Job> {
    return this.jobsService.find(id);
  }

  @Post()
  create(@Body() job: JobDto): Promise<Job> {
    return this.jobsService.create(job);
  }

  @Put(':id')
  update(@Body() job: JobDto, @Param('id') id): Promise<Job> {
    return this.jobsService.update(id, job);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Job> {
    return this.jobsService.delete(id);
  }
}
