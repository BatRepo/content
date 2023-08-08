import { Media } from "../entities/Media";

const castMedia = (payload: any): Media | undefined => {
    if (payload) {
        const media = new Media({
            assetId: payload?.sys?.id,
            nameAsset: payload?.fields?.title['en-US'],
            description: payload?.fields?.description['en-US'],
            file: payload?.fields?.file?.['en-US']?.url,
            contentType: payload?.fields?.file?.['en-US']?.contentType
          }, payload?.sys?.id);
          if (media) {
            return media;
          }
    }
    return undefined;
}

export default castMedia;