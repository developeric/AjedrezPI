export default function Card() {
  return (
    <div className="mx-3 d-flex my-3 max-w-sm bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden dark:bg-gray-800 dark:border-gray-700">
      
      {/* Imagen superior (Opcional) */}
      <img 
        className="w-full h-48 object-cover" 
        src="https://via.placeholder.com/400x200" 
        alt="Imagen de ejemplo" 
      />
      
      {/* Contenedor del contenido */}
      <div className="p-5">
        
        {/* Título */}
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Pieza de Ejemplo
        </h5>
        
        {/* Descripción */}
        <p className="mb-4 font-normal text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit distinctio quam dicta cumque reprehenderit possimus        
        </p>
        
        {/* Botón de acción */}
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors">
          Saber más
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>
        
      </div>
    </div>
  );
}