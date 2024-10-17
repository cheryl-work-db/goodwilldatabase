// Dock Form Submission Handling
document.getElementById('dockForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect data from the form
  const dockData = {
    unload: {
      date: document.getElementById('unloadDate').value,
      employeeName: document.getElementById('unloadEmployeeName').value,
      startTime: document.getElementById('startUnloadTime').value,
      finishTime: document.getElementById('finishUnloadTime').value,
      storeLocation: document.getElementById('storeLocation').value,
      trailerNumber: document.getElementById('trailerNumber').value,
      merchandise: {
        processSherman: document.getElementById('processSherman').value,
        rawApparelAmount: document.getElementById('rawApparelAmount').value,
        rawHardlineAmount: document.getElementById('rawHardlineAmount').value
      }
    },
    load: {
      date: document.getElementById('loadDate').value,
      employeeName: document.getElementById('loadEmployeeName').value,
      startTime: document.getElementById('startLoadTime').value,
      finishTime: document.getElementById('finishLoadTime').value,
      destination: document.getElementById('destination').value,
      trailerNumber: document.getElementById('trailerNumberLoad').value,
      merchandise: {
        apparelRacks: document.getElementById('apparelRacks').value,
        hardlineTotes: document.getElementById('hardlineTotes').value,
        supplies: document.querySelector('input[name="supplies"]:checked').value,
        equipment: document.querySelector('input[name="equipment"]:checked').value
      }
    }
  };

  // Log the data (this would be replaced with a call to Firestore)
  console.log('Dock Data:', dockData);

  // Clear the form
  document.getElementById('dockForm').reset();
});


