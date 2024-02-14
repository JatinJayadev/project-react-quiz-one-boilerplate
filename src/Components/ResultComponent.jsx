import Styles from './Result.module.css'

function ResultComponent() {
    return (
        <div className={Styles.container}>
            <h2>Result</h2>
            <div className={Styles.box} >
                <h3>You need more practice!</h3>
                <h1>Your score is 20%</h1>
                <div className={Styles.details} >
                    <p>Total number of questions</p>
                    <p>15</p>
                </div>
                <div className={Styles.details}>
                    <p>Number of attempted questions</p>
                    <p>9</p>
                </div>
                <div className={Styles.details}>
                    <p>Number of correct answers</p>
                    <p>3</p>
                </div>
                <div className={Styles.details}>
                    <p>Number of wrong answers</p>
                    <p>6</p>
                </div>
            </div>
            <div className={Styles.footer} >
                <button className={Styles.playagain}>Play again</button>
                <button className={Styles.back}>Back to home</button>
            </div>
        </div>
    )
}

export default ResultComponent