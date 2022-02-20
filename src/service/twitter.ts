import axios from "axios"

export const twitterApi = axios.create({
  baseURL: "https://api.twitter.com/2",
  headers: {
    Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAANYVZQEAAAAAINwKsjERc5RI3P7Grsdgo9IzkQ0%3DTJv07zx8sGxb2hs0bWvn62pQxKyaTBkKU4sHQMtKWd2hcJBzQc`,
  },
})
