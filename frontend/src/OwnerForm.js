import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';

function OwnerForm({ onBack }) {
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit to backend
    alert('Submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>Owner Registration</Typography>
      <TextField label="Name" name="name" value={form.name} onChange={handleChange} fullWidth margin="normal" required />
      <TextField label="Address" name="address" value={form.address} onChange={handleChange} fullWidth margin="normal" required />
      <TextField label="Phone number" name="phone" value={form.phone} onChange={handleChange} fullWidth margin="normal" required />
      <Button variant="contained" color="primary" type="submit" fullWidth>Submit</Button>
      <Button onClick={onBack} fullWidth style={{ marginTop: 8 }}>Back</Button>
    </form>
  );
}

export default OwnerForm;
