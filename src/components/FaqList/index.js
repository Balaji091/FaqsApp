import {Component} from 'react'
import FaqItem from '../FaqItem'
class FaqList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            faqsList: this.props.faqsList.map(item => ({ ...item, isClick: false }))
        };
    }
    
    displayAnswers=id=>{
        const {faqsList}=this.state
        const newfaqList=faqsList.map(item=>{
            if(item.id===id){
                return {...item,isClick:!item.isClick}
            }
            else{
                return item
            }
            })
            this.setState({faqsList:newfaqList})
            console.log(newfaqList)
    }
  

    render(){
        const{faqsList}=this.state
        return(
            <div>
                <h1>Faqs</h1>
                <div className='faqs-array'>
                    {faqsList.map(item=>(<FaqItem details={item} key={item.id} displayAnswers={this.displayAnswers}/>))}
                </div>

            </div>
        )
    }
}
export default FaqList;
