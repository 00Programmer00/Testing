import React from 'react';

export default class MultipleAnswerComponent extends React.Component{
    render(){
        let variants = this.props.question.answerVariants.map((variant, i) => {
          return (
            <div className="form-check">
                <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value={"option" + i} />
                    {variant.title}
                </label>
            </div>
          )
        })  
        return(
            <form>
                <div className="form-check">
                    <label>Тип ответа выбор нескольких вариантов из предложенных</label>
                    {variants}
                </div>
            </form>
        )
    }
}