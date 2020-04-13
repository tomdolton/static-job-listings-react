import React, { useState, useEffect } from "react";
import Card from "./components/Card.jsx";
import Filter from "./components/Filter.jsx";

const data = require("./data.json");

data.map(item => {
  const role = item.role;
  const level = item.level;
  const languages = item.languages;
  const tools = item.tools;
  return item["keyword"] = [role, level, ...(languages || []), ...(tools || [])];
});


function App() {

  const [filters, setFilters] = useState([]);
  const [adList, setAdList] = useState([]);

  function addFilter(name) {
    if (filters.includes(name)) return;
    setFilters(prev => {
      return [...prev, name];
    });
  }

  function removeFilter(name) {
    setFilters(prev => {
      return [...prev.filter(item => item !== name)];
    });
  }

  function clearFilters() {
    setFilters([]);
  }

  function filterAds() {
    const filteredAdsList = [];

    data.forEach(ad => {  //searches through data array of all ads
      let included = true;
      for (let filter of filters) { //searches through filter array of all filters

        switch (true) {
          case ad.role === filter:
          case ad.level === filter:
          case ad.languages && ad.languages.includes(filter):
          case ad.tools && ad.tools.includes(filter):
            break;
          default:
            included = false;
            break;
        }
      }
      if (included) filteredAdsList.push(ad);
    })
    return filteredAdsList;
  }

  useEffect(() => {
    setAdList(filterAds);
  }, [filters]);

  return (
    <div>
      <div class="header"></div>
      {filters.length !== 0 &&
        <Filter
          filters={filters}
          removeFilter={removeFilter}
          clearFilters={clearFilters}
        />}

      {filters.length < 1
        ? data.map(ad => {
          return (<Card
            id={ad.id}
            ad={ad}
            addFilter={addFilter}
          />)
        })
        : adList.map(ad => {
          return (<Card
            id={ad.id}
            ad={ad}
            addFilter={addFilter}
          />)
        })}

    </div>
  )
}

export default App;
