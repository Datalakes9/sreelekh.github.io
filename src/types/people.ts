export interface Person {
  name: string;
  title: string;
  bio: string;
  photoAsset: any; // Astro's Image component needs the imported asset object
  cvPath?: string; // Optional path to CV PDF for download (needs to be in /public)
}