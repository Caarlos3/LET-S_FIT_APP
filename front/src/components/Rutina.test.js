
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Rutina from './Rutina';

function mockFetchJson(data, ok = true) {
    global.fetch.mockResolvedValueOnce({
        ok,
        json: async () => data,
    });
}

beforeEach(() => {
    process.env.REACT_APP_API_BASE = 'http://test-api';
    global.fetch = jest.fn();
});

afterEach(() => {
    jest.resetAllMocks();
});

test('al montar el componente, hace fetch a la API y muestra que no hay rutinas', async () => {
    mockFetchJson([]);
    render(<Rutina />);

    await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith('http://test-api/routines');
    });

    const mensajeVacio = screen.getByText(/No hay rutinas guardadas/i);
    expect(mensajeVacio).toBeInTheDocument();
});


test('si el nombre de la rutina esta vacio, muestra un error', async () => {

    mockFetchJson([]);
    render(<Rutina />);

    const botonGuardar = screen.getByRole('button', { name: /Guardar Rutina/i });
    fireEvent.click(botonGuardar);

    const mensajeError = await screen.findByText(/El nombre de la rutina no puede estar vacío/i);
    expect(mensajeError).toBeInTheDocument();

    expect(global.fetch).toHaveBeenCalledTimes(1);

});
