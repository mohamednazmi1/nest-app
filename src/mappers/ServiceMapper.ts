import { Injectable } from '@nestjs/common';

import BaseMapper from './BaseMapper';
import FileManager from '@src/utils/FileManager';
import Service from '@src/models/Service';
import ServiceDto, { DetailedServiceDto } from '@src/dtos/ServiceDto';

interface ServiceOptions {
  detailed: boolean;
}

@Injectable()
export default class ServiceMapper extends BaseMapper<Service, ServiceDto> {
  constructor(private readonly fileManager: FileManager) {
    super();
  }

  public async toDto(
    service: Service,
    options?: ServiceOptions,
  ): Promise<ServiceDto> {
    return !options?.detailed
      ? this.toShortDto(service)
      : this.toDetailedDto(service);
  }

  private async toShortDto(service: Service): Promise<ServiceDto> {
    return {
      id: service.id,
      slug: this.getSlug(service),
      name: service.name,
      brief: service.brief,
      image: service.image && (await this.fileManager.getUrl(service.image)),
    };
  }

  private async toDetailedDto(service: Service): Promise<DetailedServiceDto> {
    const projectImage = service.projects[0]?.image;
    return {
      ...(await this.toShortDto(service)),
      fillerText1: service.fillerText1,
      fillerText2: service.fillerText2,
      projectImage:
        projectImage && (await this.fileManager.getUrl(projectImage)),
      items: service.items,
    };
  }
}
