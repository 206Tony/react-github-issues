import React from 'react';

const SplashPage = (props) => {
  return(
    <div>
      <h2>👋 Want to submit an issue to facebook/react?</h2>
      <p>If you have a bug or an idea, read the <a href='contributing guidelines'>contributing guidelines</a> before opening an issue.</p>
      <p>Issues labeled <button type='btn btn success' style={{backgroundColor: 'green'}}>good first issue</button> can be good first contributors</p>
      <form action="/issues">
        <input type="submit" value='Go to Issues' action='/issues'/>
      </form>
    </div>
  )
}

export default SplashPage;