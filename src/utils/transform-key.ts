// Helper function to change eg, twitter.title into twitter:title
export default function transformKey(key: string): string {
  return key.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
}
