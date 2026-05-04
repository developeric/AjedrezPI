// src/components/SearchBar.jsx

export default function SearchBar({setBusqueda}) {
    return (
        <div className=" fixed flex w-full max-w-2xl mx-auto mb-8 mt-2">
            <form onSubmit={(e) => e.preventDefault()} className="relative">

                {/* Ícono de lupa */}
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <svg
                        className="w-3 h-3 text-slate-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>

                {/* Input de texto */}
                <input
                    type="search"
                    className="block w-48 h-10 p-4 pl-12 text-sm text-white bg-slate-800 border border-slate-700 rounded-xl focus:ring-blue-500 focus:border-blue-500 placeholder-slate-400 outline-none transition-all shadow-md"
                    placeholder="Pieza/Estrategia"
                    onChange={(e)=>{setBusqueda(e.target.value)}}
                    required
                />  

            </form>
        </div>
    );
}