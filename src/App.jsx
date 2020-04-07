import React from "react";
import Card from "./components/Card.jsx";

const data = require("./data.json");



function App() {
  return (
    <div>
      <div class="header"></div>
      {data.map(ad => {
        return (<Card
          company={ad.company}
          logo={ad.logo}
          new={ad.new}
          featured={ad.featured}
          position={ad.position}
          role={ad.role}
          level={ad.level}
          postedAt={ad.postedAt}
          contract={ad.contract}
          location={ad.location}
          languages={ad.languages}
          tools={ad.tools}
        />)
      })
      }

    </div>
  )
  // <Filter />
  // cards.map => <Card />
}

export default App;

// "id": 1,
// "company": "Photosnap",
// "logo": "./images/photosnap.svg",
// "new": true,
// "featured": true,
// "position": "Senior Frontend Developer",
// "role": "Frontend",
// "level": "Senior",
// "postedAt": "1d ago",
// "contract": "Full Time",
// "location": "USA Only",
// "languages"