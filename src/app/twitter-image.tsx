import { renderSocialImage, socialImageSize } from "@/lib/social-image";

// Zelfde afbeelding als opengraph-image.tsx — expliciet eigen bestand
// i.p.v. op Next's terugval-gedrag te vertrouwen, zodat de Twitter-kaart
// altijd zeker een afbeelding toont.
export const size = socialImageSize;
export const contentType = "image/png";

export default function TwitterImage() {
  return renderSocialImage();
}
