import {Pagination} from './pagination';

export class PaginatedResult<T> extends Array<T>
{
    constructor(public readonly pagination: Pagination)
    {
        super();
    }
}
