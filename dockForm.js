import { db } from './firebase';  
import { collection, addDoc, Timestamp } from "firebase/firestore";

// Función para enviar el formulario
const dockForm = document.getElementById('dockForm');

dockForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Capturando datos del formulario
    const unloadDate = document.getElementById('unloadDate').value;
    const employeeNameUnload = document.getElementById('unloadEmployeeName').value;
    const startTimeUnload = document.getElementById('startUnloadTime').value;
    const finishTimeUnload = document.getElementById('finishUnloadTime').value;
    const storeLocation = document.getElementById('storeLocation').value;
    const trailerNumber = document.getElementById('trailerNumber').value;

    const processForSherman = document.getElementById('processSherman').value;
    const rawDonationApparel = document.getElementById('rawApparelAmount').value;
    const rawDonationHardlines = document.getElementById('rawHardlineAmount').value;

    const loadDate = document.getElementById('loadDate').value;
    const employeeNameLoad = document.getElementById('loadEmployeeName').value;
    const startTimeLoad = document.getElementById('startLoadTime').value;
    const finishTimeLoad = document.getElementById('finishLoadTime').value;
    const destination = document.getElementById('destination').value;
    const trailerNumberLoad = document.getElementById('trailerNumberLoad').value;

    const apparelRacks = document.getElementById('apparelRacks').value;
    const hardlinesTotes = document.getElementById('hardlineTotes').value;
    const supplies = document.querySelector('input[name="supplies"]:checked').value;
    const equipment = document.querySelector('input[name="equipment"]:checked').value;

    // Añadir datos a Firestore con la fecha y hora actual
    try {
        await addDoc(collection(db, 'dock_department'), {
            unloadDate: unloadDate,
            employeeNameUnload: employeeNameUnload,
            startTimeUnload: startTimeUnload,
            finishTimeUnload: finishTimeUnload,
            storeLocation: storeLocation,
            trailerNumber: trailerNumber,
            processForSherman: processForSherman,
            rawDonationApparel: rawDonationApparel,
            rawDonationHardlines: rawDonationHardlines,
            loadDate: loadDate,
            employeeNameLoad: employeeNameLoad,
            startTimeLoad: startTimeLoad,
            finishTimeLoad: finishTimeLoad,
            destination: destination,
            trailerNumberLoad: trailerNumberLoad,
            apparelRacks: apparelRacks,
            hardlinesTotes: hardlinesTotes,
            supplies: supplies,
            equipment: equipment,
            date: Timestamp.now()  // Captura la fecha y hora actuales
        });
        alert("Datos guardados correctamente");
    } catch (e) {
        console.error("Error al guardar los datos: ", e);
        alert("Error al guardar los datos");
    }

    // Reiniciar el formulario
    dockForm.reset();
});


