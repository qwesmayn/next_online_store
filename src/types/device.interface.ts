export interface Device {
    id: number,
    name: string,
    price: number,
    raiting: string,
    img: string,
}

export interface IDevice{
    count : number,
    devices : Device[]
}