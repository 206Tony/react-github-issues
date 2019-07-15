import React from 'react';
import {Link} from 'react-router-dom';

const IssueIndex = (props) => {
  const issues = props.issues.map((issue, i) => (
    <div key={i}>
      <h3><Link to={`/issue/${issue.id}`}> Open </Link>{' '} {issue.title}</h3>
      <p>{issue.title}</p>
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