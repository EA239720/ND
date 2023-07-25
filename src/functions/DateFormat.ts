function DateFormat(d: string) : string {
    const auxD = new Date(d.replace(/-/g, '\/').replace(/T.+/, ''));

    const Datte = auxD.getDate() < 10 ? '0' + auxD.getDate() : auxD.getDate();
    const Month = auxD.getMonth() < 9 ? '0' + (auxD.getMonth() + 1) : (auxD.getMonth() + 1);
    const Year = auxD.getFullYear();

    return Datte  + '-' + Month + '-' + Year;
}

export default DateFormat