import React from 'react';

export default class TextComponent extends React.Component{
    render(){
        return(
            <form>
                <div className="form-group">
                    <label>Тип ответа текст</label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>
            </form>
        )
    }
}