import Swal from "sweetalert2"
import Lib from "../../libs/wordle"
import dict from "../../libs/dict"

const CounterCard = (props)=> {
  return  <div className="card">
            <div className="card-body">
              <div> {props.char} </div>
            </div>
          </div>
}

const createVanillaHTML = (sortedCounterArr) => {
  let cards = ''
  sortedCounterArr.forEach(counter => {
    cards += `
      <div class="card">
        <div class="card-body">
          <div> ${counter.char.toUpperCase()}: ${counter.count} characters count </div>
        </div>
      </div>`
  });

  return `
  <div class="m-2">
    Below are the sorted count of each character in Wordle.
    And there are only 3 words that use the top 5 chars! Can you guess which words?</div>
  <small id="" class="form-text text-muted m-2"><b>You can find out the answer by experimentin in the app!</b></small>
  <div>${cards}</div>`
  // <small id="" class="form-text text-muted">arose, oreas, seroa.</small>
  
}

export default function TriviaButton() {
  const handleOnClick = (e) => {
    e.preventDefault()
    const sortedCounter = Lib.sort(Lib.fillCounterObj(dict.split('\n').filter(word => word.length === 5)))
    const sortedCounterArr = Lib.convertObjectToArray(sortedCounter)
    // console.log(sortedCounterArr);
    Swal.fire({
      icon: 'info',
      title: 'Did you know?',
      html: createVanillaHTML(sortedCounterArr),
      width: '1200px'
    })
  }

  return <button type="" className="btn btn-info"
    onClick={handleOnClick}>
    Trivia
  </button>
}