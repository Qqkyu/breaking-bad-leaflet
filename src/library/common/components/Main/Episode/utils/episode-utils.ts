export function createEpisodeInfo(title: string, season: number, episode: number) {
  return `${title} (S${season}.E${episode})`;
}
