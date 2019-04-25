import React from "react";
import "../../styles/css/content-styles.css";

export class Careers extends React.Component {
  render() {
    return (
      <div id="careers">
        <div className="pageContainer">
          <h1 className="pageHeader">Application Guide</h1>
          <p>
            Are you hard-working?<br/>
            Are you happy helping customers satisfy their needs?<br/>
            Are you experienced working in a retail setting?<br/>
            <br/>
            If so, we want you to apply for a position as an associate!
            We have exciting full and part-time positions available now! 
            Just print and complete the application form below, leave it 
            leave it with a sales associate on location, and we'll contact
            you as soon as possible! 
          </p>
          <embed src="http://www.discontentstores.com/pdfs/DiscontentApplication.pdf" width="900px" height="2300" type='application/pdf'/>
        </div>
      </div>
    );
  }
}
