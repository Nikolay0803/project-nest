// import { PrismaClient } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { PrismaService } from 'prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getById(id: string) {
    const task = this.prisma.task.findUnique({
      where: {
        id: +id
      }
    });

    if (!task) throw new NotFoundException('Task not found');

    return task;
  }

  async getAll() {
    return this.prisma.task.findMany();
  }

  create(dto: TaskDto) {
    return this.prisma.task.create({
      data: dto
    });
  }

  async toggleDone(id: string) {
    const task = await this.getById(id);

    return this.prisma.task.update({
      where: {
        id: task.id
      },
      data: {
        isDone: !task.isDone
      }
    });
  }
}
