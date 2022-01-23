

export default function LoadingSpinner() {
  return <div className="container">
    <div className="justify-content-center m-4">
        <div className="spinner-border m-4" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
}