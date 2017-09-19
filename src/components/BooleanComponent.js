import React from 'react';

export default class BooleanComponent extends React.Component{
    render(){
        return(
            <form>
                <div className="form-check">
                    <label>Тип ответа булево</label>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio"
                                   name="exampleRadios" id="exampleRadios1"
                                   value="option1" checked />
                            Да
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio"
                                   name="exampleRadios" id="exampleRadios1"
                                   value="option1" checked />
                            Нет
                        </label>
                    </div>
                </div>
            </form>

        )
    }
}