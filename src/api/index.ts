export async function getPhotos(): Promise<RenderPhotoType[]> {
  try {
    const res = await fetch(
      `https://www.googleapis.com/drive/v3/files?q='${process.env.FOLDER_ID}'+in+parents&key=${process.env.API_KEY}&fields=files(id,name,mimeType)`,
      { cache: 'no-store' }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch photos: ${res.statusText}`);
    }

    const data: GoogleDriveResponse = await res.json();

    return data.files
      .filter((photo) => photo.mimeType.startsWith('image/'))
      .map((photo) => ({
        id: photo.id,
        name: photo.name,
        url: `https://lh3.googleusercontent.com/d/${photo.id}`
      }));
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
