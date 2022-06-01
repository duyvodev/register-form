import "./styles.css"

export default function formWrapper(props) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
            }}
            className="formWrapper"
        >
            {props.children}
        </form>
    )
}