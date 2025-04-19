function handleClick(message) {
    alert(message);
}

export default function Clicker({message, text}) {
    // const handleClick = () => alert(message);
    return (
        <div>
        <button onClick={() => handleClick(message)}>{text}</button>
        </div>
    );
};

// function handleClick() {
//     console.log("Clicked the button!!");
// }

// function handleHover() {
//     console.log("Hover")
// }

// export default function Clicker() {
//     return (
//         <div>
//             <p onMouseOver={handleHover}>Hover over me</p>
//             <button onClick={handleClick}>Click</button>
//         </div>
//     );
// };
