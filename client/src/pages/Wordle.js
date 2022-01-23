import { useState, useEffect } from "react"
import Lib from "../libs/wordle"
import dict from "../libs/dict"

import PositionedCharInput from "../components/wordle/PositionedCharInput"
import WordCard from "../components/wordle/WordCard"
import TriviaButton from "../components/wordle/TriviaButton"
import LoadingSpinner from "../components/wordle/LoadingSpinner"

export default function Wordle() {
  const fiveWordsDict = dict.split('\n').filter(word => word.length === 5)
  // const counter = Lib.createCounterObj()

  const [output, setOutput] = useState([])
  const [unavailableChars, setUnavailableChars] = useState('')
  const [includedChars, setIncludedChars] = useState('')
  const [positionedChars, setPositionedChars] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
    4: ''
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => createWordCards(), 100)
  }

  const createWordCards = async () => {
    const availableWords = Lib.filterWordsByPosition(
      Lib.filterWordsByIncludedChars(
        Lib.filterWordsByAvailableChars(fiveWordsDict, Lib.createAvailableChars(unavailableChars)),
        includedChars
      ),
      positionedChars
    )
    setOutput(availableWords)
    console.log(availableWords);
    setIsLoading(false)
  }

  return (
    <header className="my-4">
      <div className="container">
        <div>{unavailableChars} {includedChars} {JSON.stringify(positionedChars)}</div>
        <form>
          <div className="form-group row">
            <label htmlFor="unavailableChars">Unavailable Characters</label>
            <input 
              type="text" 
              className="form-control" 
              id="unavailableChars" 
              placeholder="ie. dkubn"
              onChange={(e) => setUnavailableChars(e.target.value)}
            >
            </input>
            <small id="" className="form-text text-muted">These are the black characters in the Wordle.</small>
          </div>
          <div className="form-group row">
            <label htmlFor="includedChars">Included Characters</label>
            <input 
              type="text" 
              className="form-control" 
              id="includedChars" 
              placeholder="ie. ek"
              onChange={(e) => setIncludedChars(e.target.value)}
            >
            </input>
            <small id="" className="form-text text-muted">These are the yellow characters in the Wordle. Currently, the position is ignored.</small>
          </div>
          <div className="form-group row">
            <div>
              Correct Characters
            </div>
            <div className="col-12 row justify-content-center">
              {
                [0, 1, 2, 3, 4].map(index => 
                <PositionedCharInput
                  setPositionedChars={setPositionedChars}
                  positionedChars={positionedChars}
                  index={index}
                  key={index}>
                </PositionedCharInput>)
              }
            </div>
            <div>
              <small id="emailHelp" className="form-text text-muted">These are the green characters in the Wordle. Empty it if not available.</small>
            </div>
          </div>
          <button type="" className="btn btn-primary mx-2"
            onClick={handleSubmit}>
            Submit
          </button>
          <TriviaButton></TriviaButton>
        </form>

        <div>
          <div className="my-4">
            {
              output.length > 0
                ? `Available Words : showing ${output.length} result(s)`
                : `No entries`
            }
          </div>
          {
            isLoading 
              ? <LoadingSpinner></LoadingSpinner>
              : output.map((availableWord, index) => 
                  <WordCard availableWord={availableWord} key={index}></WordCard>
                )
          }
        </div>
      </div>
    </header>
  )
}