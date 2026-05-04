export default function Card({ titulo, descripcion, imagen, imagenHover }) {
    return (



        <div className="m-3 max-w-75 max-h-120 bg-white border border-gray-20 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden dark:bg-gray-800 dark:border-gray-700">

            {/* Imagen superior (Opcional) */}
            <img
                className=" mx-21 w-auto h-auto items-center justify-center object-cover"
                src={imagen}
                alt={"WhitePiece.png"}
            />

            {/* Contenedor del contenido */}
            <div className="p-5">

                {/* Título */}
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {titulo}
                </h5>

                {/* Descripción */}
                <p className="mb-4 font-normal text-gray-600 dark:text-gray-300">
                    {descripcion}
                </p>

                {/* Botón de acción */}
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors">
                    Saber más
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>

            </div>
        </div>
    );
}