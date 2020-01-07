import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { fetchUser} from '../action';

class UserHeader extends Component {
    /* componentDidMount() {
         this.props.fetchUser(this.props.userId);
     }*/

    render() {
        const { users } = this.props;

        if (!users) {
            return <div>Loading...</div>;
        }

        return (
            <div className="header">{users.name}</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { users: state.user.find(u => u.id === ownProps.userId) }
}

export default connect(mapStateToProps/*, { fetchUser }*/)(UserHeader);