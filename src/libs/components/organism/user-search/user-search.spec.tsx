import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';

import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

import UserSearch from './user-search';
import { API_URL } from '@/libs/constants/urls';

const mockUsers = {
  items: [
    {
      id: 1,
      login: 'testuser1',
      avatar_url: 'https://example.com/avatar1.png',
      html_url: 'https://github.com/testuser1',
    },
    {
      id: 2,
      login: 'testuser2',
      avatar_url: 'https://example.com/avatar2.png',
      html_url: 'https://github.com/testuser2',
    },
  ],
};

// Mock server for API calls
const server = setupServer(
  http.get(`${API_URL}/search/*`, () => {
    return HttpResponse.json(mockUsers);
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('UserSearch Component', () => {
  it('renders correctly', () => {
    render(<UserSearch />);

    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByText(/Search Users/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeDisabled();
  });

  it('enables the submit button when a valid username is entered', async () => {
    render(<UserSearch />);

    const input = screen.getByLabelText(/Username/i);
    const button = screen.getByRole('button', { name: /search/i });

    fireEvent.change(input, { target: { value: 'testuser' } });
    await waitFor(() => expect(button).toBeEnabled());
  });

  it('submits the form and displays users', async () => {
    render(<UserSearch />);

    const input = screen.getByLabelText(/Username/i);
    const button = screen.getByRole('button', { name: /search/i });

    await act(async () => {
      fireEvent.change(input, { target: { value: 'testuser' } });
      fireEvent.click(button);
    });

    await waitFor(() =>
      expect(screen.getByText(/testuser1/i)).toBeInTheDocument(),
    );
  });

  it('shows error message when API fails', async () => {
    server.use(
      http.get(`${API_URL}/search/*`, () => {
        return HttpResponse.json(
          { message: 'Internal Server Error' },
          { status: 500 },
        );
      }),
    );

    render(<UserSearch />);

    const input = screen.getByLabelText(/Username/i);
    const button = screen.getByRole('button', { name: /search/i });

    fireEvent.change(input, { target: { value: 'testuser' } });
    fireEvent.click(button);

    await waitFor(() =>
      expect(screen.getByText(/Internal Server Error/i)).toBeInTheDocument(),
    );
  });
});
