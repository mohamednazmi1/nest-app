import BaseDto from './BaseDto';

interface AuthorDto {
  name: string;
  position: string;
  photo?: string;
}

export default interface TestimonialDto extends BaseDto {
  description: string;
  author: AuthorDto;
}
