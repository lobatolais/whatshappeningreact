import type { NextApiRequest, NextApiResponse } from "next"
import { twitterApi } from "src/service/twitter"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await twitterApi.get(
    `/tweets/search/recent?query=
      ${req.body.query}&max_results=51`
  )
  return res.json(response.data)
}
