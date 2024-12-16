document.getElementById('apiButton').addEventListener('click', () => {
    fetch('https://<your-api-gateway-url>/hello') // Replace with your API Gateway URL
      .then(response => response.json())
      .then(data => {
        document.getElementById('apiResponse').textContent = data.message;
      })
      .catch(error => console.error('Error:', error));
  });
  