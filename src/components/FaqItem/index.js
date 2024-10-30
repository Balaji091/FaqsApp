import {Component} from "react"
import './index.css'
class FaqItem extends Component{
   
    render(){
        const{details,displayAnswers}=this.props
        const{questionText,answerText,id,isClick}=details
        const imgUrl=isClick?"https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png":"https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png "
        return(
            <div className="block">
                <div className="question"> 
                   <h3>{questionText}</h3>
                    <img src={imgUrl} alt="item" onClick={()=>displayAnswers(id)}/>
                </div>
                <p>{  isClick && answerText}</p>
            </div>
        )
    }
}
export default FaqItem