import { useParams, NavLink } from 'react-router-dom';
import { useState, useTransition, useEffect } from "react";
import { getCountryIndData } from '../../api/postApi';
import Loader from '../UI/Loader';

export default function CountryDetails() {
  const { id } = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(id);
       console.log(res);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, [id]);

  if (isPending || !country) return <Loader />;

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        <div className="country-image grid grid-two-cols">
          <img src={country.flags?.svg} alt={country.flags?.alt} className="flag" />
          <div className="country-content">
            <p className="card-title"> {country.name?.official} </p>

            <div className="infoContainer">
              <p>
                <span className="card-description"> Native Names:</span>
                {country.name?.nativeName &&
                  Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
              </p>
              <p>
                <span className="card-description"> Population: </span>
                {country.population?.toLocaleString()}
              </p>
              <p>
                <span className="card-description"> Region:</span>
                {country.region}
              </p>
              <p>
                <span className="card-description"> Sub Region:</span>
                {country.subregion}
              </p>
              <p>
                <span className="card-description"> Capital:</span>
                {country.capital?.[0]}
              </p>
              <p>
                <span className="card-description">Top Level Domain:</span>
                {country.tld?.[0]}
              </p>
              <p>
                <span className="card-description"> Currencies: </span>
                {country.currencies &&
                  Object.keys(country.currencies)
                    .map((cur) => country.currencies[cur].name)
                    .join(", ")}
              </p>
              <p>
                <span className="card-description">Languages: </span>
                {country.languages &&
                  Object.keys(country.languages)
                    .map((lang) => country.languages[lang])
                    .join(", ")}
              </p>
            </div>
          </div>
        </div>
        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}