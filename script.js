// script.js
function calculateScore() {
    let score = 0;
    const totalScore = 100; // Total de puntos posibles (10 preguntas con 10 puntos cada una)

    // Respuestas correctas para cada pregunta
    const correctAnswers = {
        q1a: 'Es una colección de elementos informáticos autónomos que se muestran a sus usuarios como un sistema único y coherente.',
        q1b: ['Compartir recursos: Reducir costos, facilitar la colaboración y el intercambio de información.', 'Transparente a usuarios finales: La capacidad de un sistema distribuido para ocultar la complejidad del sistema a los usuarios y permitirles interactuar con el sistema de manera transparente.'],
        q1c: 'Centralizados: Simplicidad. Fácil de administrar. Punto de falla único. Distribuidos: Tolerante a fallas. Escalable. Aprovechamiento de los recursos. Más complejo de administrar. Dependiente de las conexiones.',
        q2a: 'El patrón MVP se basa en separar los componentes de la aplicación en tres capas: Modelo, Vista y Presentador.',
        q2b: ['Reusabilidad. Reutilización de capas correctamente creadas y definidas.', 'Independencia entre las capas. Facilita la escalabilidad y el mantenimiento del código.'],
        q3a: ['Online', 'Offline', 'Híbrida'],
        q3b: 'Utilizaría el escenario online ya que los vendedores necesitan saber el estado del stock de los productos en tiempo real y se cuenta con varias sucursales.',
        q4a: ['Activity', 'Intent', 'Spinner'],
        q4b: 'Utilizaría el ConstraintLayout ya que me permite organizar los componentes de la pantalla de forma relativa a los otros componentes y márgenes.',
        q5: 'public void verEstudiante(View view) { Intent intent = new Intent(this, VerEstudiante.class); Bundle bundle = new Bundle(); bundle.putInt("CI", estudianteCI); intent.putExtras(bundle); startActivity(intent); }',
        q6: '1. Pila: MainActivity 2. Pila: MainActivity, SegundaActivity 3. Pila: MainActivity, SegundaActivity, TercerActivity 4. Pila: MainActivity, SegundaActivity, TercerActivity 5. Pila: MainActivity, SegundaActivity, TercerActivity 6. Pila: MainActivity, SegundaActivity',
        q7: 'public class MainActivity extends AppCompatActivity { private EditText entrada; @Override protected void onCreate(Bundle savedInstanceState) { super.onCreate(savedInstanceState); setContentView(R.layout.activity_main); entrada = findViewById(R.id.editEntrada); String leoTexto = entrada.getText().toString(); } }',
        q8a: 'Interoperabilidad. Independientes de cualquier plataforma o lenguaje de programación. Alcance global. Están disponibles en cualquier parte con acceso a Internet. Reutilización de componentes. Permiten compartir funcionalidades y datos entre aplicaciones, lo que fomenta la reutilización de los componentes.',
        q8b: 'El proveedor del servicio web o service provider. El solicitante del servicio web o service requester. El corredor de servicios o service broker.',
        q9a: 'El hilo principal es el programa en ejecución. Los hilos en segundo plano pueden realizar tareas independientes al hilo principal.',
        q9b: 'No bloquear el hilo principal con tareas de larga duración. No modificar la interfaz de usuario desde un hilo de trabajo.',
        q10a: 'Permite a la aplicación acceder a datos o acciones restringidas del sistema.',
        q10b: 'Los permisos los definimos en el manifiesto de nuestra aplicación.',
        q10c: 'Necesito permisos de acceso a internet y acceso al estado de la conexión.',
        q10d: '<uses-permission android:name="android.permission.INTERNET"/>\n<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>'
    };

    // Obtener respuestas del formulario
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);

    // Calcular el puntaje
    let userAnswers = {};
    formData.forEach((value, key) => {
        if (!userAnswers[key]) {
            userAnswers[key] = [];
        }
        userAnswers[key].push(value);
    });

    for (let [question, answer] of Object.entries(userAnswers)) {
        const correctAnswer = correctAnswers[question];
        if (Array.isArray(correctAnswer)) {
            // Respuestas múltiples
            if (correctAnswer.length === answer.length && correctAnswer.every(val => answer.includes(val))) {
                score += 10; // Cada pregunta vale 10 puntos
            }
        } else if (Array.isArray(answer)) {
            // Convertir respuestas del usuario en texto único para comparar
            if (answer.join(' ').trim() === correctAnswer.trim()) {
                score += 10; // Cada pregunta vale 10 puntos
            }
        } else if (answer.join(' ').trim() === correctAnswer.trim()) {
            score += 10; // Cada pregunta vale 10 puntos
        }
    }

    // Mostrar el resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<div class="alert ${score === totalScore ? 'alert-success' : 'alert-warning'}" role="alert">
        Tu puntuación es ${score} de ${totalScore}.
    </div>`;
}
