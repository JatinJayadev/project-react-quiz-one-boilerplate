import Styles from './Home.module.css'

function HomeComponent() {
    return (
        <div className={Styles.container}>
            <p>Quiz App</p>
            <button>Play</button>
        </div>
    )
}

export default HomeComponent