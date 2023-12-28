import requests

# Your data
data = {
    'Type': 'Camry',
    'Options': 'Full',
    'Mileage': 25000,
    'vehicle_age': 1
}

# URL of your Flask API endpoint
url = 'http://127.0.0.1:5000/predict'  # Replace with your server address

# Sending POST request with data
response = requests.post(url, json=data)  # Pass the data dictionary directly

# Print the response
print(response.json())
