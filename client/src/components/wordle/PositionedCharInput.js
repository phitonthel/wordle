export default function PositionedCharInput(props) {
  return <input type="" className="form-control col-2" placeholder=""
    onChange={(e) => props.setPositionedChars({ ...props.positionedChars, [props.index]: e.target.value.toLowerCase() })}>
  </input>
}