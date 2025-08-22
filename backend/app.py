from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import os
from werkzeug.utils import secure_filename
from PIL import Image

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = 'uploads'

if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

# Database setup
DB_NAME = 'maidfinder.db'

def get_db():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db()
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS maids (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        phone TEXT,
        work_type TEXT,
        time TEXT,
        location TEXT,
        anywhere INTEGER,
        photo TEXT
    )''')
    c.execute('''CREATE TABLE IF NOT EXISTS owners (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        address TEXT,
        phone TEXT
    )''')
    conn.commit()
    conn.close()

init_db()

@app.route('/api/maids', methods=['POST'])
def add_maid():
    data = request.form
    photo = request.files.get('photo')
    photo_filename = None
    if photo:
        filename = secure_filename(photo.filename)
        photo_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        photo.save(photo_path)
        photo_filename = filename
    conn = get_db()
    c = conn.cursor()
    c.execute('''INSERT INTO maids (name, phone, work_type, time, location, anywhere, photo)
                 VALUES (?, ?, ?, ?, ?, ?, ?)''',
              (data['name'], data['phone'], data['workType'], data['time'], data['location'], int(data.get('anywhere', 0)), photo_filename))
    conn.commit()
    conn.close()
    return jsonify({'status': 'success'})

@app.route('/api/owners', methods=['POST'])
def add_owner():
    data = request.json
    conn = get_db()
    c = conn.cursor()
    c.execute('''INSERT INTO owners (name, address, phone) VALUES (?, ?, ?)''',
              (data['name'], data['address'], data['phone']))
    conn.commit()
    conn.close()
    return jsonify({'status': 'success'})

if __name__ == '__main__':
    app.run(debug=True)
