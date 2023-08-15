import React, { useState } from 'react';

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddUser: (newUser: User) => void;
}

const AddStaff: React.FC<AddUserModalProps> = ({ isOpen, onClose, onAddUser }) => {
  const [newUser, setNewUser] = useState<User>({
    id: 0,
    name: '',
    email: '',
    role: '',
    online: true,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddUser = () => {
    onAddUser(newUser);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Add User</h2>
        <input type="text" name="name" placeholder="Name" value={newUser.name} onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Email" value={newUser.email} onChange={handleInputChange} />
        <input type="text" name="role" placeholder="Role" value={newUser.role} onChange={handleInputChange} />
        {/* Add other input fields for direction, phone, etc. */}
        <button onClick={handleAddUser}>Add User</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddStaff;