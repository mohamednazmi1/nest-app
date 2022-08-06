import { Injectable } from '@nestjs/common';

import BaseMapper from './BaseMapper';
import Service from '@src/models/Service';
import ServiceDto from '@src/dtos/ServiceDto';

interface ServiceOptions {
  detailed: boolean;
}

@Injectable()
export default class ServiceMapper extends BaseMapper<Service, ServiceDto> {
  public toDto(service: Service, options?: ServiceOptions): ServiceDto {
    return !options?.detailed
      ? this.toShortDto(service)
      : this.toDetailedDto(service);
  }

  private toShortDto(service: Service): ServiceDto {
    return {
      id: service.id,
      slug: this.getSlug(service),
      name: service.name,
      brief: service.brief,
    };
  }

  private toDetailedDto(service: Service): ServiceDto {
    return {
      ...this.toShortDto(service),
      fillerText1: service.fillerText1,
      fillerText2: service.fillerText2,
      projectImage: service.projects[0]?.title,
      relatedServices: service.relatedServices.map(
        (relatedService) => relatedService.name,
      ),
    };
  }
}
