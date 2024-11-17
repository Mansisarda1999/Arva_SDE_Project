# Arva Demo Field Management

Arva Demo Field Management is a full-stack application designed to manage field-related data. It allows users to add, view, edit, and delete field information through a responsive and intuitive interface. The project combines **Django** (backend) and **React** (frontend) for a seamless and robust solution.

![image](https://github.com/user-attachments/assets/b0fa692f-aec5-4fc2-b665-122ee453a82b)

---

## Features

### Backend:
- Built with Django and Django REST Framework.
- CRUD operations for managing **Fields Information**
- RESTful API endpoints for data access.
- PostgreSQL database integration for storing data.
- File upload functionality using Django's file storage.
- Cross-Origin Resource Sharing (CORS) enabled for frontend-backend communication.

### Frontend:
- Developed using React for modern and dynamic user interfaces.
- Responsive table for displaying field data.
- Modals for adding and editing records.
- Styled with Ant Design and custom CSS for a clean design.
- Fully responsive layout for different screen sizes.

---

## Technologies Used

### Backend:
- **Python**: Programming language for backend development.
- **Django**: Framework for building APIs and managing data models.
- **Django REST Framework**: For creating RESTful APIs.
- **PostgreSQL**: Database for data storage.
- **CORS Headers**: Enabling cross-origin requests.

### Frontend:
- **React**: JavaScript library for building user interfaces.
- **Ant Design**: UI component library for React.
- **Axios**: For HTTP requests to the backend APIs.
- **CSS**: Custom styling for the frontend.

---

## Prerequisites

Ensure the following tools are installed on your system:
- **Python 3.x**
- **Node.js**
- **PostgreSQL**

---

## Installation and Setup

### Backend Setup:
1. Create and activate a virtual environment:
   ```bash
   python -m venv env
   .\env\Scripts\activate     # For Windows
2. Install required Python dependencies:
   ```bash
   pip install -r requirements.txt  
3. Navigate to the backend directory:
   ```bash
   cd .\DjangoAPI\
4. Configure your PostgreSQL database in settings.py:
   ```bash
    DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'demo_project_db',
        'USER': 'postgres',
        'PASSWORD':'**********',
        'HOST':'localhost',
        'PORT':'5432'
    }
    }
5. Run database migrations:
   ```bash
    python manage.py makemigrations
    python manage.py migrate
6. Start the Django development server:
   ```bash
    python manage.py runserver

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd .\reactapp\
2. Install React dependencies:
   ```bash
      npm install
3. Start the React development server:
   ```bash
      npm start

### API Endpoints
Fields API:
GET : Retrieve all records.
POST : Add a new new record.
PUT : Update a record.
DELETE : Delete a department.

### Folder Structure:
![image](https://github.com/user-attachments/assets/10bc7ce2-b01c-4316-966b-eeb7c4b311db)

### Frontend:
![image](https://github.com/user-attachments/assets/e2a66b1d-190b-4fae-b815-a1f95b487ae6)

### Backend:
![image](https://github.com/user-attachments/assets/aa00b4f3-c2ed-426a-bbf9-3debc16803b6)

### Usage:
1. Open the frontend in your browser at http://localhost:3000.
2. Use the Add New Record button to add a new field.
3. View the field data in the table.
4. Edit or delete fields using the Edit and Delete buttons in the table.

