import React from 'react'
import ReactDOM from 'react-dom/client'

const Counter = props => {
	const span = (value, i=null)=> <span className="shadow col-1 p-2 badge text-bg-success" key={i}>{value}</span>

	const numbers = props.result.split("")
	const enumb = numbers.map((number, i) => span(number, i))
	
  return (
  <div className="m-auto shadow-lg container-fluid p-5 col-9 fs-1 bg-dark bg-gradient rounded-5">
		<div className="row justify-content-evenly">
			{span(<i className="bi bi-clock"></i>)}
			{enumb}
		</div>
	</div>
  )
}

let secs = 0
const root = ReactDOM.createRoot(document.getElementById('root'))

const refresh = async () => {
  root.render(
  <React.StrictMode>
    <Counter
      result={('00000'+secs).slice(-5)}
     />
	</React.StrictMode>
	)
  await new Promise(_ => setTimeout(_, 1000))
  secs++
  refresh()
}

refresh()