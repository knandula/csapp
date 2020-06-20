const dataSource = [{
    country: 'Complaints',
    hydro: 59.8,
    oil: 937.6,
    gas: 582,
}, {
    country: 'Suggestions',
    hydro: 74.2,
    oil: 308.6,
    gas: 35.1,

}, {
    country: 'Product Ideas',
    hydro: 40,
    oil: 128.5,
    gas: 361.8,

}, {
    country: 'Business Ideas',
    hydro: 22.6,
    oil: 241.5,
    gas: 64.9,

}];

export default {
    dataSource() {
        return dataSource;
    }
}
;
