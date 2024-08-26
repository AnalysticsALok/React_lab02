function App(){
    const currentYear = new Date().getFullYear()
    const birthYear = 1997
    const calYear = currentYear - birthYear
    const birthMonth = 4
    const currentMonth = new Date().getMonth()
    const calMonth = currentMonth - birthMonth
    const birthdate = 9
    const currentdate = new Date().getDate()
    const caldate = currentdate - birthdate


    const st1 = {color: 'coral',backgroundColor:'pink' }
    return(
        <div className="blackcontainer">
        <h1>Quick Start </h1>
        <p>Welcome to the react documentation! This page will give you an introduction to the 80% of React concept thsat you will use a day basis</p>
        <div className="greycontainer">
            <ul>
            <h3>You will learn</h3>
                <li>How to create and nest components</li>
                <li>How to add markup and styles</li>
                <li>How to display data</li>
                <li>How to render conditions and lists</li>
                <li>How to respond to events and update this screen</li>
                <li>How to share data between components</li>

            </ul>
        </div>
        </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root'))
.render(<App/>)