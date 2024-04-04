let history = JSON.parse(localStorage.getItem('history')) || [];
    history.push({url: window.location.href, timestamp: new Date()});
    localStorage.setItem('history', JSON.stringify(history));