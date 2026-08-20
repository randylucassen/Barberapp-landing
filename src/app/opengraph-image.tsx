import { renderSocialImage, socialImageSize } from "@/lib/social-image";

// Dit is wat verschijnt als iemand de link deelt op WhatsApp/LinkedIn/
// Facebook — zonder deze file valt zo'n preview terug op een kale titel
// zonder afbeelding.
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderSocialImage();
}
