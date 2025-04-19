function handleFormSubmit (e) {
    e.preventDefault();
    console.log("Handle form submit");
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    )
};
