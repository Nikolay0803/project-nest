import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller("tasks")
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getTasks() {
    return this.taskService.getAll();
  }

  @Get(":id")
  async getTaskById(@Param("id") id: string) {
    return this.taskService.getById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: TaskDto) {
    return this.taskService.create(dto);
  }

  @Patch(":id")
  async toggleDone(@Param("id") id: string) {
    return this.taskService.toggleDone(id);
  }

  @Put(":id")
  @UsePipes(new ValidationPipe())
  async update(@Param("id") id: string, @Body() dto: TaskDto) {
    return this.taskService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.taskService.delete(id);
  }
}
