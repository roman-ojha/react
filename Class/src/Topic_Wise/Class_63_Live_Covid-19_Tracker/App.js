import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      setData(actualData.statewise);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      {/* <h1 className="title">INDIA COVID-19 Dashboard</h1> */}
      <table border="1">
        <caption>INDIA COVID-19 Dashboard</caption>
        <thead>
          <tr>
            <th>State</th>
            <th>Confirmed</th>
            <th>Recoverd</th>
            <th>Deaths</th>
            <th>Active</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {data.map((curElem, ind) => {
            return (
              <>
                <tr key={curElem.state}>
                  <th>{curElem.state}</th>
                  <td>{curElem.confirmed}</td>
                  <td>{curElem.recovered}</td>
                  <td>{curElem.deaths}</td>
                  <td>{curElem.active}</td>
                  <td>{curElem.lastupdatedtime}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default App;
