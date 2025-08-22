import React, { useState } from 'react';
import { Button, TextField, MenuItem, Checkbox, FormControlLabel, Typography, Box, InputLabel, Select, FormControl } from '@mui/material';

const workTypes = [
  'Maid',
  'Nanny',
  'Cook',
  'Driver',
  'Patient care',
  'Bathroom cleaning',
];


const startTimes = [
  '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM',
];
const endTimes = [
  '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM',
  '10:00 PM', '11:00 PM', '12:00 AM', '1:00 AM', '2:00 AM', 'Full day', '24 hours',
];


function MaidForm({ onBack }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    workType: [],
    availability: '',
    startTime: '7:00 AM',
    endTime: '8:00 AM',
    location: '',
    anywhere: false,
    photo: null,
  });
  const [customStart, setCustomStart] = useState(false);
  const [customEnd, setCustomEnd] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'startTime') {
      setCustomStart(false);
    }
    if (name === 'endTime') {
      setCustomEnd(false);
    }
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCustomStart = (e) => {
    setCustomStart(true);
    setForm((prev) => ({ ...prev, startTime: e.target.value }));
  };
  const handleCustomEnd = (e) => {
    setCustomEnd(true);
    setForm((prev) => ({ ...prev, endTime: e.target.value }));
  };

  const handleWorkTypeChange = (e) => {
    setForm((prev) => ({ ...prev, workType: e.target.value }));
  };

  const handlePhoto = (e) => {
    setForm((prev) => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit to backend
    alert('Submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>Maid Registration</Typography>
      <TextField label="Name" name="name" value={form.name} onChange={handleChange} fullWidth margin="normal" required />
      <TextField label="Phone number" name="phone" value={form.phone} onChange={handleChange} fullWidth margin="normal" required />
      <FormControl fullWidth margin="normal">
        <InputLabel>Type of work</InputLabel>
        <Select
          multiple
          value={form.workType}
          onChange={handleWorkTypeChange}
          renderValue={(selected) => selected.join(', ')}
        >
          {workTypes.map((type) => (
            <MenuItem key={type} value={type}>
              <Checkbox checked={form.workType.indexOf(type) > -1} />
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Availability</InputLabel>
        <Select name="availability" value={form.availability} onChange={handleChange} required>
          <MenuItem value="Time bound">Time bound</MenuItem>
          <MenuItem value="Full day house help">Full day house help</MenuItem>
          <MenuItem value="24 hours live in house help">24 hours live in house help</MenuItem>
        </Select>
      </FormControl>
      {form.availability === 'Time bound' && (
        <Box display="flex" gap={2} marginY={2}>
          <Box flex={1}>
            {!customStart ? (
              <FormControl fullWidth>
                <InputLabel>Start Time</InputLabel>
                <Select
                  name="startTime"
                  value={startTimes.includes(form.startTime) ? form.startTime : ''}
                  onChange={e => {
                    if (e.target.value === '') {
                      setCustomStart(true);
                      setForm(prev => ({ ...prev, startTime: '' }));
                    } else {
                      handleChange(e);
                    }
                  }}
                  displayEmpty
                >
                  {startTimes.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                  <MenuItem value=""><em>Custom</em></MenuItem>
                </Select>
              </FormControl>
            ) : (
              <TextField
                label="Custom Start Time"
                name="startTime"
                value={form.startTime}
                onChange={handleCustomStart}
                placeholder="e.g. 01:00 PM"
                margin="dense"
                fullWidth
                inputProps={{ pattern: "^(0[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$" }}
                helperText="Format: hh:mm AM/PM"
                onBlur={() => { if (!form.startTime) setCustomStart(false); }}
              />
            )}
          </Box>
          <Box flex={1}>
            {!customEnd ? (
              <FormControl fullWidth>
                <InputLabel>End Time</InputLabel>
                <Select
                  name="endTime"
                  value={endTimes.includes(form.endTime) ? form.endTime : ''}
                  onChange={e => {
                    if (e.target.value === '') {
                      setCustomEnd(true);
                      setForm(prev => ({ ...prev, endTime: '' }));
                    } else {
                      handleChange(e);
                    }
                  }}
                  displayEmpty
                >
                  {endTimes.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                  <MenuItem value=""><em>Custom</em></MenuItem>
                </Select>
              </FormControl>
            ) : (
              <TextField
                label="Custom End Time"
                name="endTime"
                value={form.endTime}
                onChange={handleCustomEnd}
                placeholder="e.g. 01:00 PM"
                margin="dense"
                fullWidth
                inputProps={{ pattern: "^(0[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$" }}
                helperText="Format: hh:mm AM/PM"
                onBlur={() => { if (!form.endTime) setCustomEnd(false); }}
              />
            )}
          </Box>
        </Box>
      )}
      <TextField label="Preferred location" name="location" value={form.location} onChange={handleChange} fullWidth margin="normal" />
      <FormControlLabel
        control={<Checkbox name="anywhere" checked={form.anywhere} onChange={handleChange} />}
        label="Anywhere"
      />
      <Box marginY={2}>
        <label htmlFor="photo-upload">
          <Button variant="outlined" component="span">
            Upload photo
          </Button>
        </label>
        <input
          id="photo-upload"
          type="file"
          accept="image/*"
          onChange={handlePhoto}
          style={{ display: 'none' }}
        />
      </Box>
      <Button variant="contained" color="primary" type="submit" fullWidth>Submit</Button>
      <Button onClick={onBack} fullWidth style={{ marginTop: 8 }}>Back</Button>
    </form>
  );
}

export default MaidForm;
