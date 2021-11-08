import IServerResponseData from '../shared/response';

import { Category } from '../shared/enumerations';

export interface IAddMovieResponse extends IServerResponseData {
    readonly data?: Readonly<{
        id: number;
        title: string;
        description: string;
        category: Category;
        release_date: number;
        movie_hour_length: number;
        movie_minute_length: number;
        image_path: string;
        video_path: string;
        like_count: number;
    }>;
}