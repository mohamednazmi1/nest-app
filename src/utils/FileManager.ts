import { GetObjectCommand, S3 } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Injectable } from '@nestjs/common';

import config from '@src/config/env';
import File from '@src/shared/File';

const { accessKeyId, secretAccessKey, bucket, endpoint, region } = config.s3;

@Injectable()
export default class FileManager {
  private s3Client = new S3({
    endpoint,
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  public async getUrl(file: File): Promise<string> {
    const url = await getSignedUrl(
      this.s3Client,
      new GetObjectCommand({
        Bucket: bucket,
        Key: file.key,
        ResponseContentType: file.mimeType,
        ResponseContentDisposition: 'inline',
      }),
      { expiresIn: 15 * 60 },
    );
    return url;
  }
}
