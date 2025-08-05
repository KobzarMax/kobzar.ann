import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

function getEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not set.`);
  }
  return value;
}

const R2_ACCOUNT_ID = getEnv('R2_ACCOUNT_ID');
const R2_ACCESS_KEY_ID = getEnv('R2_ACCESS_KEY_ID');
const R2_SECRET_ACCESS_KEY = getEnv('R2_SECRET_ACCESS_KEY');
const R2_BUCKET = getEnv('R2_BUCKET');

const S3 = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY
  }
});

export async function getSignedUrlForDownload(key: string) {
  const command = new GetObjectCommand({
    Bucket: R2_BUCKET,
    Key: key
  });
  const signedUrl = await getSignedUrl(S3, command, { expiresIn: 3600 });
  return signedUrl;
}
