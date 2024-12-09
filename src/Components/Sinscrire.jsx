import '../Styles/global.css';
function Sinscrire() {
    return (
        <div className="sins">
            <img src="https://i.ibb.co/Rv61vJ2/BUFFET-037-1.png" alt="image1" className="image1" />
            <div className="sins-box">
                <div className="sins-text1" style={{ fontWeight: "800px", color: "#231F20", fontSize: "40px", display: "flex", gap: "5px", marginTop: "20px", marginLeft: "30px" }}>
                    S`&apos;`inscrire & economiser <p className="ten" style={{ color: "#5CD2DD" }}>10%</p>
                </div>

                <div className="sins-text2">
                    <p> Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didnot. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.</p>
                </div>
                <div className="fl">
                    <input type="text" className='input1' placeholder='john@doe.com' />
                    <button type='submit' className='btn1'>Sinscrire <div className="btn">→</div></button>
                </div>
            </div>

        </div>
    )
}
export default Sinscrire;