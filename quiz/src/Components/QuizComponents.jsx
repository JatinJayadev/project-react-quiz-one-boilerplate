import Styles from './Quiz.module.css'

function QuizComponents() {
    return (
        <div className={Styles.container}>
            <h1>Question</h1>
            <p className={Styles.notag}>1 of 15</p>
            <p className={Styles.questiontag}>Which is the only mammal that can jump?</p>
            <div className={Styles.optcont}>
                <button>Dog</button>
                <button>Elephant</button>
                <button>Elephant</button>
                <button>Elephant</button>
            </div>
            <div className={Styles.footer}>
                <button className={Styles.prev}>Previous</button>
                <button className={Styles.next}>Next</button>
                <button className={Styles.quit}>Quit</button>
            </div>
        </div>

    )
}

export default QuizComponents