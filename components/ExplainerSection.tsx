import voorbeeld from "/public/voorbeeld.png";
import wazig from "/public/wazig.png";
import resultaat from "/public/resultaat.png";

export default function ExplainerSection() {
  return (
    <div
      id="Como funciona"
      className="w-full max-w-6xl mt-16 p-8 bg-gray-100 rounded-lg space-y-8">
      <h2 className="text-3xl  text-center mb-8">Cómo funciona</h2>

      {/* Step 1: Upload your images */}
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="text-3xl font-bold text-sky-600 bg-white border-2 border-sky-600 rounded-full w-10 h-10 flex items-center justify-center">
            1
          </div>
          <h3 className="text-2xl font-semibold">Sube tus imágenes</h3>
        </div>
        <p className="text-l text-gray-600 text-center">
          Sube más de 4 selfies de alta calidad: de frente, 1 persona
          encuadrada, no gafas o sombreros.
        </p>
        <img
          src={voorbeeld.src}
          alt="AI Headshot example"
          className="rounded-lg object-cover w-full md:w-3/4 lg:w-1/2 mx-auto"
        />
      </div>

      {/* Step 2: Train your model */}
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="text-3xl font-bold text-sky-600 bg-white border-2 border-sky-600 rounded-full w-10 h-10 flex items-center justify-center">
            2
          </div>
          <h3 className="text-2xl font-semibold">
            Nuestra IA se pone a trabajar
          </h3>
        </div>
        <p className="text-l text-gray-600 text-center">
          La magia de la IA tarda unos 20 minutos. ¡Recibirás un correo
          electrónico cuando esté listo!{" "}
        </p>
        <img
          src={wazig.src}
          alt="AI Headshot blur"
          className="rounded-lg object-cover w-full md:w-3/4 lg:w-1/2 mx-auto"
        />
      </div>

      {/* Step 3: Generate images */}
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="text-3xl font-bold text-sky-600 bg-white border-2 border-sky-600 rounded-full w-10 h-10 flex items-center justify-center">
            3
          </div>
          <h3 className="text-2xl font-semibold">
            Consigue increíbles fotografías
          </h3>
        </div>
        <p className="text-l text-gray-600 text-center">
          Una vez que tu modelo esté entrenado, ¡te daremos increíbles
          fotografías!{" "}
        </p>
        <img
          src={resultaat.src}
          alt="AI Headshot result"
          className="rounded-lg object-cover w-full md:w-3/4 lg:w-1/2 mx-auto"
        />
      </div>
    </div>
  );
}
