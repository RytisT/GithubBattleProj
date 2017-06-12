/**
 * Created by rytis on 17.2.19.
 */

var React = require('react');
var PropTypes = React.PropTypes;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Link = require('react-router').Link;

function puke(object) {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function StartOver() {
    return(
        <div className="col-sm-12">
            <Link to="/playerOne">
                <button type="button" className="btn btn-lg btn-danger">Start Over</button>
            </Link>
        </div>
    )
}

var Results = React.createClass({
    render: function() {
        var winningIndex = this.props.scores[0] > this.props.scores[1] ? winningIndex = 0 : winningIndex  = 1;
        var loosingIndex = winningIndex === 0 ? loosingIndex = 1 : loosingIndex = 0;
    return (
        <div className="jumbotron col-sm-12 text-center">
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Winner">
                    <UserDetails score={this.props.scores[winningIndex]} info={this.props.playersInfo[winningIndex]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Looser">
                    <UserDetails score={this.props.scores[loosingIndex]} info={this.props.playersInfo[loosingIndex]} />
                </UserDetailsWrapper>
            </div>
            <StartOver />
        </div>
    )
},

    propTypes: {
        isLoading: PropTypes.bool.isRequired,
        scores: PropTypes.array.isRequired,
        playersInfo: PropTypes.array.isRequired

    },

})

module.exports = Results;