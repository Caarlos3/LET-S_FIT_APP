import { render, screen } from '@testing-library/react';
import PersonalInfo from './PersonalInfo';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
    global.fetch = jest.fn();
});

afterEach(() => {
    jest.clearAllMocks();
});

test('carga de datos del servidor', async () => {
    fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({
            peso: 80,
            altura: 180,
            edad: 30
        }),
    });

    render(<PersonalInfo />);

    expect(await screen.findByText('80')).toBeInTheDocument();
    expect(await screen.findByText('180')).toBeInTheDocument();
    expect(await screen.findByText('30')).toBeInTheDocument();
});

test('al Editar se habilitan los inputs', async () => {
    fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({
            peso: '',
            altura: '',
            edad: ''
        }),
    });

    render(<PersonalInfo />);

    const editButton = await screen.findByRole('button', { name: /editar/i });
    await userEvent.click(editButton);

    const inputs = screen.getAllByRole('spinbutton');
    expect(inputs).toHaveLength(3);
});

test('al Guardar se envian los datos al servidor', async () => {
    fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({
            peso: '',
            altura: '',
            edad: ''
        }),
    });

    render(<PersonalInfo />);

    const editButton = await screen.findByRole('button', { name: /editar/i });
    await userEvent.click(editButton);

    const inputs = screen.getAllByRole('spinbutton');

    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], '80');

    await userEvent.clear(inputs[1]);
    await userEvent.type(inputs[1], '180');

    await userEvent.clear(inputs[2]);
    await userEvent.type(inputs[2], '30');

    fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ peso: 80, altura: 180, edad: 30 }),
    });

    const saveButton = screen.getByRole('button', { name: /guardar/i });
    await userEvent.click(saveButton);

    expect(fetch).toHaveBeenCalledWith('http://localhost:5001/personal_info', expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ peso: 80, altura: 180, edad: 30 }),
    }));

    expect(await screen.findByText('80')).toBeInTheDocument();
    expect(await screen.findByText('180')).toBeInTheDocument();
    expect(await screen.findByText('30')).toBeInTheDocument();
});