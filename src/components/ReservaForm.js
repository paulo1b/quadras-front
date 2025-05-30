import React from 'react';

function ReservaForm() {
  // Função para mostrar alerta ao clicar
  const handleReservaClick = (e) => {
    e.preventDefault(); // Evita que a página recarregue ao enviar o formulário
    alert('Reserva realizada com sucesso!');
  };

  return (
    <section className="reserva-form">
      <h3>Faça sua Reserva</h3>
      <form>
        <label>
          Nome:
          <input type="text" name="nome" />
        </label>
        <label>
          Data:
          <input type="date" name="data" />
        </label>
        <label>
          Quadra:
          <select>
            <option>Futebol</option>
            <option>Vôlei</option>
            <option>Tênis</option>
          </select>
        </label>
        <button type="submit" onClick={handleReservaClick}>Reservar</button>
      </form>
    </section>
  );
}

export default ReservaForm;
