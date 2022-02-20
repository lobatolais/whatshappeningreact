import axios from "axios"
import React, { useEffect, useState } from "react"
import { FaUserCircle } from "react-icons/fa"
import { Loader } from "../Loader"
import { Card, CardSlider, TextRequestFailed } from "./style"

type Tweets = {
  id: string
  text: string
}

type Options = {
  value: string
  label: string
  isFixed?: boolean
}

type PostCardProps = {
  selectedOptions: Options[]
}

export const PostCard = ({ selectedOptions }: PostCardProps) => {
  const [tweets, setTweets] = useState<Tweets[]>()
  const [isRequestFailed, setIsRequestFailed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const getTweets = async () => {
    const queryValues: string[] = []
    selectedOptions.map((option) => {
      queryValues.push(option.value)
    })
    const query = queryValues.join(" ")
    try {
      const tweetsResponse = await axios.post("/api/tweets", {
        query,
      })
      setIsRequestFailed(false)
      setTweets(tweetsResponse.data.data)
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    } catch (e) {
      setIsRequestFailed(true)
    }
  }

  useEffect(() => {
    getTweets()
  }, [selectedOptions])

  return (
    <>
      {!isRequestFailed ? (
        <>
          {tweets ? (
            <CardSlider>
              <div className="slide-track">
                {tweets.map((tweet, index) => (
                  <Card key={index}>
                    {isLoading ? (
                      <Loader />
                    ) : (
                      <>
                        <FaUserCircle size={48} />
                        <p>{tweet.text}</p>
                      </>
                    )}
                  </Card>
                ))}
              </div>
            </CardSlider>
          ) : (
            <TextRequestFailed>
              Sorry, <br /> there are not enough tweets about this topics :(
            </TextRequestFailed>
          )}
        </>
      ) : (
        <TextRequestFailed>
          Please, <br /> choose at least one topic!
        </TextRequestFailed>
      )}
    </>
  )
}
