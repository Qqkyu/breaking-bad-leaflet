export interface episode {
  episode_id: number;
  title: string;
  season: number;
  episode: number;
  air_date?: string;
  characters?: string[];
  series?: string;
}
