import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import * as $ from 'jquery';
import queryString from 'query-string';
import silhouette from './Assets/Sillouette - Mid Fi.png';
import silhouetteHighlighted from './Assets/Silhouette-Highlighted.png';
import silhouetteBlue from './Assets/Silhouette-Blue.png';
import silhouetteGreen from './Assets/Silhouette-Green.png';
import background from './Assets/image_7.png';
import loginBackground from './Assets/Login_Background.png';
import albumcovertemp from './Assets/Temp_Album_Cover.jpg';
import historyIcon from './Assets/History Icon II.png';
import likedIcon from './Assets/Liked Icon II.png';
import msgsIcon from './Assets/Msgs Icon II.png';
import playButton from './Assets/Play_Small.png';
import pauseButton from './Assets/Pause_Small.png';

//Hover Play Page 1
import song1 from './Assets/Who I\'m Meant To Be - Anthem Lights.mp3';
import song1Cover from './Assets/Who_Im_Meant_to_Be_Cover.jpg';

//Hover Play Page 2
import song2 from './Assets/Casting Crowns - Voice of Truth.mp3';
import song2Cover from './Assets/Casting Crown Album Cover.jpg';



let enterStyle = {
  height: '350px',
  width: '400px',
  margin: 'auto',
  width: '50%',
  padding: '10px',
  border: 'solid',
  borderRadius: '5px',
  borderColor: 'rgba(136, 55, 131, 1.0)',
  borderWidth: '1.5px',
  backgroundColor: 'rgba(242, 242, 242, 0.4)',
  color: 'rgba(136, 55, 131, 1.0)'

}

let enterButtonStyle = {
  height: '30px',
  width: '100px',
  margin: 'auto',
  width: '50%',
  marginTop: '20px',
  borderColor: 'rgba(199, 89, 75, 1.0)',
  borderRadius: '30px',
  backgroundColor: 'rgba(199, 89, 75, 1.0)',
  color: 'rgba(255, 255, 255, 1.0)',
  fontWeight: 'light',
  fontSize: '20px',
  boxShadow: '2px 2px 4px #E9B9B3'
}

let hoverPlayStyleGen = {
  height: '100px',
  width: '300px',
  border: 'solid',
  borderRadius: '8px',
  borderColor: 'rgba(136, 55, 131, 1.0)',
  borderWidth: '1.5px',
  backgroundColor: 'rgba(199, 89, 75, 0.2',
  color: 'rgba(136, 55, 131, 0.8)',
  zIndex: '80'
}

let song1Position = {
  position: 'fixed',
  top: '200px',
  left: '250px',
}

let song2Position = {
  position: 'fixed',
  top: '250px',
  left: '710px',
}

class EnterHeader extends Component {
  render() {
    return (
      <div style={{color: '#781C76'}} className="titleHeader">
        <div style={{display: 'flex', 'justify-content': 'space-between'}}>
          <h1></h1><h1></h1>
          <h1 style={{'font-size': '54px', 'font-weight': 'bold', 'margin-top': '10px', 'margin-bottom': '0px', 'text-align': 'center'}}>Sonder</h1>
          <h1 style={{'font-size': '16px', 'margin-top': '30px', 'padding-right':
      '20px'}}>304,923 Wanderers Online</h1>
        </div>
        <div style={{height: '50px', borderTop: 'solid', borderWidth: '1.5px'}}>
        </div>
      </div>
    );
  }
}

class EnterBox extends Component {
  render () {
    return (
      <div style={enterStyle}>
        <h1 style={{paddingTop: '35px'}}>Welcome to Sonder</h1>
        <h2>A music exploration platform</h2>
        <h3>Click the button below to begin</h3>
        <button onClick={this.props.enterTemp} style={enterButtonStyle}>
          Enter Sonder
        </button>

      </div>
    );
  }
}

class TitleHeader extends Component {
  render () {
    return (
      <div style={{color: '#781C76', 'background-image': 'url(' + background + ')'}} className="titleHeader">
        <div style={{display: 'flex', 'justify-content': 'space-between'}}>
          <h1></h1><h1></h1>
          <h1 style={{'font-size': '54px', 'font-weight': 'bold', 'margin-top': '10px', 'margin-bottom': '0px', 'text-align': 'center'}}>Sonder</h1>
          <h1 style={{'font-size': '16px', 'margin-top': '30px', 'padding-right':
      '20px'}}>304,923 Wanderers Online</h1>
        </div>
        <h2 style = {{'font-size': '14px', padding: '20px', 'margin-top': '0px'}}>“the realization that each random passerby is living a life as vivid and complex as your own... an epic story that continues invisibly around you...in which you might appear only once...as an extra sipping coffee in the background,...as a lighted window at dusk.”</h2>
      </div>
    );
  }
}

