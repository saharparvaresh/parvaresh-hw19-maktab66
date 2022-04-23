import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./stylecountry.css";


const Country = (props) => {

    const { name } = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState("");
    const [convertBorders, setConvertBorders] = useState([]);

    useEffect(() => {
        axios.get(`https://restcountries.com/v2/name/${name}`)
            .then(res => {
                setCountry(res.data)
            })
    }, [name])


    useEffect(() => {
        axios.get("https://restcountries.com/v2/all")
            .then(res => {
                res.data.map(borders => {
                    if (country.length > 0) {
                        country.map(val => {
                            if (val.borders) {
                                if (val.borders.indexOf(borders.alpha3Code) > -1) {
                                    setConvertBorders(prevState => {
                                        return [...prevState, borders.name]
                                    })
                                } else {
                                    return null
                                }
                            }
                        })
                    }
                })
            })
        return () => {
            setConvertBorders("")
        }
    }, [country])



    const clickHandler = (id) => {
        navigate(`/Details/${id}`, { replace: true })
    }

    return (
        <>
            <button onClick={() => navigate("/", { replace: true })}>Back</button>
            {
                country.length > 0 && (
                    country.map(val => {

                        return (
                            <div className="total-country" key={val.alpha2Code}>
                                <img className="flag-country" src={val.flag} alt="flag" />
                                <div className="content-country">
                                    <h1 className="title-country"> {val.name} </h1>

                                    <div className="description-country">
                                        <span> Native Name: {val.nativeName} </span>
                                        <span> Population: {val.population} </span>
                                        <span> Region: {val.region} </span>
                                        <span> Sub Region: {val.subregion} </span>
                                        <span> Capital: {val.capital} </span>
                                        <span> Top Level Domain: {val.topLevelDomain[0]} </span>
                                        <span> Currencies: {val.currencies[0].name} </span>
                                        <span> Languages: {
                                            val.languages.map((language, index) => {
                                                if (index !== val.languages.length - 1) {
                                                    return `${language.name}, `
                                                }
                                                return `${language.name}`
                                            })
                                        } </span>
                                    </div>

                                    <span> Border Countries: {
                                        convertBorders.length > 0 ? (
                                            convertBorders.map(borders => {
                                                return <button onClick={() => clickHandler(borders)} key={borders}> {borders} </button>
                                            })
                                        ) : "Nothing!"
                                    } </span>
                                </div>
                            </div>
                        )
                    })
                )

            }
        </>
    );
}

export default Country;


