import {
  S3Client,
  GetObjectCommand,
  ListObjectsV2Command
} from '@aws-sdk/client-s3';
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

export type ResponseImage = {
  key: string;
  url: string;
};

type SuccessRandomResponse = {
  image: ResponseImage | null;
  error?: undefined;
};

type ErrorRandomResponse = {
  image?: undefined;
  error: string;
};

type SuccessAllResponse = {
  images: ResponseImage[] | null;
  error?: undefined;
};

type ErrorAllResponse = {
  images?: undefined;
  error: string;
};

export async function fetchAllImages(): Promise<
  SuccessAllResponse | ErrorAllResponse
> {
  try {
    const listObjectsCommand = new ListObjectsV2Command({
      Bucket: R2_BUCKET
    });

    const response = await S3.send(listObjectsCommand);
    const imageKeys = response.Contents?.map((obj) => obj.Key) || [];

    const signedUrls = await Promise.all(
      imageKeys.map(async (key) => {
        if (!key) return null;
        const command = new GetObjectCommand({
          Bucket: R2_BUCKET,
          Key: key
        });
        const signedUrl = await getSignedUrl(S3, command, { expiresIn: 3600 });
        return { key, url: signedUrl };
      })
    );

    const validSignedUrls = signedUrls.filter((item) => item !== null);

    return { images: validSignedUrls };
  } catch (error) {
    console.error('Error fetching images:', error);
    return { error: 'Failed to fetch images' };
  }
}

export async function fetchRandomImage(): Promise<
  SuccessRandomResponse | ErrorRandomResponse
> {
  try {
    const listObjectsCommand = new ListObjectsV2Command({
      Bucket: R2_BUCKET
    });

    const response = await S3.send(listObjectsCommand);
    const imageKeys = response.Contents?.map((obj) => obj.Key) || [];

    if (imageKeys.length === 0) {
      return { image: null };
    }

    const randomIndex = Math.floor(Math.random() * imageKeys.length);
    const randomKey = imageKeys[randomIndex];

    if (!randomKey) {
      return { image: null };
    }

    const command = new GetObjectCommand({
      Bucket: R2_BUCKET,
      Key: randomKey
    });
    const signedUrl = await getSignedUrl(S3, command, { expiresIn: 3600 });

    return { image: { key: randomKey, url: signedUrl } };
  } catch (error) {
    console.error('Error fetching random image:', error);
    return { error: 'Failed to fetch a random image' };
  }
}
