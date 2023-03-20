export class Pagination
{
    public readonly totalPages: number;

    constructor(public readonly total: number, public readonly page: number = 1, public readonly perPage: number = 50)
    {
        this.totalPages = Math.ceil(total / perPage)
    }

    public hasMorePages()
    {
        return this.page === 0 || this.page < this.totalPages;
    }
}
