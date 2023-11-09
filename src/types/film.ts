export type FilmType = {
    id: number;
    name: string;
    imgSrc: string;
    bgImgSrc?: string;
    videoSrc: string;
    rating?: string;
    ratingCount?: number;
    genre: string;
    annotation?: string[];
    director?: string;
    starring?: string[];
    runTime?: string;
    releaseDate?: string;
}