class DetailsBanner extends Component {
  render() {
    return (
      <div style={{display: 'flex', 'justify-content': 'space-between', color: '#781C76', 'background-color': 'rgba(199, 89, 75, 0.3)'}}>
        <YourPlaying currentSong={this.props.currentSong} is_playing={this.props.is_playing}/>
        <YourHeader/>
        <YourLikes/>
        <YourHistory/>
        <YourChats/>
      </div>

    );
  }
}

class YourPlaying extends Component {
  render() {
    return (
      <div style={{width: '45%', display: 'flex', 'justify-content': 'space-between', 'border-style': 'solid', 'border-color': 'rgba(129, 28, 118, 0.5)', 'border-radius': '10px', margin: '10px'}}>
        <AlbumCover currentSong={this.props.currentSong}/>
        <TitleArtist currentSong={this.props.currentSong}/>
        <PlayBar is_playing={this.props.is_playing}/>
      </div>
    );
  }
}

class AlbumCover extends Component {
  render() {
    return (
      <div style={{width: '30%', height: 'auto'}}>
        <img src={this.props.currentSong.albumcover} style={{width: '80%', height: 'auto', padding:'10px', margin: '0', top: '50%'}}/>
      </div>
    );
  }
}

class TitleArtist extends Component {
  render() {
    return (
      <div style={{width: '30%', margin: 'auto'}}>
        <p style={{'font-weight': 'bold', 'font-size': '120%', textAlign: 'left', paddingLeft: '5px', marginBottom: '10px'}}>{this.props.currentSong.title}</p>
        <p style={{textAlign: 'left', paddingLeft: '5px', marginTop: '10px'}}>{this.props.currentSong.artist}</p>
      </div>
    );
  }
}

class PlayBar extends Component {
  render() {
    let currentStatus = 'Currently Paused';
    if (true) {
      currentStatus = 'Currently Playing'
    }
    return (
      <div style={{width: '40%', margin: 'auto'}}>
        <div>
          <h4 style={{margin: 'auto', paddingBottom: '10px'}}>You are Currently Playing on Spotify</h4>
        </div>
      </div>
    );
  }
}

class YourHeader extends Component {
  render() {
    return (
      <div style={{width: '25%', textAlign: 'left', paddingLeft: '20px'}}>
        <h2 style={{'font-weight': 'bolder', marginBottom: '8px'}}>Wanderer_soul</h2>
        <p style={{margin: '8px auto'}}>32 hours wandered | </p>
        <p style={{margin: '8px auto'}}>14 songs liked by other wanderers</p>
      </div>
    );
  }
}

class YourLikes extends Component {
  render() {
    return (
      <img src={likedIcon} style={{width: '8%', height: '8%', margin: 'auto'}}/>
    );
  }
}

class YourHistory extends Component {
  render () {
    return (
      <img src={historyIcon} style={{width: '8%', height: '8%', margin: 'auto'}}/>
    );
  }
}

class YourChats extends Component {
  render() {
    return (
      <img src={msgsIcon} style={{width: '8%', height: '8%', margin: 'auto'}}/>
    );
  }
}

class HoverDetail1 extends Component {
  render() {
    return (
      <div style ={{...hoverPlayStyleGen, ...song1Position}}>
        <h3 style={{borderBottom: 'solid', borderWidth: '1.5px', fontWeight:'bold', textAlign: 'left', margin:'5px'}}>Swords_of_the_Clock</h3>
        <div style ={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{width:'30%'}}>
            <img src={song1Cover} style={{width: '60px', height: 'auto'}}/>
          </div>
          <div style={{width: '48%'}}>
            <h3 style={{textAlign: 'left', margin: '2px', fontSize: '18px', fontWeight: 'bold'}}>Who I'm Meant To Be</h3>
            <h4 style={{textAlign: 'left', margin: '2px'}}>Anthem Lights</h4>
          </div>
          <div style={{width: '22%'}}>
            <img src={playButton} style={{width: '80%', height: 'auto', margin: '7px'}}/>
          </div>
        </div>
      </div>
    );
  }
}

