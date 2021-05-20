export function sortMoviesByAttribute(moviesArray, sortAttribute = 'release_date') {
    return moviesArray.moviesData.slice().sort(function (a, b) {
        if (a[sortAttribute] > b[sortAttribute]) {
            return 1
        } else if (a[sortAttribute] < b[sortAttribute]) {
            return -1
        }
        return 0
    })
}
