import App from '@/App';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import BookingPage from './BookingPage';
import { BOOKING_EMBED_URL, BOOKING_PAGE_URL } from './constants';

const renderPage = () =>
  render(
    <HelmetProvider>
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    </HelmetProvider>
  );

describe('BookingPage', () => {
  it('embeds the frameable Zoho address, not the page that refuses framing', () => {
    renderPage();
    const frame = screen.getByTitle('Book a 1-on-1 with Mohit');
    expect(frame).toHaveAttribute('src', BOOKING_EMBED_URL);
    expect(BOOKING_EMBED_URL).toContain('/portal-embed#/');
  });

  it('offers the full booking page when the embed does not load', () => {
    renderPage();
    expect(screen.getByRole('link', { name: 'Open the booking page' })).toHaveAttribute(
      'href',
      BOOKING_PAGE_URL
    );
  });

  it('is served at /book without the intro animation', async () => {
    const { container } = render(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/book']}>
          <App />
        </MemoryRouter>
      </HelmetProvider>
    );
    expect(await screen.findByTitle('Book a 1-on-1 with Mohit')).toBeInTheDocument();
    expect(container.querySelector('canvas')).toBeNull();
  });
});
