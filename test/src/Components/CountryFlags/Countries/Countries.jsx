import React, { useEffect, useState } from "react";
import axios from "axios";
import "./stylecountries.css";
import { Link } from "react-router-dom";


const Countries = () => {

    const [country, setCountry] = useState("");
    useEffect(() => {
        axios.get("https://restcountries.com/v2/all")
            .then(res => setCountry(res.data))
    }, [])





    return (
        <>
            <h1 style={{ textAlign: "center", fontFamily: "Vazir", margin: 0, padding: "20px" }}>کشورها</h1>
            <div className="total-countries">
                {
                    country.length > 0 && (
                        country.map(val => {
                            return (
                                <ul className="total-box-country" key={val.alpha2Code}>
                                    <Link to={`/Details/${val.name}`} style={{ textDecoration: "none" }}>
                                        <img className="image-country" src={val.flag} alt="flag" />
                                        <div className="content-countries">
                                            <li className="name-country"> {val.name} </li>
                                            <p className="population-country">Population : {val.population} </p>
                                            <p className="region-country">Region : {val.region} </p>
                                            <p className="capital-country">Capital : {val.capital} </p>
                                        </div>
                                    </Link>
                                </ul>
                            )
                        })
                    )
                }
            </div>
        </>
    );
}

export default Countries;