class HoverDetail2 extends Component {
  render() {
    return (
      <div style ={{...hoverPlayStyleGen, ...song2Position}}>
        <h3 style={{borderBottom: 'solid', borderWidth: '1.5px', fontWeight:'bold', textAlign: 'left', margin:'5px'}}>Beats_of_a_lost_heart</h3>
        <div style ={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{width:'30%'}}>
            <img src={song2Cover} style={{width: '60px', height: 'auto'}}/>
          </div>
          <div style={{width: '48%'}}>
            <h3 style={{textAlign: 'left', margin: '2px', fontSize: '18px', fontWeight: 'bold'}}>Voice of Truth</h3>
            <h4 style={{textAlign: 'left', margin: '2px'}}>Casting Crowns</h4>
          </div>
          <div style={{width: '22%'}}>
            <img src={playButton} style={{width: '80%', height: 'auto', margin: '7px'}}/>
          </div>
        </div>
      </div>
    );
  }
}

class Silhouette extends Component {
  render() {
    return (
      <img src={silhouette} style={{width: '100px', height: 'auto', zIndex:'50'}}/>
    );
  }
}

class Silhouette2 extends Component {
  render() {
    return (
      <img src={silhouette} style={{width: '120px', height: 'auto', zIndex:'100'}}/>
    );
  }
}

class Silhouette3 extends Component {
  render() {
    return (
      <img src={silhouetteHighlighted} style={{width: '120px', height: 'auto', zIndex:'100'}}/>
    );
  }
}

class Silhouette4 extends Component {
  render() {
    return (
      <img src={silhouetteBlue} style={{width: '120px', height: 'auto', zIndex:'100'}}/>
    );
  }
}
class Silhouette5 extends Component {
  render() {
    return (
      <img src={silhouetteGreen} style={{width: '120px', height: 'auto', zIndex:'100'}}/>
    );
  }
}

