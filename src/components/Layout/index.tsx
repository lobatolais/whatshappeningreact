import React, { useState } from "react"
import { PostCard } from "../PostCard"
import Select from "react-select"
import { Container, Header, SelectContainer } from "./style"

export const Layout = () => {
  const options = [
    { value: "react.js", label: "react.js", isFixed: true },
    { value: "next.js", label: "next.js" },
    { value: "styled-components", label: "styled-components" },
    { value: "gatsby", label: "gatsby" },
    { value: "redux", label: "redux" },
    { value: "react-query", label: "react-query" },
  ]

  const [selectedOptions, setSelectedOption] = useState([options[0]])

  const handleSelectOption = (e: any) => {
    setSelectedOption(e)
  }

  return (
    <Container>
      <Header>
        <h1>
          What&apos;s happening in <br />
          React world right now?
        </h1>
        <p>
          Real time tweets so you don&apos;t miss anything about React universe!
          Simply choose your topic and stay tuned.
        </p>
      </Header>
      <SelectContainer>
        <Select
          isMulti
          defaultValue={options[0]}
          options={options}
          className="select"
          isClearable={true}
          value={selectedOptions}
          onChange={handleSelectOption}
        />
      </SelectContainer>
      <PostCard selectedOptions={selectedOptions} />
    </Container>
  )
}
