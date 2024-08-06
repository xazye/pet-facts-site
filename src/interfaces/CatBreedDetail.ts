interface CatBreedDetail {
    pageid: number;
    title: string;
    extract: string;
    thumbnail?: {
      source: string;
      width: number;
      height: number;
    };
  }
export type { CatBreedDetail };