class BackgroundSilhouettes extends Component {
  render() {
    let silBgdStyleI = {
      position: 'fixed',
      width: '100px',
      height: 'auto',
      zIndex: '10',
      filter: 'blur(2px)'
    }
    let sBSI1 = {top: '38px', left: '30%'}
    let sBSI2 = {top: '138px', left: '59%'}
    let sBSI3 = {top: '248px', left: '24%'}
    let sBSI4 = {top: '643px', left: '68%'}
    let sBSI5 = {top: '273px', left: '23%'}
    let sBSI6 = {top: '953px', left: '69%'}
    let sBSI7 = {top: '594px', left: '54%'}
    let sBSI8 = {top: '384px', left: '24%'}
    let sBSI9 = {top: '404px', left: '50%'}
    let sBSI10 = {top: '234px', left: '23%'}
    let sBSI11 = {top: '354px', left: '85%'}
    let sBSI12 = {top: '214px', left: '52%'}
    let sBSI13 = {top: '768px', left: '75%'}
    let sBSI14 = {top: '343px', left: '53%'}
    let sBSI15 = {top: '873px', left: '67%'}
    let sBSI16 = {top: '243px', left: '98%'}
    let sBSI17 = {top: '244px', left: '76%'}
    let sBSI18 = {top: '534px', left: '67%'}
    let sBSI19 = {top: '423px', left: '43%'}
    let sBSI20 = {top: '645px', left: '24%'}

    let silBgdStyleII = {
      position: 'relative',
      width: '100px',
      height: 'auto',
      zIndex: '30'
    }

    return (
      <div>
        <img src={silhouette} style={{...silBgdStyleI, ...sBSI1}}/>
        <img src={silhouette} style={{...silBgdStyleI, ...sBSI2}}/>
        <img src={silhouette} style={{...silBgdStyleI, ...sBSI3}}/>
        <img src={silhouette} style={{...silBgdStyleI, ...sBSI4}}/>
        <img src={silhouette} style={{...silBgdStyleI, ...sBSI5}}/>
        <img src={silhouette} style={{...silBgdStyleI, ...sBSI6}}/>
        <img src={silhouette} style={{...silBgdStyleI, ...sBSI7}}/>
        <img src={silhouette} style={{...silBgdStyleI, ...sBSI8}}/>
        <img src={silhouette} style={{...silBgdStyleI, ...sBSI9}}/>
        <img src={silhouette} style={{...silBgdStyleI, ...sBSI10}}/>
        <img src={silhouette} style={{...silBgdStyleI, ...sBSI11}}/>
        <img src={silhouette} style={{...silBgdStyleI, ...sBSI12}}/>
        <img src={silhouette} style={{...silBgdStyleI, ...sBSI13}}/>
        <img src={silhouette} style={{...silBgdStyleI, ...sBSI14}}/>
        <img src={silhouette} style={{...silBgdStyleI, ...sBSI15}}/>
        <img src={silhouette} style={{...silBgdStyleI, ...sBSI16}}/>
        <img src={silhouette} style={{...silBgdStyleI, ...sBSI17}}/>
        <img src={silhouette} style={{...silBgdStyleI, ...sBSI18}}/>
        <img src={silhouette} style={{...silBgdStyleI, ...sBSI19}}/>
        <img src={silhouette} style={{...silBgdStyleI, ...sBSI20}}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
        <img src={silhouette} style={silBgdStyleII}/>
      </div>

    )
  }
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accessToken: null,
      currentSong: {
        title: 'What I\m Here For',
        artist: 'Nicholas Wells',
        albumcover: albumcovertemp
      },
      is_playing: false,
      progressBar: 0,
    }
    /*this.state = {serverData: {fakeServerData}, enterTrigger: true};*/
  }


  componentDidMount() {
    let parsedURI = queryString.parse(window.location.search);
    let token = parsedURI.access_token;
    console.log(parsedURI);
    this.setState({
      accessToken: token
    })
    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer ' + token}
    }).then((response) => response.json()).
    then(data => {
      console.log(data)
      this.setState({
      user: {
        name: data.display_name
      }
    })})

    fetch('https://api.spotify.com/v1/me/player', {
      headers: {'Authorization': 'Bearer ' + token}
    }).then((response) => response.json()).
    then((data) => {
      console.log(data)
      if (!(data.item == null)) {
        this.setState({
          currentSong: {
            title: data.item.name,
            artist: data.item.artists[0].name,
            albumcover: data.item.album.images[1].url
          },
          is_playing: data.item.is_playing
        })
      } else {
        this.setState({
          currentSong: {
            title: 'What I\m Here For',
            artist: 'Nicholas Wells',
            albumcover: albumcovertemp
          }
        })
      }
    })

  }

  enterTemp = () => {
    window.location =  window.location.href.includes('localhost')
      ? 'http://localhost:8888/login'
      : 'https://hw8-sonder-music-backend.herokuapp.com/login'
/*    this.setState({enterTrigger: false});*/

  }

  render() {
    if (this.state.accessToken == null){
      document.body.style.backgroundImage = 'url(' + loginBackground + ')';
      document.body.style.backgroundSize = '200% auto';
      document.body.style.backgroundRepeat = 'repeat';

      return (
        <div className="App" style={{position: 'center'}}>
          <EnterHeader/>
          <EnterBox enterTemp={this.enterTemp}/>
        </div>
      );
    }
    else {
      document.body.style.backgroundColor = null;
      console.log(this.state.currentSong)
      let name = 'Jenny'
      let purple = '#82317D'
      let headerStyle = {color: purple, 'font-size': '50px'}
      return (
        <div className="App">
          <BackgroundSilhouettes/>
          <div style={{position: 'fixed', top: '0', zIndex: '100'}}>
            <TitleHeader/>
          </div>
          <HoverDetail1/>
          <HoverDetail2/>
          <div style={{position: 'fixed', top: '270px', left: '155px', zIndex: '100'}}>
            <Silhouette4/>
          </div>
          <div style={{position: 'fixed', top: '300px', left: '615px', zIndex: '100'}}>
            <Silhouette5/>
          </div>
          <div style={{position: 'fixed', bottom: '10px', width: '100%', zIndex: '90'}}>
            <div style={{display: 'block', margin: 'auto'}}>
              <Silhouette3/>
            </div>
          </div>
          {this.state.currentSong &&
            <div style={{position: 'fixed', bottom: '0', zIndex: '100'}}>
              <DetailsBanner currentSong={this.state.currentSong} is_playing={this.state.is_playing}/>
            </div>
          }
        </div>
      );
    }
  }
}

export default App;
