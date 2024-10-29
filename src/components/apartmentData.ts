type ApartmentModel = {
    apartmentNum: string;
    numOfBedrooms: string;
    numOfBaths: string;
    rentAmount: number;
}

export const apartments: ApartmentModel[] = [
    {apartmentNum: '010', numOfBedrooms: '2', numOfBaths: '1', rentAmount: 650},
    {apartmentNum: '013', numOfBedrooms: '2', numOfBaths: '2', rentAmount: 815},
    {apartmentNum: '015', numOfBedrooms: '2', numOfBaths: '2', rentAmount: 885},
    {apartmentNum: '020', numOfBedrooms: '3', numOfBaths: '2', rentAmount: 885},
    {apartmentNum: '023', numOfBedrooms: '3', numOfBaths: '2', rentAmount: 995},
    {apartmentNum: '025', numOfBedrooms: '3', numOfBaths: '3', rentAmount: 1210},
    {apartmentNum: '030', numOfBedrooms: '4', numOfBaths: '2', rentAmount: 1160},
    {apartmentNum: '033', numOfBedrooms: '4', numOfBaths: '3', rentAmount: 1350},
    {apartmentNum: '035', numOfBedrooms: '4', numOfBaths: '4', rentAmount: 1570},
    {apartmentNum: '040', numOfBedrooms: '5', numOfBaths: '3', rentAmount: 1570},
    {apartmentNum: '045', numOfBedrooms: '5', numOfBaths: '4', rentAmount: 1790},
    {apartmentNum: '050', numOfBedrooms: '5', numOfBaths: '5', rentAmount: 2100},
];