// dockForm.js

// Importamos Firestore desde firebase.js
import { db } from './firebase';
import { collection, addDoc, Timestamp } from "firebase/firestore";

// Función para enviar el formulario
const dockForm = document.getElementById('dockForm');

dockForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("Formulario enviado, empezando captura de datos...");

    // Capturamos datos del formulario
    const employeeNameUnload = document.getElementById('unloadEmployeeName').value;
    const startTimeUnload = document.getElementById('startUnloadTime').value;
    const finishTimeUnload = document.getElementById('finishUnloadTime').value;
    const storeLocation = document.getElementById('storeLocation').value;
    const trailerNumber = document.getElementById('trailerNumber').value;
    const processForSherman = document.getElementById('processSherman').value;
    const rawApparelAmount = document.getElementById('rawApparelAmount').value;
    const rawHardlineAmount = document.getElementById('rawHardlineAmount').value;
    const loadEmployeeName = document.getElementById('loadEmployeeName').value;
    const startLoadTime = document.getElementById('startLoadTime').value;
    const finishLoadTime = document.getElementById('finishLoadTime').value;
    const destination = document.getElementById('destination').value;
    const trailerNumberLoad = document.getElementById('trailerNumberLoad').value;
    const apparelRacks = document.getElementById('apparelRacks').value;
    const hardlineTotes = document.getElementById('hardlineTotes').value;
    const supplies = document.querySelector('input[name="supplies"]:checked').value;
    const equipment = document.querySelector('input[name="equipment"]:checked').value;

    console.log("Datos capturados:", {
        employeeNameUnload,
        startTimeUnload,
        finishTimeUnload,
        storeLocation,
        trailerNumber,
        processForSherman,
        rawApparelAmount,
        rawHardlineAmount,
        loadEmployeeName,
        startLoadTime,
        finishLoadTime,
        destination,
        trailerNumberLoad,
        apparelRacks,
        hardlineTotes,
        supplies,
        equipment
    });

    // Añadir datos a Firestore
    try {
        await addDoc(collection(db, 'dock_department'), {
            employeeNameUnload,
            startTimeUnload,
            finishTimeUnload,
            storeLocation,
            trailerNumber,
            processForSherman,
            rawApparelAmount,
            rawHardlineAmount,
            loadEmployeeName,
            startLoadTime,
            finishLoadTime,
            destination,
            trailerNumberLoad,
            apparelRacks,
            hardlineTotes,
            supplies,
            equipment,
            date: Timestamp.now()  // Timestamp de Firebase para fecha y hora actuales
        });
        console.log("Datos enviados a Firestore correctamente");
        alert("Datos guardados correctamente");
    } catch (e) {
        console.error("Error al guardar los datos: ", e);
        alert("Error al guardar los datos");
    }

    // Reiniciar el formulario
    dockForm.reset();
});



