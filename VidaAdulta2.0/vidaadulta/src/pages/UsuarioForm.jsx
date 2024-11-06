// src/components/UserForm.js
import React, { useState } from 'react';

const UserForm = ({ onAvatarSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bio: '',
        avatar: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prev) => ({ ...prev, avatar: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAvatarSubmit(formData.avatar); // Envia o avatar para o componente principal
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h2>Crie seu perfil</h2>
            <input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <textarea
                name="bio"
                placeholder="Bio"
                value={formData.bio}
                onChange={handleChange}
                required
            />
            <input type="file" accept="image/*" onChange={handleAvatarChange} required />
            <button type="submit">Criar Perfil</button>
        </form>
    );
};

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
};

export default UserForm;
