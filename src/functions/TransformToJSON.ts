export default function TranformToJSON(json: any) {
    let res;

    res = JSON.stringify(json);

    res = JSON.parse(res);

    return res;
}