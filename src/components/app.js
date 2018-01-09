import { Component } from 'react';
import { SkiDayList } from './skiDayList'
import { SkiDayCount } from './skiDayCount'
import { AddDayForm } from './addDayForm'
import { Menu } from './menu'

export class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            allSkiDays: [
                {
                    resort: "Vancouver",
                    date: "1/1/2018",
                    powder: true,
                    backcountry: false
                }
            ]
        }
        this.addDay = this.addDay.bind(this)
    }
    addDay(newDay){
        this.setState({
           allSkiDays: [
               ...this.state.allSkiDays,
               newDay
           ]
        })
    }

    countDays(filter){
        const { allSkiDays } = this.state;
        return allSkiDays.filter((day)=>(
            (filter) ? day[filter]: day
        )).length
    }

    render (){
        return(
            <div className="app">
                <Menu />
                {(this.props.location.pathname === '/') ? 
                <SkiDayCount total={this.countDays()}
                    powder={this.countDays("powder")}
                    backcountry={this.countDays("backcountry")}
                 />:
                 (this.props.location.pathname === '/add-day') ?
                    <AddDayForm  onNewDay = {this.addDay}/> :
                    <SkiDayList days = {this.state.allSkiDays}
                                filter = {this.props.params.filter}/>
                }
            </div>
        )
    }
}