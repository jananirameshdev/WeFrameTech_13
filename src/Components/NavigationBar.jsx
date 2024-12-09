
import Logo from "./Logo";
import "../Styles/global.css";
import Details from "./Details";

function NavigationBar() {
    return (
        <div className="drp">
            <div className="navbar">
                <div className="log">
                    <Logo />
                </div>

                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Rechercher un produit"
                        className="search-input"
                    />
                    <div className="search-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.3">
                                <path d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z" stroke="#003349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                        </svg>

                    </div>
                </div>

                <div className="navbar-actions">
                    <div className="navbar-item">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.25 12.375V14.25C11.25 14.9489 11.25 15.2984 11.1358 15.574C10.9836 15.9416 10.6916 16.2336 10.324 16.3858C10.0484 16.5 9.69891 16.5 9 16.5C8.30109 16.5 7.95163 16.5 7.67597 16.3858C7.30843 16.2336 7.01642 15.9416 6.86418 15.574C6.75 15.2984 6.75 14.9489 6.75 14.25V12.375M11.25 12.375C13.2366 11.507 14.625 9.43161 14.625 7.125C14.625 4.0184 12.1066 1.5 9 1.5C5.8934 1.5 3.375 4.0184 3.375 7.125C3.375 9.43161 4.76336 11.507 6.75 12.375M11.25 12.375H6.75" stroke="#282F35" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Inspirations</span>
                    </div>
                    <div className="navbar-item">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.99425 2.27985C7.32813 0.332 4.54975 -0.191965 2.46221 1.59168C0.374663 3.37532 0.0807657 6.35748 1.72012 8.467C3.08314 10.2209 7.2081 13.9201 8.56004 15.1174C8.7113 15.2513 8.78692 15.3183 8.87514 15.3446C8.95213 15.3676 9.03638 15.3676 9.11337 15.3446C9.20158 15.3183 9.27721 15.2513 9.42846 15.1174C10.7804 13.9201 14.9054 10.2209 16.2684 8.467C17.9077 6.35748 17.6497 3.35656 15.5263 1.59168C13.4029 -0.173202 10.6604 0.332 8.99425 2.27985Z" stroke="#8F9BA0" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span>Mes favoris</span>
                    </div>
                    <button className="btn-publish" style={{ display: "flex" }}> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66663 1.66663H2.7551C2.96011 1.66663 3.06262 1.66663 3.14511 1.70433C3.21781 1.73755 3.27941 1.79098 3.32258 1.85825C3.37157 1.93458 3.38607 2.03606 3.41506 2.23901L3.80948 4.99996M3.80948 4.99996L4.68606 11.4428C4.7973 12.2604 4.85292 12.6692 5.04838 12.9769C5.22061 13.2481 5.46753 13.4637 5.75942 13.5978C6.09068 13.75 6.50325 13.75 7.32838 13.75H14.46C15.2454 13.75 15.6381 13.75 15.9591 13.6086C16.2421 13.484 16.4848 13.2832 16.6602 13.0285C16.8591 12.7396 16.9326 12.3538 17.0795 11.5823L18.1825 5.79137C18.2343 5.5198 18.2601 5.38401 18.2227 5.27788C18.1898 5.18477 18.1249 5.10636 18.0396 5.05664C17.9423 4.99996 17.8041 4.99996 17.5277 4.99996H3.80948ZM8.33329 17.5C8.33329 17.9602 7.9602 18.3333 7.49996 18.3333C7.03972 18.3333 6.66663 17.9602 6.66663 17.5C6.66663 17.0397 7.03972 16.6666 7.49996 16.6666C7.9602 16.6666 8.33329 17.0397 8.33329 17.5ZM15 17.5C15 17.9602 14.6269 18.3333 14.1666 18.3333C13.7064 18.3333 13.3333 17.9602 13.3333 17.5C13.3333 17.0397 13.7064 16.6666 14.1666 16.6666C14.6269 16.6666 15 17.0397 15 17.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                        Publier</button>
                    <div className="navbar-item">
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="44" height="44" rx="22" fill="#EAEDEE" />
                        </svg>

                        <span style={{ display: "flex" }}>FR  <img src="https://i.ibb.co/6NsXy3B/down-arrow.png" /></span>
                    </div>
                </div>
                <br />
            </div>
            <Details />
        </div>
    );
}

export default NavigationBar;
