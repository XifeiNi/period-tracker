function Predict(state) {
    // console.log(state);
    const userData = state["userData"];
    // console.log(userData);
    for (let date in Object.keys(userData).sort()) {
        console.log(date);
    }
}

export default Predict;