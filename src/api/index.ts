export async function getPhotos(): Promise<RenderPhotoType[]> {
  const photos: RenderPhotoType[] = [];
  let nextPageToken: string | undefined = undefined;

  try {
    do {
      let url =
        `https://www.googleapis.com/drive/v3/files` +
        `?q='${process.env.FOLDER_ID}' in parents` +
        `&key=${process.env.API_KEY}` +
        `&fields=nextPageToken,files(id,name,mimeType)` +
        `&pageSize=1000`;

      if (nextPageToken) {
        url += `&pageToken=${nextPageToken}`;
      }

      const res = await fetch(url, { cache: 'no-store' });

      if (!res.ok) {
        throw new Error(`Failed to fetch photos: ${res.statusText}`);
      }

      const data: GoogleDriveResponse & { nextPageToken?: string } =
        await res.json();

      const filtered = data.files
        .filter((photo) => photo.mimeType.startsWith('image/'))
        .map((photo) => ({
          id: photo.id,
          name: photo.name,
          url: `https://lh3.googleusercontent.com/d/${photo.id}`
        }));

      photos.push(...filtered);

      nextPageToken = data.nextPageToken;
    } while (nextPageToken);

    return photos;
  } catch (error) {
    console.error(error);
    return [];
  }
}

type GoogleDriveResponse = {
  files: PhotoType[];
};

export type PhotoType = {
  mimeType: string;
  id: string;
  name: string;
};

export type RenderPhotoType = {
  url: string;
  id: string;
  name: string;
};
