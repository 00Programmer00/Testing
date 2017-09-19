import React from 'react';

export default class MultipleAnswerComponent extends React.Component{
    render(){
        return(
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
        )
    }
}