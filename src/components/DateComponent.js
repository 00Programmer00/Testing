import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'moment/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';


export default class DateComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(date) {
        this.props.onChange(date, this.props.question.guid);
    }


    render(){
        return(
            <form>
                <div className="form-group">
                    <label>Тип ответа дата (датапикер)</label>
                    <DatePicker
                        selected={this.props.value}
                        onChange={this.handleChange}
                    />
                </div>
            </form>

        )
    }
}