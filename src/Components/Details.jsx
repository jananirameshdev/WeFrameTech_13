function Details() {
    const det = () => [
        {
            topic: "Art de la table"
        },
        {
            topic: "Mobilier"
        },
        {
            topic: "Nappage"
        },
        {
            topic: "Matériel de salle"
        },
        {
            topic: "Cuisine"
        },
        {
            topic: "Barbecue"
        },
        {
            topic: "Tente"
        },
        {
            topic: "Chauffage"
        },
        {
            topic: "Podium - Piste de danse"
        },
        {
            topic: "Son et lumière"
        },
        {
            topic: "Packs"
        }, {
            topic: "Consommables"
        }
    ]
    return (

        <div className="detail" style={{ display: "flex", gap: "20px", marginLeft: "60px", marginTop: "30px", marginBottom: "20px" }}>
            <div className="te">
                {det().map((item, index) => (
                    <div key={index}>{item.topic}</div>
                ))}
            </div>
        </div>
    )
}
export default Details;