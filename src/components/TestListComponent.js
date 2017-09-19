import React from 'react';
import '../App.css';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import 'moment/locale/ru';


class TestListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        	questions: [],
            sections: [],
            sectionIndex: '',
            startDate: moment()
        };

        this.nextSection = this.nextSection.bind(this);
        this.prevSection = this.prevSection.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
	
    
    componentDidMount(){
        this.getData();
    }

    getData(){
        axios.get('https://api.myjson.com/bins/nosct').then((response) => {
            this.setState({questions: response.data, 
            			   sections: [...this.state.sections, response.data[0].section], 
            			   sectionIndex: 0});
            response.data.map((question, i) => {
                this.state.sections.map((current) => {
                    if(current.guid !== question.section.guid){
                        this.setState({sections: [...this.state.sections, response.data[i].section], 
                        			   sectionIndex: 0});
					}
				});
            });
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

    handleChange(date) {
	    this.setState({
	      startDate: date
	    });
  	}

	render() {
		const questions = this.state.questions.map((question, i) => {
			console.log('questions', this.state.questions[i].section.guid);
			console.log('current section', this.state.sections[this.state.sectionIndex].guid)
			return (
				<div>
				  {this.state.questions[i].section.guid === 
				  	this.state.sections[this.state.sectionIndex].guid 
					  	? <li key={i}>{question.title}</li> 
					  	: null}
				</div>
			)
		});
		return (
	      <div className="container">
		    <div className="header clearfix">
  		      <h3>{this.state.sections.length > 0  ? this.state.sections[this.state.sectionIndex].title : 'Загрузка'}</h3>
		      <p className="float-right">Раздел {this.state.sectionIndex + 1} из {this.state.sections.length}</p>
		      <hr />
		      <button type="button" className="btn" disabled={this.state.sectionIndex === 0} 
		      		  onClick={this.prevSection}>
		      		Назад
		      </button>
			  {this.state.sectionIndex + 1 === this.state.sections.length 
			  ? <button type="button" className="btn btn-success" id="btn-forward">
			  		Отправить
			  	  </button> 
			  : <button type="button" className="btn btn-primary" id="btn-forward" 
			  			onClick={this.nextSection}>
			  		Вперед
			  	</button>}
		    </div>

		    <div className="main">
		      <ol>{questions}</ol>
		      <ol>
		      	<li>Вопрос ...
		      	  <ul>
		      	    <li>
		      	    	<form>
		      	    	  <div className="form-group">
		      	    	    <label>Тип ответа строка</label>
		      	    	    <input type="text" className="form-control" />
		      	    	  </div>
		      	    	</form>
		      	    </li>
		      	    <li>
		      	    	<form>
		      	    	  <div className="form-group">
		      	    	    <label>Тип ответа текст</label>
		      	    	    <textarea className="form-control" rows="3"></textarea>
		      	    	  </div>
		      	    	</form>
		      	    </li>
		      	    <li>
		      	    	<form>
		      	    	  <div className="form-group">
		      	    	    <label>Тип ответа число (может иметь максимальное/минимальное знчение, точность)</label>
		      	    	    <input type="number" className="form-control" id="numberInput"/>
		      	    	  </div>
		      	    	</form>
		      	    </li>
		      	    <li>
		      	    	<form>
		      	    	  <div className="form-group">
		      	    	    <label>Тип ответа дата (датапикер)</label>
		      	    	    <DatePicker
						        selected={this.state.startDate}
						        onChange={this.handleChange}
						    />
		      	    	  </div>
		      	    	</form>
		      	    </li>
		      	    <li>
		      	    	<form>
		      	    	  <div className="form-check">
		      	    	    <label>Тип ответа булево</label>
		      	    	    <div className="form-check">
							  <label className="form-check-label">
							    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
							    Да
							  </label>
							</div>
		      	    	    <div className="form-check">
							  <label className="form-check-label">
							    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
							    Нет
							  </label>
							</div>
		      	    	  </div>
		      	    	</form>
		      	    </li>
		      	    <li>
		      	    	<form>
		      	    	  <div className="form-check">
		      	    	    <label>Тип ответа выбор 1 варианта из предложенных</label>
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
		      	    	    <label>Тип ответа выбор нескольких вариантов из предложенных</label>
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
		      	    	    <label>Обязательный комментарий</label>
		      	    	    <textarea className="form-control" rows="2" required></textarea>
		      	    	  </div>
		      	    	</form>
		      	    </li>
		      	  </ul>
		      	</li>
		      </ol>
		    </div>

		    <div className="bottom-nav">
	    		<button type="button" className="btn" disabled={this.state.sectionIndex === 0} onClick={this.prevSection}>Назад</button>
				{this.state.sectionIndex + 1 === this.state.sections.length ?  <button type="button" className="btn btn-success" id="btn-forward">Отправить</button> : <button type="button" className="btn btn-primary" id="btn-forward" onClick={this.nextSection}>Вперед</button>}
		    </div>
		  </div>
    	);
	}
}

export default TestListComponent;