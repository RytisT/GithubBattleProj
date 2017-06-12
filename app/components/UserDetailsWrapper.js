/**
 * Created by rytis on 17.2.19.
 */

var React = require('react');
var PropTypes = React.PropTypes;



var UserDetailsWrapper= React.createClass({
    render: function()
{
    return (
        <div className="col-sm-6">
            <p className="lead">{this.props.header}</p>
            {this.props.children}
        </div>
    )
}

})

module.exports = UserDetailsWrapper;