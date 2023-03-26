import React from 'react';
import '../styles/LogementsTags.css';


function LogementsTags(props) {
    const { tags } = props;
  
    return (
      <div className="logements-tags">
        {tags.map(tag => (
          <div key={tag} className="logements-tag">
            {tag}
          </div>
        ))}
      </div>
    );
  }
  
  export default LogementsTags;
  