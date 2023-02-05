export function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((r) => r?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    return filterData;
}