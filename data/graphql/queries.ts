export const animeList = `
query ($page: Int, $perPage: Int) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (type: ANIME) {
        id
        title {
            english
        }
        description
        coverImage {
            large
        }
    }
  }
}`;