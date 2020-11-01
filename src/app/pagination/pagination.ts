export class Pagination
{
    constructor(page: number = 1, perPage: number = 50)
    {
        this.page = page;
        this.perPage = perPage;
    }

    page: number;
    perPage: number;
    total: number;
    totalPages: number;

    public hasMorePages()
    {
        return this.page === 0 || this.page < this.totalPages;
    }

    public static fromTotal(total: number, page: number, perPage: number): Pagination
    {
        let pagination = new Pagination();
        pagination.total = total;
        pagination.page = page;
        pagination.perPage = perPage;
        pagination.totalPages = Math.ceil(total / perPage);

        return pagination;
    }
}
