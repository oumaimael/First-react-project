function Description() {
    return (
        <section>
            <h2>this is a description</h2>
            <p>I am trying react components for the first time</p>
        </section>
    )
}
export default Description

export function Description2 (props) {
    console.log(props)
    return(
        <p>this is the second description {props.title} {props.name}</p>
    )
}


