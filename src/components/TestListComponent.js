import React from 'react';
import '../App.css';
import axios from 'axios';

class TestListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sections: [],
			sectionIndex: ''
        };

        this.nextSection = this.nextSection.bind(this);
        this.prevSection = this.prevSection.bind(this);
    }

    componentDidMount(){
        this.getSections();
    }

    getSections(){
        axios.get('https://api.myjson.com/bins/nosct').then((response) => {
            response.data.map((section, i) => {
            	response.data[i].section.id = i;
            	this.setState({sections: [...this.state.sections, response.data[i].section], sectionIndex: 0});
			});
            console.log(this.state);
        });
    }

    nextSection(){
    	if(this.state.sectionIndex + 1  < this.state.sections.length){
			this.setState({sectionIndex: this.state.sectionIndex + 1});
		}
	}

	prevSection(){
        if(this.state.sectionIndex  > 0){
            this.setState({sectionIndex: this.state.sectionIndex - 1});
        }
	}

	render() {
		return (
	      <div className="container">
		    <div className="header clearfix">
  		      <h3>{this.state.sections.length > 0  ? this.state.sections[this.state.sectionIndex].title : 'Loading'}</h3>
		      <p className="float-right">Section {this.state.sectionIndex + 1} of {this.state.sections.length}</p>
		      <hr />
		      <button type="button" className="btn" disabled={this.state.sectionIndex === 0} onClick={this.prevSection}>Back</button>
				{this.state.sectionIndex + 1 === this.state.sections.length ?  <button type="button" className="btn" id="btn-forward">Send</button> : <button type="button" className="btn" id="btn-forward" onClick={this.nextSection}>Forward</button>}
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