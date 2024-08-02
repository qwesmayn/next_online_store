export interface IFilterQuerys {
    id?: number;
    query : string;
    count? : number;
}

export interface IFilterList {
    nameQuery : string;
    querys : IFilterQuerys[]
}