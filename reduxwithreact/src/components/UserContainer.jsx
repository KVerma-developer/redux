import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user/userActions';

const UserContainer = ({ userData, fetchUsers }) => {
    useEffect(() => {
        fetchUsers();
      }, [fetchUsers]);
      
      return userData.loading ? (
        <h2>Loading</h2>
      ) : userData && userData.error ? (
        <p>{userData.error}</p> 
      ) : (
        <div>
          <h2>UserList</h2>
          <div>
  {userData && userData.users && userData.users.map(user => (
    <p key={user.name} style={{ color: 'red', fontSize: '16px' }}>Name - {user.name}</p>
  ))}



  {userData && userData.users && userData.users.map(user => (
    <p key={user.username} style={{ color: 'blue', fontSize: '14px' }}>UserName - {user.username}</p>
  ))}
    <hr style={{ border: '1px solid black', margin: '10px 0' }} />
</div>

        </div>
      );
      
};

const mapStateToProps = state => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

