import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'moment/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';


export default class DateComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }


    render(){
        return(
            <form>
                <div className="form-group">
                    <label>Тип ответа дата (датапикер)</label>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                    />
                </div>
            </form>

        )
    }
}