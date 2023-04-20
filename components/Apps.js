import React, { useState, useEffect } from 'react';

function Apps() {
  const [apps, setApps] = useState([]);
  useEffect(() => {
    async function fetchApps() {
      try {
        const response = await fetch('https://localhost:7117/api/App/GetAppWithReviews');
        const data = await response.json();
        setApps(data);
        console.log(apps);
      } catch (error) {
        console.error(error);
      }
    }

    fetchApps();
  }, []);
  const [selectedCategory, setSelectedCategory] = useState('Top Selling');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedFilter, setSelectedFilter] = useState('Top Selling');

  const renderItems = () => {
  


    return apps.map((item) => (
      <div key={item.id} onClick={() => console.log(item.title)}>
        <p>{item.name}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Apps</h2>
      <div>
        <h3>Filter by:</h3>
        <div>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {/* <option value="All">All Apps</option> */}
            <option value="Top Selling">Top Selling</option>
            <option value="New Releases">New Releases</option>
            <option value="Recommended">Recommended</option>
          </select>
        </div>
        <div>
          <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="All">All Genres</option>
            <option value="Education">Education</option>
            <option value="Music">Music</option>
            <option value="SocialMedia">Social Media</option>
          </select>
        </div>
        <div>
          {/* <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
            <option value="Top Selling">
            </option>
<option value="Top Charts">Top Charts</option>
<option value="New Releases">New Releases</option> */}
{/* </select> */}
</div>
</div>
<div>
<h3>{selectedCategory} ({renderItems().length} Items)</h3>
{renderItems()}
</div>
</div>
);
}

export default Apps;