import { PropTypes, Component } from 'react'

const tahoeResorts = [
	"Alpine Meadows",
	"Boreal",
	"Diamond Peak",
	"Donner Ski Ranch", 
	"Heavenly", 
	"Homewood",
	"Kirkwood",
	"Mt. Rose", 
	"Northstar",
	"Squaw Valley",
	"Sugar Bowl"
]

class AutoComplete extends Component{
    get value(){
        return this.refs.inputResort.value
    }
    set value(inputValue){
        this.refs.inputResort.value = inputValue
    }

    render(){
        return(
            <div>
                <input ref="inputResort" type="text" list="tahoe-resorts" />
                <datalist id="tahoe-resorts">
                    {this.props.options.map(
                        (opt, i) => <option key={i}>{opt}</option>
                    )}
                </datalist>
            </div>
        )
    }
} 

// In Stateless Function
export const AddDayForm = ({resort, date, powder, backcountry, onNewDay}) => {

    let _resort, _date, _powder, _backcountry;
    const submit = (e) => {
        e.preventDefault();
        onNewDay({
            resort: _resort.value,
            date: _date.value,
            powder: _powder.checked,
            backcountry: _backcountry.checked})
        _resort.value = ""
        _date.value = ""
        _powder.checked = false
        _backcountry.checked = false

    }

    return (
        <form className="add-day" onSubmit={submit}>
            <label htmlFor="resort">Resort Name</label>
            <AutoComplete options={tahoeResorts}
                   ref={input => _resort = input} required />
            
            <label htmlFor="date">Date</label>
            <input id="date" type="date" defaultValue={date}
                   ref={input => _date = input} required />
            <div>
                <input id="powder" type="checkbox" defaultChecked={powder}
                       ref={input => _powder = input} />
                <label htmlFor="powder">Powder Day</label>
            </div>
            <div>
                <input id="backcountry" type="checkbox" defaultChecked={backcountry}
                       ref={input => _backcountry = input} />
                <label htmlFor="backcountry">Backcountry</label>
            </div>
            <button>Add New</button>
        </form>
    )
}

// export class AddDayForm extends Component{
//     constructor(props){
//         super(props)
//         this.submit = this.submit.bind(this)
//     }

//     submit(e){
//         e.preventDefault();
//         console.log("Resort: ", this.refs.resort.value)
//         console.log("Date: ", this.refs.date.value)
//         console.log("Powder: ", this.refs.powder.checked)
//         console.log("Backcountry: ", this.refs.backcountry.checked)
//     }
//     render(){
//         const {resort, date, powder, backcountry} = this.props
//         return (
//             <form className="add-day" onSubmit={this.submit}>
//                 <label htmlFor="resort">Resort Name</label>
//                 <input id="resort" type="text" defaultValue={resort} ref="resort" required />
                
//                 <label htmlFor="date">Date</label>
//                 <input id="date" type="date" defaultValue={date} ref="date" required />
//                 <div>
//                     <input id="powder" type="checkbox" defaultChecked={powder} ref="powder" required />
//                     <label htmlFor="powder">Powder Day</label>
//                 </div>
//                 <div>
//                     <input id="backcountry" type="checkbox" defaultChecked={backcountry} ref="backcountry" required />
//                     <label htmlFor="backcountry">Backcountry</label>
//                 </div>
//                 <button>Add New</button>
//             </form>
//         )
//     }
// }

AddDayForm.defaultProps = {
    resort: 'Kirkwood',
    date: "2017-02-12",
    powder: true,
    backcountry:true
}


AddDayForm.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	powder: PropTypes.bool.isRequired,
	backcountry: PropTypes.bool.isRequired
}