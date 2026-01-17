import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Rutina from "./Rutina";
import e from "express";

function mockFetchJson(data, ok = true) {
  global.fetch.mockResolvedValueOnce({
    ok,
    json: async () => data,
  });
}

beforeEach(() => {
  process.env.REACT_APP_API_BASE = "http://test-api";
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.resetAllMocks();
});

test("al montar el componente, hace fetch a la API y muestra que no hay rutinas", async () => {
  mockFetchJson([]);
  render(<Rutina />);

  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledWith("http://test-api/routines");
  });

  const mensajeVacio = screen.getByText(/No hay rutinas guardadas/i);
  expect(mensajeVacio).toBeInTheDocument();
});

test("si el nombre de la rutina esta vacio, muestra un error y no hace POST", async () => {
  mockFetchJson([]);
  render(<Rutina />);

  const botonGuardar = screen.getByRole("button", { name: /Guardar Rutina/i });
  fireEvent.click(botonGuardar);

  const mensajeError = await screen.findByText(
    /El nombre de la rutina es requerido/i
  );
  expect(mensajeError).toBeInTheDocument();

  expect(global.fetch).toHaveBeenCalledTimes(1);
});


test('elimina una rutina al hacer clic en boton eliminar', async () => {
    const rutinaEjemplo = { id: 1, name: 'Rutina para eliminar', exercises: [] };
    mockFetchJson([rutinaEjemplo]);
    mockFetchJson({}, true);

    const confirmSpy = jest.spyOn(window, 'confirm').mockImplementation(() => true);

    render(<Rutina />);

    const tituloRutina = await screen.findByText(/Rutina para eliminar/i);
    expect(tituloRutina).toBeInTheDocument();

    const botones = screen.getAllByRole('button');
    const botonEliminar = botones.find(btn =>
        btn.classList.contains('btn-outline-danger')
    );

    fireEvent.click(botonEliminar);

    await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(
            expect.stringContaining('/routines/1'),
            expect.objectContaining({ method: 'DELETE' })
        );
    });

    await waitFor(() => {
        expect(screen.queryByText(/Rutina para eliminar/i)).not.toBeInTheDocument();
    });

    confirmSpy.mockRestore();
});
