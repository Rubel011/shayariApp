async function generateShayari() {
    const keywordInput = document.getElementById('keywordInput');
    const shayariResult = document.getElementById('shayariResult');
    
    const response = await fetch(`http://localhost:3000/generate-shayari?keyword=${keywordInput.value }`);
  
    const data = await response.json();
    shayariResult.textContent = data.shayari;
  }
  