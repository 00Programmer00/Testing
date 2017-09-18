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
  		      <h3>{this.state.sections.length > 0  ? this.state.sections[this.state.sectionIndex].title : 'Загрузка'}</h3>
		      <p className="float-right">Раздел {this.state.sectionIndex + 1} из {this.state.sections.length}</p>
		      <hr />
		      <button type="button" className="btn" disabled={this.state.sectionIndex === 0} onClick={this.prevSection}>Назад</button>
				{this.state.sectionIndex + 1 === this.state.sections.length ?  <button type="button" className="btn" id="btn-forward">Отправить</button> : <button type="button" className="btn" id="btn-forward" onClick={this.nextSection}>Вперед</button>}
		    </div>

		    <div className="main">
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
		      	    	    <input type="datetime-local" className="form-control" id="dateInput" />
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
	    		<button type="button" className="btn">Назад</button>
	      		<button type="button" className="btn btn-primary" id="btn-forward">Вперед</button>
		    </div>
		  </div>
    	);
	}
}

export default TestListComponent;