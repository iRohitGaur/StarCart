export default function filterData(initialState, state) {
  // RG: Filter based on Category
  let filteredData =
    state.category.length !== 0
      ? state.productData.filter((p) => state.category.includes(p.category))
      : [...state.productData];

  // RG: Filter based on Birds
  if (state.bird.length !== 0) {
    filteredData = filteredData.filter((p) => state.bird.includes(p.bird));
  }

  // RG: Filter based on Price
  if (state.price !== initialState.price) {
    filteredData = filteredData.filter((p) => p.price.current <= state.price);
  }

  // RG: Filter based on Rating
  if (state.rating !== initialState.rating) {
    filteredData = filteredData.filter((p) => p.rating >= state.rating);
  }

  // RG: Sort based on Price/Rating
  if (state.sort !== null) {
    if (state.sort === "priceLowToHigh") {
      filteredData.sort((a, b) => a.price.current - b.price.current);
    } else if (state.sort === "priceHighToLow") {
      filteredData.sort((a, b) => b.price.current - a.price.current);
    } else if (state.sort === "ratingLowToHigh") {
      filteredData.sort((a, b) => a.rating - b.rating);
    } else if (state.sort === "ratingHighToLow") {
      filteredData.sort((a, b) => b.rating - a.rating);
    }
  }
  return filteredData;
}
