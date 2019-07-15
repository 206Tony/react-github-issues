import React from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const IssueShow = (props) => {
  let issue = props.issues.find((issue) => {
    return issue.id === parseInt(props.match.params.id)
  })
  return (
    <div>
      <h3>{issue.title}</h3>
      <h3>#{issue.id}</h3>
      <ReactMarkdown source={issue.body} />
    </div>
  )
}

export default IssueShow;