
import React from 'react';

const UserPage = ({ user }) => {
    return (
        <div style={styles.container}>
            <img src={user.avatar} alt="Avatar" style={styles.avatar} />
            <h1 style={styles.name}>{user.name}</h1>
            <p style={styles.email}>{user.email}</p>
            <p style={styles.bio}>{user.bio}</p>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        maxWidth: '400px',
        margin: 'auto',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
    avatar: {
        borderRadius: '50%',
        width: '150px',
        height: '150px',
        marginBottom: '15px',
    },
    name: {
        fontSize: '24px',
        margin: '10px 0',
    },
    email: {
        fontSize: '16px',
        color: '#555',
    },
    bio: {
        fontSize: '14px',
        textAlign: 'center',
        marginTop: '10px',
    },
};

export default UserPage;
