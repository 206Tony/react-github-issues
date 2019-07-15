import React from 'react';
import {Link} from 'react-router-dom';

const IssueIndex = (props) => {

  const issues = props.issues.map((issue, i) => (
    <div key={i} > 
      <div className='issue-show'>
        <Link to={`/issue/${issue.id}`} className="title"><h3 className="title"><i class="fas fa-exclamation-circle" style={{padding: '10px'}}></i>{issue.title}</h3></Link>{' '} 
        <p>{issue.title}</p>
      </div>
    </div>
  ))
  return (
    <div className='issue-box'>
      <h1>100 Open Issues</h1>
      {issues}
    </div>
  );
}

export default IssueIndex;