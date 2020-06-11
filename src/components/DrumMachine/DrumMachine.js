import React from 'react';
import  './DrumMachine.scss';



class Pad extends React.Component {
    constructor(props) {
        super(props);

        this.playSound = this.playSound.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.keyPress);
    }
    playSound() {
        const clip = document.getElementById(this.props.keyName);
        clip.volume = this.props.volume;
        clip.currentTime = 0;
        clip.play();
        this.props.display(this.props.description);
    }
    keyPress(event){
        if(event.key.toUpperCase() === this.props.keyName){
            this.playSound();
        }
    }

    render(){
        return (
            <div className='drum-pad' id={this.props.description} onClick={this.playSound}>{this.props.keyName}
                <audio className="clip" id={this.props.keyName} src={this.props.url}>
                </audio>
            </div>
        );
    }
}





class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            volume: 1
        }
        this.display = this.display.bind(this);
        this.volumeChange = this.volumeChange.bind(this);
    }
    volumeChange(event) {
        this.setState({volume: event.target.value})
    }
    display(str){
        document.getElementById('display').innerHTML = '';
        document.getElementById('display').innerHTML = str;
    }
    render() {
        return(
            <div id='drum-machine' className='drum-machine'>
                <div className="display-frame">
                    <div id='display' className='display'>DRUM MACHINE</div>
                </div>
                <div  className='pads-container'>
                    {
                        this.props.bank.map( pad => <Pad 
                            keyName={pad.key} 
                            url={pad.url} 
                            description = {pad.description}
                            display = {this.display}
                            volume = {this.state.volume}
                        />)     
                    }
                </div>
                <div className='volume'>
                    <input value={this.state.volume} onChange={this.volumeChange}  type='range' min='0' max='1.0' step='0.01'></input>
                    <p>VOLUME</p>
                </div>
            </div>
            )
    }
}

export default DrumMachine;