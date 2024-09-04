# Chart Dashboard
This project is a web application that displays a dashboard with multiple types of charts, including a Candlestick Chart, Line Chart, Bar Chart, and Pie Chart. The frontend is built with Next.js, and the backend is built with Django. 
Backend handles data processing and provides APIs for each chart type, while Frontend fetches data from the Django backend and renders it using various chart types.. The charts fetch data from the Django API and render it dynamically.

## Setup Instructions
#### Backend (Django)
1. Navigate to the backend directory:
```
cd backend
```

2. Install dependencies:

- Create and activate a virtual environment.
```
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```

3. Install the required Python packages:
```
pip install django djangorestframework
```

4. Run database migrations:
```
python manage.py migrate
```

5. Run the Django development server
```
python manage.py runserver
```

* The Django backend will be available at http://localhost:8000/api/

#### Frontend (Next.js)
1. Navigate to the frontend directory:

```cd frontend```

2. install dependencies
```
 npm install
  ```

3. Run the Next.js development server:
```
npm run dev
```


## Libraries and Tools Used
* Backend (Django):
- **Django**: A high-level Python web framework that encourages rapid development and clean, pragmatic design.
- Django REST Framework: A powerful and flexible toolkit for building Web APIs.

* Frontend (Next.js):
- **Next.js**: A React framework that enables several extra features, including server-side rendering and generating static websites.
- **Recharts**: A charting library built on React components, which provides highly customizable and performant charts.
- **Axios**: A promise-based HTTP client for making requests to the Django API.
