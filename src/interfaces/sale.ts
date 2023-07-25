import PList from "./pList"

interface Sale {
    id: number,
    date: Date,
    client: string,
    branch: string,
    details: PList[],
    total: number
}

export default Sale