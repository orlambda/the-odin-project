const myArr = [1, 2, 3, 4, 5, 6];

console.log(sumOfTripledEvens(myArr));
// = 36

function sumOfTripledEvens(arr) {
    const evens = arr.filter((x) => (x % 2) === 0)
    const TripledEvens = evens.map((x) => x * 3)
    return TripledEvens.reduce((total, currentItem) => {
        return total + currentItem;
    }, 0)
}