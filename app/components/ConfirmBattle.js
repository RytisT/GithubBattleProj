/**
 * Created by rytis on 17.2.18.
 */

function puke(object) {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
}
var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');


var ConfirmBattle = React.createClass({
    render: function() {
        return this.props.isLoading === true
            ? <p>LOADING</p>
            : <div className="jumbotron col-sm-12 text-center" style={{background: 'transparent'}}>
                <h1>Confirm Players</h1>
                <div className='col-sm-8 col-sm-offset-2'>
                        <UserDetailsWrapper header="Player 1">
                            <UserDetails info={this.props.playersInfo[0]} />
                        </UserDetailsWrapper>
                    <UserDetailsWrapper header="Player 2">
                        <UserDetails info={this.props.playersInfo[1]} />
                    </UserDetailsWrapper>
                </div>
                <div className='col-sm-8 col-sm-offset-2'>
                    <div className='col-sm-12' style={{marginTop: '25px'}}>
                        <button type="button" className="btn btn-lg btn-success" onClick={this.props.onInitiateBattle}>
                        Initiate Battle!!!
                        </button>
                    </div>
                    <div className='col-sm-12' style={{marginTop: '25px'}}>
                        <Link to="/playerOne">
                           <button type="button" className="btn btn-lg btn-danger">Reselect Players</button>
                        </Link>
                    </div>
                </div>
            </div>

    },

    propTypes: {
        isLoading: PropTypes.bool.isRequired,
        playersInfo: PropTypes.array.isRequired

    },

})

module.exports = ConfirmBattle;