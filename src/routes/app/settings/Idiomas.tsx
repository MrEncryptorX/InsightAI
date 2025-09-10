/*import React from "react";*/

export function PaginaIdiomas() {
  return (
    <div className="p-6 text-3xl">
      <h1 className="text-4xl font-bold mb-4">Configurações de Idioma</h1>
      <p className="text-gray-600 mb-6">
        Selecione o idioma preferido para a interface do aplicativo.
      </p>

      <div className="space-y-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="language" value="pt" defaultChecked />
          <span>Português (Brasil)</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="language" value="en" />
          <span>Ingles (US)</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="language" value="es" />
          <span>Espanhol</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="language" value="fr" />
          <span>Frances</span>
        </label>
      </div>
    </div>
  );
}
