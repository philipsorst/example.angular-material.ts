import {Pagination} from './pagination';

export class PaginatedResult<T> extends Array<T>
{
    public pagination: Pagination;
}
