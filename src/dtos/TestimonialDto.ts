import BaseDto from './BaseDto';

interface AuthorDto {
  name: string;
  position: string;
  image: string | null;
}

export default interface TestimonialDto extends BaseDto {
  description: string;
  clutchUrl: string;
  author: AuthorDto;
}
