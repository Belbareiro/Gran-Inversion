function PersonCard({ firstname, lastname, age, haircolor }) {
    return (
        <div className="personCard">
            <h2>{lastname}, {firstname}</h2>
            <p>Age: {age}</p>
            <p>Haircolor: {haircolor}</p>
        </div>
    )
}

export default PersonCard