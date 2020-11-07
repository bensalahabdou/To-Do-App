import React, { PureComponent,Fragment } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';
import { removeTodo } from './redux/action';
        
class Counter extends PureComponent {
    constructor(props){
        super(props);
    this.state = {
        hours: this.props.hour,
        minutes:this.props.minute,
        seconds:0,
        toggle: false,
        firstId:this.props.firstId
    }
}
    
componentDidUpdate(prevProps){
    if (this.props.hour !== prevProps.hour && this.props.minute !== prevProps.minute) {
        this.setState({hours: this.props.hour, minutes: this.props.minute});
        this.setState({toggle: !this.state.toggle});
    } 
    }

componentDidMount(){
    this.timer= setInterval(()=> {
        
            if(this.state.toggle){
               
                if(this.state.seconds === 0){
                    if(this.state.minutes > 0){
                    this.setState(state =>({
                            minutes: state.minutes - 1,
                            seconds : 60
                        }))
                    }
                    }
                
                    if(this.state.minutes === 0 && this.state.seconds === 0){
                        if(this.state.hours > 0){
                            this.setState(state=>({
                                hours: state.hours - 1,
                                minutes : 59,
                                seconds:60
                            }))
                            }
                    
                        clearInterval(this.timer);
                        this.setState({toggle: false})
                    }
                    if(this.state.seconds > 0){
                        this.setState(state=>({
                            seconds: state.seconds - 1,
                        }))  
                    }
                    
            }
        }
        ,1000)

        const milliseconds = ((this.state.hours * 60 *60) + (this.state.minutes * 60)) * 1000
        console.log(milliseconds)
        this.automatically= setTimeout(() => this.props.removeNewTodo(this.state.firstId), milliseconds);
}

componentWillUnmount(){
    if(!this.state.toggle){
        clearInterval(this.timer);
    }
    if(this.state.hours === 0 && this.state.minutes===0 && this.state.seconds===0){
        clearTimeout(this.automatically);
    }


}
time (e) {
    e.preventDefault();
    this.setState({toggle: !this.state.toggle})
        }

  
    render() {
        const { hours, minutes, seconds, toggle }= this.state;
        // const { firstId } = this.props;
        // console.log(firstId)
        return (
            <div style={{display:"flex",justifyContent:"space-between", width:"30%" ,margin:"auto"}}>
            <div style={{margin:"10px auto", border:"3px solid royalBlue", borderRadius:"50%",width:"80px", height:"80px", padding:"25px 0px 0px 15px"}}> 
            {`${hours}:${minutes}:${seconds}`}</div>
                <button 
                style={{border:"3px solid royalBlue", borderRadius:"5px",width:"80px",height:"30px", background:"white", color:"royalblue"}}
                onClick={this.time.bind(this)}
                disabled={this.state.hours === 0 && this.state.minutes===0 && this.state.seconds===0? 'disabled' : ''}
                >{toggle ? 
                <Fragment><FontAwesomeIcon icon="stop-circle" size="1x" color="red" /> Pause</Fragment> 
                : <Fragment><FontAwesomeIcon icon="play-circle"  size="1x" color="gray" /> Play</Fragment>}
                </button>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
      removeNewTodo: (id) => {
        dispatch(removeTodo(id))
      }
    }
  };

export default  connect(null, mapDispatchToProps)(Counter);
// export default  Counter;