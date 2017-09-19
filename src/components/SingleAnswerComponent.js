
import React from 'react';

export default class SingleAnswerComponent extends React.Component{
    render(){
        return(
            <form>
                <div className="form-check">
                    <label>Тип ответа выбор 1 варианта из предложенных</label>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio"
                                   name="exampleRadios" id="exampleRadios1"
                                   value="option1" checked />
                            Option 1
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio"
                                   name="exampleRadios" id="exampleRadios1"
                                   value="option1" checked />
                            Option 2
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio"
                                   name="exampleRadios" id="exampleRadios1"
                                   value="option1" checked />
                            Option 3
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio"
                                   name="exampleRadios" id="exampleRadios1"
                                   value="option1" checked />
                            Option 4
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio"
                                   name="exampleRadios" id="exampleRadios1"
                                   value="option1" checked />
                            Option 5
                        </label>
                    </div>
                </div>
            </form>

        )
    }
}