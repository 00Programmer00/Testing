import React from 'react';
import '../App.css';

class TestListComponent extends React.Component{
	render() {
		return (
	      <div className="container">
		    <div className="header clearfix">
  		      <h3>Questionnaire Name</h3>
		      <p className="float-right">Section 1 of 3</p>
		      <hr />
		      <button type="button" className="btn">Back</button>
		      <button type="button" className="btn" id="btn-forward">Forward</button>
		    </div>

		    <div className="main">
		      <ol>
		      	<li>Here comes the question ...
		      	  <ul>
		      	    <li>
		      	    	<form>
		      	    	  <div className="form-group">
		      	    	    <label>String Response</label>
		      	    	    <input type="text" className="form-control" />
		      	    	  </div>
		      	    	</form>
		      	    </li>
		      	    <li>
		      	    	<form>
		      	    	  <div className="form-group">
		      	    	    <label>Textarea Response</label>
		      	    	    <textarea className="form-control" rows="3"></textarea>
		      	    	  </div>
		      	    	</form>
		      	    </li>
		      	    <li>
		      	    	<form>
		      	    	  <div className="form-group">
		      	    	    <label>Number Response</label>
		      	    	    <input type="number" className="form-control" id="numberInput"/>
		      	    	  </div>
		      	    	</form>
		      	    </li>
		      	    <li>
		      	    	<form>
		      	    	  <div className="form-group">
		      	    	    <label>Date Response</label>
		      	    	    <input type="datetime-local" className="form-control" id="dateInput" />
		      	    	  </div>
		      	    	</form>
		      	    </li>
		      	    <li>
		      	    	<form>
		      	    	  <div className="form-check">
		      	    	    <label>Boolean Response</label>
		      	    	    <div className="form-check">
							  <label className="form-check-label">
							    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
							    Yes
							  </label>
							</div>
		      	    	    <div className="form-check">
							  <label className="form-check-label">
							    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
							    No
							  </label>
							</div>
		      	    	  </div>
		      	    	</form>
		      	    </li>
		      	    <li>
		      	    	<form>
		      	    	  <div className="form-check">
		      	    	    <label>Choose one answer</label>
		      	    	    <div className="form-check">
							  <label className="form-check-label">
							    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
							    Option 1
							  </label>
							</div>
		      	    	    <div className="form-check">
							  <label className="form-check-label">
							    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
							    Option 2
							  </label>
							</div>
							<div className="form-check">
							  <label className="form-check-label">
							    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
							    Option 3
							  </label>
							</div>
							<div className="form-check">
							  <label className="form-check-label">
							    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
							    Option 4
							  </label>
							</div>
							<div className="form-check">
							  <label className="form-check-label">
							    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
							    Option 5
							  </label>
							</div>
		      	    	  </div>
		      	    	</form>
		      	    </li>
		      	    <li>
		      	    	<form>
		      	    	  <div className="form-check">
		      	    	    <label>Choose multiple answer</label>
		      	    	    <div className="form-check">
							  <label className="form-check-label">
							    <input className="form-check-input" type="checkbox" />
							    Option 1
							  </label>
							</div>
		      	    	    <div className="form-check">
							  <label className="form-check-label">
							    <input className="form-check-input" type="checkbox" />
							    Option 2
							  </label>
							</div>
		      	    	    <div className="form-check">
							  <label className="form-check-label">
							    <input className="form-check-input" type="checkbox" />
							    Option 3
							  </label>
  		      	    	    <div className="form-check">
							  <label className="form-check-label">
							    <input className="form-check-input" type="checkbox" />
							    Option 4
							  </label>
							</div>
		      	    	    <div className="form-check">
							  <label className="form-check-label">
							    <input className="form-check-input" type="checkbox" />
							    Option 5
							  </label>
							</div>
							</div>
		      	    	  </div>
		      	    	</form>
		      	    </li>
		      	    <li>
		      	    	<form>
		      	    	  <div className="form-group">
		      	    	    <label>Leave you comment</label>
		      	    	    <textarea className="form-control" rows="2" required></textarea>
		      	    	  </div>
		      	    	</form>
		      	    </li>
		      	  </ul>
		      	</li>
		      </ol>
		    </div>

		    <div className="bottom-nav">
	    		<button type="button" className="btn">Back</button>
	      		<button type="button" className="btn" id="btn-forward">Forward</button>
		    </div>
		  </div>
    	);
	}
}

export default TestListComponent;