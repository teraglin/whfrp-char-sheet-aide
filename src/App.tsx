import React, { useState, useEffect } from 'react'
import './App.css'
import * as characterData from './04 data/character.json'

function App() {
  // type CharData = typeof characterData

  const data = characterData

  const [descriptorData, setDescriptorData] = useState(data.descriptors)
  const [characteristicsData, setCharacteristicsData] = useState(
    data.characteristics,
  )

  type CharDataDescriptor = typeof descriptorData
  type CharDataCharacteristics = typeof characteristicsData

  function changeDescriptorData(data: string, key: string) {
    setDescriptorData({
      ...descriptorData,
      [key]: data,
    })
  }

  const printDescriptors = (data: CharDataDescriptor) => {
    return (
      <div>
        <h3>Descriptors</h3>
        {Object.keys(data).map((key: string, index: number) => (
          <h4 key={index}>
            <strong>{key}:</strong> {' ' + data[key as keyof typeof data]}
          </h4>
        ))}
      </div>
    )
  }
  const printCharacteristics = (data: CharDataCharacteristics) => {
    return (
      <div>
        <h3>Characteristics</h3>
        {Object.keys(data).map((key, index) => (
          <div>
            <h4 key={index}>
              <strong>{key}:</strong>
            </h4>
            <ul>
              <li>initial: {data[key as keyof typeof data].initial}</li>
              <li>advances: {data[key as keyof typeof data].advances}</li>
              <li>current: {data[key as keyof typeof data].current}</li>
            </ul>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="body">
      <div className="content">
        <form>
          {Object.keys(descriptorData).map((key, index) => (
            <label>
              {key}
              <input
                type="text"
                name={key}
                key={index}
                onChange={(event) => {
                  event.preventDefault()
                  changeDescriptorData(event.target.value, key)
                }}
              ></input>
            </label>
          ))}
        </form>
        <button onClick={() => changeDescriptorData('bill', 'name')}>
          Button
        </button>
        {printDescriptors(descriptorData)}
        {printCharacteristics(characteristicsData)}
      </div>
    </div>
  )
}

export default App
