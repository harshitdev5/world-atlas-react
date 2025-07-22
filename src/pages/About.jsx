import React from 'react';
import countryFacts from "../api/countryData.json";

export default function About() {
  return (
    <section className='secton-about container'>
      <h2 className='container-title'>
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>

      <div className="gradient-cards">
        {countryFacts.map((country) => {            //mapping method. 
          const { id, countryName, capital, population, interestingFact } = country;    // using props

          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{countryName}</p>

                <p>
                  <span className='card-description'>Capital: </span>
                  {capital}
                </p>

                <p>
                  <span className='card-description'>Population: </span>
                  {population}
                </p>

                <p>
                  <span className='card-description'>Interesting Fact: </span>
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
