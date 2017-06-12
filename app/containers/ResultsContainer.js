/**
 * Created by rytis on 17.2.19.
 */

let React = require('react');
let Results = require('../components/Results');
let gitHubHelpers = require('../utils/gitHubHelpers');

var ResultsContainer = React.createClass({

    getInitialState: function () {
        return{
            isLoading: true,
            scores: []
        }
    },

    componentDidMount: function () {
        gitHubHelpers.battle(this.props.location.state.playerInfo)
            .then(function(scores){
                this.setState({
                    scores: scores,
                    isLoading: false
                })
            }.bind(this))
    },

    render: function() {
    return (
        <Results isLoading={this.state.isLoading}
                 scores={this.state.scores}
                 playersInfo={this.props.location.state.playerInfo}/>
    )
}

});

module.exports = ResultsContainer;